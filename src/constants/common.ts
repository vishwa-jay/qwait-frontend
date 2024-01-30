import { AlertBoxProps } from "../components/Alert/alert-box";

export const COMPANY_NAME = "QueueManagers";
export const MAX_TEXTAREA_LENGHT = 50;
export const DEFAULT_PAGE_SIZE = 12;

export const defaultAlertValue: AlertBoxProps = {
  message: "",
  severity: "info",
  showAlert: false,
};

//error, success messages
export const REQUIRED_MSG = "Required";
export const TRAILING_SPACES_MSG = "Email cannot include leading and trailing spaces";
export const INVALID_EMAIL_MSG = "Not a proper email address";
export const MAX_TEXTAREA_LENGHT_MSG = `This field should be less than ${MAX_TEXTAREA_LENGHT}`;
export const SUCCESS_TRANSACTION_MSG = "Transaction completed successfully!";
export const ABORT_TRANSACTION_MSG = "No changes made! Operation abort."