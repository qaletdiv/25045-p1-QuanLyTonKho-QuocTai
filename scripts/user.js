export function user() {
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users);
  return users;
}

export function activeLogin(username) {
  const currentUser = {
    user: username
  };
  localStorage.setItem("active-login", JSON.stringify(currentUser));
}
