import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Users } from "../../api/users";
import closeSheetForm from "./utils/closeSheetForm";
import updateImage from "./utils/updateImage";
import "./styles/sheet.css";

const SheetForm = () => {
  const dispatch = useDispatch();
  const { isSheetOpen, userData } = useSelector((state) => state.sheet);
  const [newUserData, setNewUserData] = useState(userData);

  const validateAge = (e) => {
    if (
      (parseInt(e.target.value) < 100 && parseInt(e.target.value) > 0) ||
      e.target.value === ""
    ) {
      setNewUserData({
        ...newUserData,
        age:
          Number.isNaN(parseInt(e.target.value)) === true
            ? 0
            : parseInt(e.target.value),
      });
      e.target.classList.remove("focus:outline-red-500");
    } else {
      e.target.classList.add("focus:outline-red-500");
    }
  };

  return (
    <div
      className={`h-full w-full absolute top-0 left-0 -z-10 bg-[rgb(256,_256,_256,_0)]
            ${
              isSheetOpen !== undefined
                ? isSheetOpen === true
                  ? "open-sheet"
                  : "close-sheet"
                : ""
            }`}
    >
      <div
        id="sheetForm"
        className={`absolute top-0 left-[-100%] bg-[#f3f4f6] h-full lg:w-[385px] md:w-[385px] sm:w-[385px] w-[80%] p-[24px]
        ${
          isSheetOpen !== undefined
            ? isSheetOpen === true
              ? "open-sheet-form"
              : "close-sheet-form"
            : ""
        }`}
      >
        {/* sheet Header */}
        <div className="flex items-center w-full h-[150px] gap-2">
          <div className=" h-full flex flex-col justify-center">
            <div className="flex justify-between items-center h-[45px] py-[10px]">
              <h2 className="font-bold text-lg ">
                Edit {newUserData.first_name}'s Profile
              </h2>
            </div>
            <p className="text-[#818181] mb-[15px] text-sm">
              Make changes to your profile here. Click save when you're done.
            </p>
          </div>

          <div className="relative">
            <label
              htmlFor="profile-image-input"
              className="block w-[100px] h-[100px]"
            >
              <img
                id="profile-image"
                className="w-[100px] h-[100px] rounded cursor-pointer hover:rounded-md"
                src="data:image/jpeg;base64,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"
                alt={`${newUserData.first_name}'s Profile Image`}
                title={`${newUserData.first_name}'s Profile Image`}
              />
              <input
                id="profile-image-input"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    image_path: updateImage(e, "profile-image"),
                  });
                }}
              />
            </label>
            {/* close button */}
            <div
              className="w-[20px] h-[20px] cursor-pointer absolute top-0 right-0 translate-x-[50%] translate-y-[-150%]"
              title="cancel update"
              onClick={() => {
                closeSheetForm(dispatch);
              }}
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
                fill="black"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* values */}
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label
              className="text-sm cursor-pointer"
              htmlFor={newUserData.first_name}
            >
              First Name
            </label>
            <div className="w-[230px] h-full">
              <input
                id={newUserData.first_name}
                className="w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                value={newUserData.first_name}
                type="text"
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    first_name: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label
              className="text-sm cursor-pointer"
              htmlFor={newUserData.last_name}
            >
              Last Name
            </label>
            <div className="w-[230px] h-full">
              <input
                id={newUserData.last_name}
                className="w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                value={newUserData.last_name}
                type="text"
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    last_name: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label className="text-sm cursor-pointer" htmlFor={newUserData.age}>
              Age
            </label>
            <div className="w-[230px] h-full">
              <input
                id={newUserData.age}
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                  w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                value={
                  parseInt(newUserData.age) === 0
                    ? ""
                    : parseInt(newUserData.age)
                }
                type="number"
                onChange={(e) => {
                  validateAge(e);
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label className="text-sm cursor-pointer" htmlFor={userData.status}>
              Status
            </label>
            <div className="w-[230px] h-full">
              <select
                id={userData.status}
                className="appearance-none w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                defaultValue={userData.status}
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    status: e.target.value,
                  });
                }}
              >
                <option value="Married">Married</option>
                <option value="Single">Single</option>
              </select>
            </div>
          </div>
          {/* male female */}
          <div className="flex gap-2 cursor-pointer w-full justify-end">
            <div
              onClick={() => {
                setNewUserData({
                  ...newUserData,
                  sex: "Male",
                });
              }}
              className={`w-[70px] h-[70px] flex justify-center items-center rounded-md border border-teal-200 flex-col gap-1 bg-teal-200 text-teal-800 fill-teal-800 p-2 cursor-pointer  
                        ${
                          newUserData.sex === "Male"
                            ? " outline outline-teal-800"
                            : ""
                        }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                fill="current"
              >
                <path d="M800-800v240h-80v-103L561-505q19 28 29 59.5t10 65.5q0 92-64 156t-156 64q-92 0-156-64t-64-156q0-92 64-156t156-64q33 0 65 9.5t59 29.5l159-159H560v-80h240ZM380-520q-58 0-99 41t-41 99q0 58 41 99t99 41q58 0 99-41t41-99q0-58-41-99t-99-41Z" />
              </svg>

              <div>Male</div>
            </div>

            <div
              onClick={() => {
                setNewUserData({
                  ...newUserData,
                  sex: "Female",
                });
              }}
              className={`w-[70px] h-[70px] flex justify-center items-center rounded-md border border-pink-200 flex-col gap-1 bg-pink-200 text-pink-800 fill-pink-800 p-2 cursor-pointer 
                        ${
                          newUserData.sex === "Female"
                            ? "outline outline-pink-800"
                            : ""
                        }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                fill="current"
              >
                <path d="M440-120v-80h-80v-80h80v-84q-79-14-129.5-75.5T260-582q0-91 64.5-154.5T480-800q91 0 155.5 63.5T700-582q0 81-50.5 142.5T520-364v84h80v80h-80v80h-80Zm40-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z" />
              </svg>

              <div>Female</div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                Users.updateUserDataByID({
                  userID: userData.id,
                  newUserData: newUserData,
                });
                closeSheetForm(dispatch);
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 shadowh-9 px-4 py-2 bg-black text-white"
              type="submit"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetForm;