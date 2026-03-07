const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e)=> {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { username, password } = Object.fromEntries(formData.entries());

  if(username === "admin" && password === "admin123"){
    window.location.assign("main.html");
  }else{
    alert("Invalid Credentials");
  }
});