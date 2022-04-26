import {MouseEvent, useState} from "react";
import styles from "./UserAccount.module.css";
import {AccountContentType, AccountSelectionType} from "../../../mylib/MyTypes";
import AccountSelections from "./AccountSelections";
import Orders from "./Orders";
import Profile from "./Profile";

const UserAccount = () => {
  const [selection, setSelection] = useState<AccountSelectionType>("account");

  window.scrollTo({top: 0, left: 0, behavior: "auto"});

  const backButtonClickHandler = () => {
    setSelection("account");
  };

  const accountSelectionHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const content: AccountContentType = {
      selection: event.currentTarget.name as AccountSelectionType,
    };
    setSelection(content.selection);
  };
  let content: JSX.Element = (
    <AccountSelections onSelect={accountSelectionHandler} />
  );

  switch (selection) {
    case "account":
      content = <AccountSelections onSelect={accountSelectionHandler} />;
      break;
    case "orders":
      content = <Orders onBackButtonClick={backButtonClickHandler} />;
      break;
    case "profile":
      content = <Profile onBackButtonClick={backButtonClickHandler} />;
      break;
    default:
      content = <AccountSelections onSelect={accountSelectionHandler} />;
      break;
  }

  return (
    <div className={styles.account}>
      <h2 className={styles.header}>{selection}</h2>
      {content}
    </div>
  );
};

export default UserAccount;
