import Cropper from "cropperjs";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/cropper.css";

const showCropper = () => {
  const image = document.getElementById("edit-profile-image");
  const cropper = new Cropper(image, {
    aspectRatio: 1,
  });
};

const ImageCropper = ({ imageBlob, close }) => {
  const [imageURL, setImageURL] = useState();
  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageURL = reader.result.toString() || "";
      setImageURL(imageURL);
    });
    reader.readAsDataURL(imageBlob);
  }, []);

  return (
    <div className="w-full h-screen -z-10 open-sheet flex items-center justify-center">
      <div className="w-[500px] p-[20px] rounded-md bg-white flex flex-col justify-evenly max-h-screen gap-[20px]">
        <div className="w-full max-h-[95%] overflow-y-scroll">
          <img
            src={imageURL}
            alt=""
            className="max-w-full rounded-[10px]"
            id="edit-profile-image"
            onLoad={() => {
              showCropper();
            }}
          />
        </div>
        <div className="flex flex-row justify-center gap-[15px]">
          <button
            className="py-2.5 px-6 rounded-lg font-medium bg-red-200 text-red-800"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </button>
          <button className="py-2.5 px-6 rounded-lg font-medium bg-teal-200 text-teal-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageCropper;
