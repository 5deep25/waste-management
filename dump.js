var fs=require(fs)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'deep', password: '123'}
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            authenticateUser(username, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;
            registerUser(username, password);
        });
    }
});

function authenticateUser(username, password) {
    let user = false;
    //const user = users.find(u => u.username === username && u.password === password);
    const len = users.length;
    var usnm = 'username'
    var pass = 'password'
    for(let i = 0; i < len; i++){
        user = users[i][usnm] === username && users[i][pass] === password;
        if(user){
            break;
        }
    }
    
    if (user) {
        alert('Login successful');
        // Redirect to dashboard or perform necessary actions
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}

function registerUser(username, password) {
    // Simulated registration (Replace this with backend implementation)
    users.push({ username, password });
    console.log(users)
    
alert('Registration successful');
    // Redirect to login page or perform necessary actions
   // window.location.href = 'UI.html';
}