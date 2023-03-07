function login() {
    const nameE1 = document.querySelector("#name");
    localStorage.setItem("username", nameE1.value);
    window.location.href = play.html;
}