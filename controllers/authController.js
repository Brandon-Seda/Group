async function registerUser(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const result = await fetch('/routes/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            username,
            password,  
        })
    })
    .then((res) => res.json())

    if (res.message === 'Registration successful!') {
        window.location.href = '/';
    } else {
        alert(result.message);
    }
}


function validatePassword() {
    const passwordInput = document.getElementById('password').value;
    const confirmPasswordInput = document.getElementById('conf-password').value;
    const form = document.getElementById('registerForm');

    if(passwordInput != confirmPasswordInput){
        alert('Passwords do not match. Please try again!');
    } else {
        form.submit();
    }
}