import {MenuItemType} from "../../../mylib/MyTypes";
import styles from "./MenuContent.module.css";
import MenuItem from "./MenuItem";

type Props = {
  items: MenuItemType[];
};

const MenuContent = (props: Props) => {
  const items = props.items;

  return (
    <ul className={styles.menu}>
      {items.map((item) => (
        <MenuItem key={item.menuItemId} item={item} />
      ))}
    </ul>
  );
};

export default MenuContent;
