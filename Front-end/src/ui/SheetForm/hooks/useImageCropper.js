import { useState } from "react";
const useImageCropper = () => {
  const [isImageCropperOpend, setIsImageCropperOpend] = useState(false);
  return {
    isImageCropperOpend,
    openImageCropper: () => {
      setIsImageCropperOpend(true);
    },
    closeImageCropper: () => {
      setIsImageCropperOpend(false);
    },
  };
};
export default useImageCropper