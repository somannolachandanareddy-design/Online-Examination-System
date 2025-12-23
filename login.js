function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;

    const users = {
        student: { username: "student", password: "1234" },
        admin: { username: "admin", password: "admin" }
    };

    if(users[role] && username === users[role].username && password === users[role].password) {
        localStorage.setItem('user', JSON.stringify({ username, role }));
        alert("Login successful!");
        if(role === 'student') window.location.href = 'exam.html';
        else window.location.href = 'admin.html';
    } else {
        alert("Invalid credentials!");
    }
}
