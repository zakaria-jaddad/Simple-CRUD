import { useState, useEffect } from "react";
const useNewImage = (newProfileImageInfo) => {
  const [imageURL, setImageURL] = useState();
  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageURL = reader.result.toString() || "";
      setImageURL(imageURL);
    });
    reader.readAsDataURL(newProfileImageInfo.getImageBlob());
  }, []);
  return [imageURL, setImageURL];
};
export default useNewImage;
