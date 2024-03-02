import { closeSheet } from "../../../app/slices/sheetSlice";
export default function closeSheetForm(dispatch) {
  const sheetForm = document.querySelector("#sheetForm");
  sheetForm.classList.remove("open-sheet-form");
  sheetForm.classList.add("close-sheet-form");

  const removeSheetForm = () => {
    setTimeout(() => {
      dispatch(closeSheet());
    }, 400);
  };

  removeSheetForm();
}
