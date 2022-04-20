import {Fragment, useEffect, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import {MenuItemType} from "../../../mylib/MyTypes";
import MenuContent from "./MenuContent";
import MenuTabs from "./MenuTabs";
import {API, Storage} from "aws-amplify";
import {getCategory} from "../../../graphql/queries";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./Menu.module.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const selection = useAppSelector((state: RootState) => state.menu.selection);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchMenuItems = async () => {
      try {
        const apiData: GraphQLResult<any> = await API.graphql({
          query: getCategory,
          variables: {id: selection},
        });
        const items: Array<MenuItemType> = apiData.data.getCategory.items.items;

        const categoryItems: Array<MenuItemType> = [];

        for (const item of items) {
          const imageURL: string = await Storage.get(item.image, {
            level: "public",
          });
          categoryItems.push({
            id: item.id,
            title: item.title,
            description: item.description,
            image: item.image,
            imageURL: imageURL,
            price: item.price,
          });
        }
        setMenuItems(categoryItems);
        window.scrollTo({top: 0, left: 0, behavior: "auto"});
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, [selection]);

  return isLoading ? (
    <div className={styles.loader}>
      <LoaderIcon />
    </div>
  ) : (
    <Fragment>
      <MenuTabs />
      <MenuContent items={menuItems} />
    </Fragment>
  );
};

export default Menu;
