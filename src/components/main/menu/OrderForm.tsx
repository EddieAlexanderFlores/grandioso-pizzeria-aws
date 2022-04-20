import {ChangeEvent, FormEvent, useState} from "react";
import styles from "./OrderForm.module.css";

type Props = {
  className: string;
  onAddToOrder: (quantity: number) => void;
};

const OrderForm = (props: Props) => {
  const [selectedQuantity, setSelectedQuantity] = useState<string>("1");

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemQuantity: number = parseInt(selectedQuantity, 10);
    props.onAddToOrder(itemQuantity);
  };

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(event.currentTarget.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <select
        className={styles.select}
        name="quantities"
        id="quantity-select"
        defaultValue="1"
        onChange={selectChangeHandler}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className={styles.button} type="submit">
        ADD TO ORDER
      </button>
    </form>
  );
};

export default OrderForm;
