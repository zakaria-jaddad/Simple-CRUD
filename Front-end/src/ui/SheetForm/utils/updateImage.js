/* 
  Date
    - e: event 
    - imageID: an id of the updated image

  Porpuse
    - update the image localye by changing the src 
    - returns new image form data
*/
export default function updateImage(e, imageID) {
  const profileImage = document.querySelector(`#${imageID}`);

  // server side image change
  const newProfileImage = e.target.files[0];

  const newImageSrc = window.URL.createObjectURL(newProfileImage);
  profileImage.src = newImageSrc;

  return newProfileImage;
}
