import {Fragment, MouseEvent, useEffect, useState} from "react";
import {MenuItemType} from "../../../mylib/MyTypes";
import {baseURL} from "../../../mylib/myURL";
import MenuContent from "./MenuContent";
import MenuTabs from "./MenuTabs";

const Menu = () => {
  const [category, setCategory] = useState<string>("pizza");
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    const url: RequestInfo = `${baseURL}/database/grandioso/menu/category/${category}.json`;

    const fetchMenuItems = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const categoryItems: MenuItemType[] = [];

        for (const item of result.data) {
          categoryItems.push({
            itemID: item.id,
            title: item.title,
            description: item.description,
            image: item.image,
            price: item.price,
          });
        }
        console.log(categoryItems);
        setMenuItems(categoryItems);
        window.scrollTo({top: 0, left: 0, behavior: "auto"});
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenuItems();
  }, [category]);

  const categorySelectHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const categorySelected: string = event.currentTarget.name;
    setCategory(categorySelected);
  };

  return (
    <Fragment>
      <MenuTabs onCategorySelect={categorySelectHandler} activeTab={category} />
      <MenuContent items={menuItems} />
    </Fragment>
  );
};

export default Menu;
