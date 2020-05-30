const http = {
  //get, post, delete, put

  //post
  post: async (userData) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
    } catch (error) {
      console.log(error)
    }
  },

  //login
  login: async (userData) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userData.userLoginName}/${userData.userLoginPass}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then(res => res.json())
        .then(token => localStorage.setItem("token", token));
    } catch (err) {
      console.log(err)
    }
  }

};

export default http;