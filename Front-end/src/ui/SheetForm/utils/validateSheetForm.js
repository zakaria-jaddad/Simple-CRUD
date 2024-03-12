// TODO : THE IMAGE SHOULD NOT BE PARSED UNITIL USER FINISHED CROPING THE IMAGE
function updateImage(e, imageID) {
  const profileImage = document.querySelector(`#${imageID}`);

  // server side image change
  const newProfileImageBlob = new Blob([e.target.files[0]], {
    type: "application/octet-stream",
  });
  const newProfileImageSrc = window.URL.createObjectURL(newProfileImageBlob);
  profileImage.src = newProfileImageSrc;

  return {
    newProfileImageBlob: newProfileImageBlob,
    newProfileImageSrc: newProfileImageSrc,
  };
}

/* 
    - output: returns if the age is valid or not 
  */
const validateAge = (age) => {
  if ((parseInt(age) <= 100 && parseInt(age) > 0) || age === "") {
    return true;
  }
  // if age is not valid
  else {
    return false;
  }
};

export { updateImage, validateAge };
