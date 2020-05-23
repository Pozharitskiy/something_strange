const createToken = () => {
  const rand = () => {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  const token = () => {
    return rand() + rand(); // to make it longer
  };

  return token();
};
export default createToken;