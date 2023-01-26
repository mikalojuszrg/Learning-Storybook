import styles from "./Button.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

const Button = ({ primary, children }) => {
  return (
    <button
      className={
        primary
          ? cn(styles["button--primary"], styles["button"])
          : cn(styles["button--secondary"], styles["button"])
      }
    >
      {children}
    </button>
  );
};

export default Button;
