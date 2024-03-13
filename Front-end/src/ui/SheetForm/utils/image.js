class ImageFile {
  constructor(event, imageID) {
    this.imageBlob = new Blob([event.target.files[0]], {
      type: "application/octet-stream",
    });
    this.image = document.getElementById(imageID);
  }
  getImageBlob = () => {
    return this.imageBlob
  };
  setImageBlob = (newImageBlob) => {
    this.imageBlob = newImageBlob
  };

  updateClientImage = () => {
    const newProfileImageSrc = window.URL.createObjectURL(this.getImageBlob());
    this.image.src = newProfileImageSrc;
    return newProfileImageSrc;
  };
}
export default ImageFile;
