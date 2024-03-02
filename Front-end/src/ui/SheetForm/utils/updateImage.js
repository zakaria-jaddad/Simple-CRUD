/* 
  Date
    - e: event 
    - imageID: an id of the updated image

  Porpuse
    - update the image localye by changing the src 
    - returns new image url
*/
export default function updateImage(e, imageID) {
  const profileImage = document.querySelector(`#${imageID}`);

  const newImageSrc = window.URL.createObjectURL(e.target.files[0]);

  profileImage.src = newImageSrc;

  return newImageSrc;
}
