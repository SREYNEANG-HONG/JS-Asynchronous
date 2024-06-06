import { UserList } from "../components/UserList.js";
import { getData } from "../store/fatchApi.js";
let renderArea = document.querySelector("#renderArea");
let users = await getData("users");
// console.log(users);
users.map((user) => (renderArea.innerHTML += UserList(user)));
