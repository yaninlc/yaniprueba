// Inicializar Email.js
emailjs.init("IabHYyXE8NAiWXUIR"); // Reemplaza con tu User ID de Email.js

// Página 1: Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "12345") { // Contraseña simulada
        message.textContent = "Inicio de sesión exitoso.";
        message.style.color = "green";

        // Enviar correo simulando ingreso
        emailjs.send("service_mpp6kyh", "template_b7qkzlc", {
            user_name: username,
        }).then(() => {
            alert("Correo enviado con éxito.");
            window.location.href = "principal.html"; // Redirige a la página principal
        }).catch((error) => {
            console.error("Error al enviar el correo:", error);
            alert("No se pudo enviar el correo, pero puedes continuar.");
            window.location.href = "principal.html"; // Redirige incluso si hay error
        });
    } else {
        message.textContent = "Contraseña incorrecta.";
        message.style.color = "red";
    }
});

// Página 2: Formulario de Correo
document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_mpp6kyh", "template_b7qkzlc", {
        to_email: email,
        message: message,
    }).then(() => {
        document.getElementById("emailStatus").textContent = "Correo enviado con éxito.";
        document.getElementById("emailStatus").style.color = "green";
    }).catch((error) => {
        console.error("Error al enviar el correo:", error);
        document.getElementById("emailStatus").textContent = "Error al enviar el correo.";
        document.getElementById("emailStatus").style.color = "red";
    });
});

// Página 2: API de Perros
document.getElementById("fetchDog").addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("dogContainer").innerHTML = `<img src="${data.message}" alt="Dog" style="width:100%; max-height:300px;">`;
        })
        .catch((error) => {
            console.error("Error al obtener imagen de perro:", error);
            document.getElementById("dogContainer").textContent = "No se pudo cargar la imagen del perro.";
        });
});

// Página 2: API de Gatos
document.getElementById("fetchCat").addEventListener("click", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("catContainer").innerHTML = `<img src="${data[0].url}" alt="Cat" style="width:100%; max-height:300px;">`;
        })
        .catch((error) => {
            console.error("Error al obtener imagen de gato:", error);
            document.getElementById("catContainer").textContent = "No se pudo cargar la imagen del gato.";
        });
});


