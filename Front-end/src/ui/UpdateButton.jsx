import { useEffect, useRef, useState } from "react";

const UpdateButton = ({ userID }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(undefined);
  const userSheet = useRef();

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsSheetOpen(!isSheetOpen);
          console.log("this is happend!!", userID);
          handleSheet();
        }}
        className="py-2.5 px-5 rounded-lg -z font-medium bg-teal-200 text-teal-800"
      >
        Update
      </button>

      <div
        ref={userSheet}
        id={`sheet-${userID}`}
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
          className={`absolute top-0 left-[-100%] bg-[#f3f4f6] h-full w-1/4 
        ${
          isSheetOpen !== undefined
            ? isSheetOpen === true
              ? "open-sheet-form"
              : "close-sheet-form"
            : ""
        }`}
        >
          <p
            onClick={() => {
              setIsSheetOpen(!isSheetOpen);
            }}
          >
            Press Me Daddy
          </p>
        </div>
      </div>
    </>
  );
};

export default UpdateButton;
