import { useState } from "react";

// Rename your function to useSetDateTime
const useSetDateTime = () => {
    const [dateTime, setDateTime] = useState({ date: "", time: "" });
  
    const handleNext = (values: any) => {
      console.log("Next button clicked with values:", values);
    };
  
    const handleCancel = () => {
      console.log("Cancel button clicked");
    };
  
    return {
      dateTime,
      setDateTime,
      handleNext,
      handleCancel,
    };
  };
  
  export default useSetDateTime;
  