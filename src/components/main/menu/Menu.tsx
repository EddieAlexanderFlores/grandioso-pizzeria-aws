import {Fragment, useEffect, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import {MenuItemType} from "../../../mylib/MyTypes";
import MenuContent from "./MenuContent";
import MenuTabs from "./MenuTabs";
import {API, Storage} from "aws-amplify";
import {getMenuCategory} from "../../../graphql/queries";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import LoaderIcon from "../../ui/icons/LoaderIcon";

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const selection = useAppSelector((state: RootState) => state.menu.selection);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchMenuItems = async () => {
      try {
        const apiData: GraphQLResult<any> = await API.graphql({
          query: getMenuCategory,
          variables: {id: selection},
        });
        const items: Array<MenuItemType> =
          apiData.data.getMenuCategory.menuItems.items;

        const categoryItems: Array<MenuItemType> = [];

        for (const item of items) {
          const imageURL: string = await Storage.get(item.image, {
            level: "public",
          });
          const {id}: any = item;
          categoryItems.push({
            menuItemID: id,
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
    <LoaderIcon />
  ) : (
    <Fragment>
      <MenuTabs />
      <MenuContent items={menuItems} />
    </Fragment>
  );
};

export default Menu;
