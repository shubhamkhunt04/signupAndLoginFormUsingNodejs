document.getElementById('userlogout').addEventListener('click', (e) => {

    // If user is clicked on logout then clear JWT token from localstorage and redirect to registration page.
    localStorage.clear();
    location = "../registration.html"
})