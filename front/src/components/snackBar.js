import { toast } from "react-toastify";

const snackBar = (types, text) => {
  switch (types) {
    case "sucess":
      return toast.success(text);
    case "error":
      return toast.error(text);
    case "warning":
      return toast.warning(text);
    case "info":
      return toast.info(text);
    default:
      return toast.success(text);
  }
};

export default snackBar;
