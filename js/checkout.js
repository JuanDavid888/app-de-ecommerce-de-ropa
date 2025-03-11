const payButton = document.querySelector('.div__slash button');

payButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se active el enlace inmediatamente
    Swal.fire({
        title: "¡Payment successful!",
        icon: "success",
        allowOutsideClick: false,
        showConfirmButton: true,
    }).then(() => {
        window.location.href = "../views/home.html";
    });
});
  