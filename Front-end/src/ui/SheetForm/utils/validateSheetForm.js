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

export { validateAge };
