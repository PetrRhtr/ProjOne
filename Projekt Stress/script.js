document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten

    // simulierter Login
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'test@example.com' && password === 'password') {
        // Leitet zur neuen Seite weiter, wenn die Anmeldung erfolgreich ist
        window.location.href = 'stresslevel.html';
    } else {
        alert('Invalid email or password');
    }
});
