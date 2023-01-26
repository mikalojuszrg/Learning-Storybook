import Alert from "./Alert";
export default { title: "Components/Alert", component: Alert };
export const DangerAlert = () => <Alert variant="danger"></Alert>;
export const WarningAlert = () => <Alert variant="warning"></Alert>;
export const InfoAlert = () => <Alert variant="info"></Alert>;
export const SuccessAlert = () => <Alert variant="success"></Alert>;
