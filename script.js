document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    let users = [];

    // Load users from localStorage when the page loads
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            authenticateUser(username, password, users);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;
            registerUser(username, password, users);
        });
    }
});

function authenticateUser(username, password, users) {
    let user = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            user = true;
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

function registerUser(username, password, users) {
    // Push new user to the users array
    users.push({ username, password });

    // Store updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful');
    // Redirect to login page or perform necessary actions
     window.location.href = 'index.html';
}
