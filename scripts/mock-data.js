const dataUser = [
  { user: "admin", password: "123456" },
  { user: "member1", password: "123456" },
];
const localStorageUser = localStorage.getItem("users");
if (!localStorageUser) {
  localStorage.setItem("users", JSON.stringify(dataUser));
}
