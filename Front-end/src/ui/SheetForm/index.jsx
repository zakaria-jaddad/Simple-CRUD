import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Users } from "../../api/users";
import closeSheetForm from "./utils/closeSheetForm";
import useSheetForm from "./hooks/useSheetForm";
import { updateImage, validateAge } from "./utils/validateSheetForm";
import "./styles/sheet.css";

const SheetForm = () => {
  const dispatch = useDispatch();
  const {userData} = useSelector((state) => state.sheet);
  const [isSheetOpen, [newUserData, setNewUserData]] = useSheetForm(useSelector((state) => state.sheet));

  const handelValueChange = ({ eventName, eventValue }) => {
    console.log(eventValue);
    setNewUserData({
      ...newUserData,
      [eventName]:
        eventName === "age"
          ? Number.isNaN(parseInt(eventValue)) === true
            ? 0
            : parseInt(eventValue)
          : eventValue,
    });
  };

  const handelSubmitForm = () => {

    // set data
    const formData = new FormData();
    formData.append("image", newUserData.image_path);
    formData.append("firstName", newUserData.first_name);
    formData.append("lastName", newUserData.last_name);
    formData.append("age", newUserData.age);
    formData.append("status", newUserData.status);
    formData.append("sexe", newUserData.sex);

    Users.updateUserDataByID({
      userID: newUserData.id,
      newUserData: formData,
    });
    // TODO : THE SHEET FORM SHOULD BE CLOSED UNTIL CLIENT GET THE RESPONSE.
    closeSheetForm(dispatch);
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
                src={userData.image_path}
                alt={`${newUserData.first_name}'s Profile Image`}
                title={`${newUserData.first_name}'s Profile Image`}
              />
              <input
                id="profile-image-input"
                type="file"
                name="image_path"
                accept="image/*"
                hidden
                onChange={(e) =>
                  handelValueChange({
                    eventName: "image_path",
                    eventValue: updateImage(e, "profile-image"),
                  })
                }
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
                className="w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                id={newUserData.first_name}
                name="first_name"
                type="text"
                value={newUserData.first_name}
                onChange={(e) =>
                  handelValueChange({
                    eventName: e.target.name,
                    eventValue: e.target.value,
                  })
                }
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
                className="w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                id={newUserData.last_name}
                name="last_name"
                value={newUserData.last_name}
                type="text"
                onChange={(e) =>
                  handelValueChange({
                    eventName: e.target.name,
                    eventValue: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label className="text-sm cursor-pointer" htmlFor={newUserData.age}>
              Age
            </label>
            <div className="w-[230px] h-full">
              <input
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                  w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                id={newUserData.age}
                name="age"
                type="number"
                value={
                  parseInt(newUserData.age) === 0
                    ? ""
                    : parseInt(newUserData.age)
                }
                onChange={(e) => {
                  if (validateAge(e.target.value) === true) {
                    handelValueChange({
                      eventName: e.target.name,
                      eventValue: e.target.value,
                    });
                    e.target.classList.remove("focus:outline-red-500");
                  }
                  // age is not valid
                  else {
                    e.target.classList.add("focus:outline-red-500");
                  }
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end items-center h-[36px] w-full">
            <label
              className="text-sm cursor-pointer"
              htmlFor={newUserData.status}
            >
              Status
            </label>
            <div className="w-[230px] h-full">
              <select
                className="appearance-none w-full h-full border border-[#a1a1aa] rounded bg-transparent px-[10px] active:outline-[black] focus:outline-[black] text-sm"
                id={newUserData.status}
                name="status"
                defaultValue={newUserData.status}
                onChange={(e) =>
                  handelValueChange({
                    eventName: e.target.name,
                    eventValue: e.target.value,
                  })
                }
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
                handelValueChange({
                  eventName: "sex",
                  eventValue: "Male",
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
                handelValueChange({
                  eventName: "sex",
                  eventValue: "Female",
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
                handelSubmitForm();
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
