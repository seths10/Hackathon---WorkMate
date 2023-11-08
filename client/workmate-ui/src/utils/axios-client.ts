import axios from "axios";
const user = JSON.parse(localStorage.getItem("user")!);
console.log(user);

export const instance = axios.create({
  baseURL: "https://workmate-u6j3.onrender.com",
  timeout: 3000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${user?.data?.token}`,
  },
});
