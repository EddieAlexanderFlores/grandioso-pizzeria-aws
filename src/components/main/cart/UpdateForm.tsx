import {ChangeEvent} from "react";
import styles from "./UpdateForm.module.css";

type Props = {
  className: string;
  quantity: number;
  onUpdateItemQuantity: (quantity: number) => void;
  onRemoveItem: () => void;
};

const UpdateForm = (props: Props) => {
  const className = props.className + " " + styles.form;

  const onUpdateItemHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const updatedItemQuantity: number = parseInt(event.target.value, 10);
    console.log("Update Item Quantity:", updatedItemQuantity);
    props.onUpdateItemQuantity(updatedItemQuantity);
  };

  return (
    <form className={className}>
      <select
        className={styles.select}
        name="quantities"
        id="quantity-select"
        value={props.quantity}
        onChange={onUpdateItemHandler}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        className={styles.button}
        type="button"
        onClick={props.onRemoveItem}
      >
        REMOVE
      </button>
    </form>
  );
};

export default UpdateForm;
