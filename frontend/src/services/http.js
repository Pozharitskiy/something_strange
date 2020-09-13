const http = {
  //get, post, delete, put

  //register
  register: async (userData, setToken) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => setToken(data.token));
    } catch (error) {
      console.log(error);
    }
  },

  //login
  login: async (userData, setToken, setUsers) => {
    try {
      await fetch(
        `http://localhost:5000/users/login/${userData.userName}/${userData.userPass}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.users)
          setToken(data.token)
        });
    } catch (err) {
      console.log(err);
    }
  },

  forgotPass: async (userData, setToken) => {
    console.log(userData)
    try {
      const response = await fetch(
        `http://localhost:5000/users/forgotPass/${userData.userName}/${userData.userSecretWord}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((token) => setToken(token))
    } catch (err) {
      console.log(err)
    }
  }
};

export default http;
