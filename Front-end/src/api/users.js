export const Users = {
  getAllUsers: async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/users");

      if (!res) throw new Error("Network Error!!");

      const data = await res.json();
      return data;

    }
    // if error in fetching data
    catch (error) {
      throw new Error("Network Erro, Unable To get data from server.");
    }
  },
  getUser: (userID) => {},
};
