import {Fragment, useEffect, useState} from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useAppDispatch} from "./appStore/hooks";
import {initialUserState, setUserInfo} from "./appStore/slices/userSlice";
import {UserAttributesType, UserType} from "./mylib/MyTypes";
import {Hub, Auth, API} from "aws-amplify";
import {CognitoUser} from "amazon-cognito-identity-js";
import {HubCallback} from "@aws-amplify/core/lib-esm/Hub";
import {getCustomer} from "./graphql/queries";
import {GraphQLResult, GRAPHQL_AUTH_MODE} from "@aws-amplify/api-graphql";
import {createCustomer} from "./graphql/mutations";

const App = () => {
  const dispatch = useAppDispatch();
  const authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;

  const authUser: Omit<UserType, "address" | "password"> = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  };

  const addUserToDatabase = async () => {
    try {
      const getCustomerResult: GraphQLResult<any> = await API.graphql({
        query: getCustomer,
        variables: {
          id: authUser.email,
        },
        authMode,
      });

      if (!getCustomerResult.data.getCustomer) {
        const createCustomerResult: GraphQLResult<any> = await API.graphql({
          query: createCustomer,
          variables: {
            input: {
              id: authUser.email,
              email: authUser.email,
              firstName: authUser.firstName,
              lastName: authUser.lastName,
            },
          },
          authMode,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setAuthUser = (attributes: UserAttributesType) => {
    authUser.firstName = attributes.given_name;
    authUser.lastName = attributes.family_name;
    authUser.email = attributes.email;
    authUser.telephone = attributes.phone_number;
    dispatch(setUserInfo(authUser));
  };

  const authListener: HubCallback = ({payload: {event, data}}) => {
    console.log("Auth Listener...");
    switch (event) {
      case "signIn":
        console.log("user signed in");
        setAuthUser(data.attributes);
        addUserToDatabase();
        break;
      case "signUp":
        console.log("user signed up");
        break;
      case "signOut":
        console.log("user signed out");
        dispatch(setUserInfo(initialUserState));
        break;
      case "signIn_failure":
        // Incorrect username or password.
        console.log("user sign in failed");
        break;
      case "tokenRefresh":
        console.log("token refresh succeeded");
        break;
      case "tokenRefresh_failure":
        console.log("token refresh failed");
        break;
      case "configured":
        console.log("the Auth module is configured");
        break;
    }
  };

  const getCurrentUser = (): Promise<CognitoUser> =>
    Auth.currentAuthenticatedUser();

  const onAppLoad = async (): Promise<void> => {
    console.log("onAppLoad");
    try {
      const authUser = await getCurrentUser();

      if (!authUser) {
        console.log("User is signed out");
        return;
      }

      authUser.getUserAttributes((error, attributes) => {
        const authUserAttributes: UserAttributesType = {};

        if (error) {
          console.log(error);
          return;
        }

        for (const attribute of attributes!) {
          const key = attribute.getName();
          const value = attribute.getValue();
          authUserAttributes[key] = value;
        }

        setAuthUser(authUserAttributes);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAppLoad();
  }, []);

  useEffect(() => {
    Hub.listen("auth", authListener);

    return () => {
      console.log("Hub.remove AuthListener");
      Hub.remove("auth", authListener);
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
