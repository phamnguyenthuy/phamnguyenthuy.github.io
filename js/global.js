fetch("/components/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

fetch("/components/left-sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("left-sidebar").innerHTML = data;
    });

fetch("/components/right-sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("right-sidebar").innerHTML = data;
    });

// Mở QR modal box
document.addEventListener("click", (event) => {

    // Mở QR
    if (event.target.closest("#qrButton")) {
        document.getElementById("qrModal").classList.add("active");
        return;
    }

    // Đóng bằng nút X
    if (event.target.closest("#qrClose")) {
        document.getElementById("qrModal").classList.remove("active");
        return;
    }

    // Đóng khi click vào vùng nền
    if (event.target.id === "qrModal") {
        document.getElementById("qrModal").classList.remove("active");
    }

});