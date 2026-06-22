import { user, activeLogin } from "./user.js";
const btnEye = document.querySelector(".icon-right");
btnEye.addEventListener("click", () => {
  btnEye.classList.toggle("ri-eye-off-line");
  btnEye.classList.toggle("ri-eye-line");
  const password = document.querySelector("#password");
  password.type = password.type === "password" ? "text" : "password";
});

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector("#auth-form");
  const formData = new FormData(form);
  const account = user().find((item) => {
    return item.user === formData.get("username");
  });
  if (account.password === formData.get("password")) {
    activeLogin(account.user);
    window.location.href = "./pages/dashboard.html";
  } else {
    const authMessage = document.querySelector(".auth-message");
    authMessage.style.display = "block";
    authMessage.textContent = "Tài khoản hoặc mật khẩu không đúng";
  }
});
