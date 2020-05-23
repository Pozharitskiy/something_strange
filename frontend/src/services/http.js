const http = async (userData) => {
  //get, post, delete, put
  //post
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
  } catch (error) {
    console.log(error)
  }
};

export default http;