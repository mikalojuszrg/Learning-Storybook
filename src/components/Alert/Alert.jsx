import { GrCircleAlert } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import styles from "./Alert.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

const alerts = {
  danger: [styles["alert--danger"], styles["alert"]],
  warning: [styles["alert--warning"], styles["alert"]],
  info: [styles["alert--info"], styles["alert"]],
  success: [styles["alert--success"], styles["alert"]],
  customText: {
    danger: "This is danger alert text",
    warning: "This is warning alert text",
    info: "This is info alert text",
    success: "This is success alert text",
  },
};

const Alert = ({ variant }) => {
  const classes = [styles.alert, styles[`alert--${variant}`]];
  return (
    <div className={cn(classes)}>
      <GrCircleAlert className={styles["alert__icon--exclamation"]} />
      <p>{alerts.customText[variant]}</p>
      <MdClose className={styles["alert__icon--close"]} />
    </div>
  );
};

export default Alert;
