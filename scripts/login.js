loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new formData(e.target);
  const { username, password } = Object.fromEntries(formData.fromEntries());

  if(username === "admin" && password === "admin123"){
    window.location.assign("/main.html");
  }else{
    alert("Invalid Credentials");
  }
});