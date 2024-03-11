export const Users = {
  getAllUsers: async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/users");

      if (!res) throw new Error("Network Error!!");

      const data = await res.json();
      return data;
    } catch (error) {
      // if error in fetching data
      throw new Error("Network Error, Unable get users data from server.");
    }
  },
  // get user data from the givne user name
  fetchByID: async (userID) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/users/${userID}`, {
        method: "GET",
      });
      if (!res) throw new Error("Network Error!!");
      const userData = await res.json();
      return userData;
    } catch (error) {
      throw new Error("Network Erro, Unable To get user data from server.");
    }
  },
  updateUserDataByID: async ({ userID, newUserData }) => {
    const res = await fetch(`http://127.0.0.1:8000/api/users/${userID}`, {
      method: "POST",
      body: newUserData,
    });
    const data = await res.json();
    console.log(data);
  },
};
