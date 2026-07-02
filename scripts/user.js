export function users() {
  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  return users;
}

export function activeLogin(username) {
  const currentUser = {
    user: username,
  };
  localStorage.setItem("active-login", JSON.stringify(currentUser));
}
