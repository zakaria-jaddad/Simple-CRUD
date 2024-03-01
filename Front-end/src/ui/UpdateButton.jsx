import { useDispatch } from "react-redux";
import { fetchUserByID } from "../app/slices/sheetSlice";

const UpdateButton = ({ userID }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(fetchUserByID(userID));
        }}
        className="py-2.5 px-5 rounded-lg -z font-medium bg-teal-200 text-teal-800"
      >
        Update
      </button>
    </>
  );
};

export default UpdateButton;
