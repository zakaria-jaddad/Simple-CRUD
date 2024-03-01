import { useDispatch } from "react-redux";
import { closeSheet } from "../app/slices/sheetSlice";
import { useState } from "react";
import { Users } from "../api/users";

const SheetForm = ({ isSheetOpen, userData }) => {
  const dispatch = useDispatch();
  const [sexActive, setSexeActive] = useState(userData.sex.toLowerCase());
  /* 
   {
      id: 1,
      first_name: 'Zakaria',
      last_name: 'Jaddad',
      status: 'Single',
      sex: 'Male',
      age: 20,
      image_path: './Hello.png',
    }
  */

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
        className={`absolute top-0 left-[-100%] bg-[#f3f4f6] h-full lg:w-[385px] md:w-[385px] sm:w-[385px] w-[80%] p-[24px]
        ${
          isSheetOpen !== undefined
            ? isSheetOpen === true
              ? "open-sheet-form"
              : "close-sheet-form"
            : ""
        }`}
      >
        <div className="flex justify-between items-center w-full h-[45px] py-[10px]">
          <h2 className="font-bold text-lg ">
            Edit {userData.first_name}'s Profile
          </h2>
          <div
            className="w-[20px] h-[20px] cursor-pointer flex items-center justify-center translate-x-[50%] translate-y-[-100%]"
            title="cancel update"
            onClick={() => {
              dispatch(closeSheet());
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
        <p className="text-[#818181] mb-[15px] text-sm">
          Make changes to your profile here. Click save when you're done.
        </p>
        {/* values */}
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label
              className="text-sm cursor-pointer"
              htmlFor={userData.first_name}
            >
              First Name
            </label>
            <div className="w-[230px] h-full">
              <input
                id={userData.first_name}
                className="w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                value={userData.first_name}
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label
              className="text-sm cursor-pointer"
              htmlFor={userData.last_name}
            >
              Last Name
            </label>
            <div className="w-[230px] h-full">
              <input
                id={userData.last_name}
                className="w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                value={userData.last_name}
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label className="text-sm cursor-pointer" htmlFor={userData.age}>
              Age
            </label>
            <div className="w-[230px] h-full">
              <input
                id={userData.age}
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                value={userData.age}
                type="number"
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
              >
                <option disabled selected value={userData.status}>
                  {userData.status}
                </option>
                <option value="married">Married</option>
                <option value="Single">Single</option>
              </select>
            </div>
          </div>
          {/* male female */}
          <div className="flex gap-2 cursor-pointer w-full justify-end">
            <div
              onClick={() => {
                setSexeActive("male");
              }}
              className={`w-[75px] h-[75px] flex justify-center items-center rounded-md border border-teal-200 flex-col gap-1 bg-teal-200 text-teal-800 fill-teal-800 p-2 cursor-pointer  
                        ${
                          sexActive === "male"
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
                setSexeActive("female");
              }}
              className={`w-[75px] h-[75px] flex justify-center items-center rounded-md border border-pink-200 flex-col gap-1 bg-pink-200 text-pink-800 fill-pink-800 p-2 cursor-pointer 
                        ${
                          sexActive === "female"
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
                e.preventDefault()
                Users.updateUserData(userData.id)
                dispatch(closeSheet());
              }}
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 shadowh-9 px-4 py-2 bg-black text-white"
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
