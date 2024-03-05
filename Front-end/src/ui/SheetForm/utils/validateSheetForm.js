/* 
  Date
    - e: event 
    - imageID: an id of the updated image

  Porpuse
    - update the image localye by changing the src 
    - returns new image form data
*/
function updateImage(e, imageID) {
  console.log("image has been changed", imageID, e.target.files[0]);
  const profileImage = document.querySelector(`#${imageID}`);

  // server side image change
  const newProfileImage = e.target.files[0];

  const newImageSrc = window.URL.createObjectURL(newProfileImage);
  profileImage.src = newImageSrc;

  return newProfileImage;
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
