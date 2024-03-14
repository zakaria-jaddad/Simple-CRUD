import { useState } from "react";

const useSheetForm = (sheetData) => {
  const { isSheetOpen, userData } = sheetData;
  const [newUserData, setNewUserData] = useState(userData);

  return [isSheetOpen, [newUserData, setNewUserData]];
};
export default useSheetForm;
