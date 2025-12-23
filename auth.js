function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (username === "" || password === "" || role === "") {
    alert("Please fill all fields");
    return;
  }

  // Admin Login (hardcoded)
  if (role === "admin") {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("username", username);
      alert("Admin Login Successful");
      // window.location.href = "admin.html";
    } else {
      alert("Invalid Admin Credentials");
    }
  }

  // Student Login
  if (role === "student") {
    localStorage.setItem("userRole", "student");
    localStorage.setItem("username", username);
    alert("Student Login Successful");
    // window.location.href = "dashboard.html";
  }
}
