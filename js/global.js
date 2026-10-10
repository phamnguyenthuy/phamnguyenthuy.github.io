
// Google Analytics
const analyticsScript = document.createElement("script");

analyticsScript.async = true;
analyticsScript.src =
    "https://www.googletagmanager.com/gtag/js?id=G-NH25X3D8MD";

document.head.appendChild(analyticsScript);

window.dataLayer = window.dataLayer || [];

function gtag() {
    window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-NH25X3D8MD");

// Chèn các thành phần dùng chung vào thẻ <head></head>
fetch("/components/head.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Không tải được head.html");
        }

        return response.text();
    })
    .then(html => {
        document.head.insertAdjacentHTML("beforeend", html);
    })
    .catch(error => console.error(error));

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

fetch("/components/content-foot.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("content-foot").innerHTML = data;
    });

fetch("/components/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar").innerHTML = data;
    });

fetch("/components/modal.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("modal").innerHTML = data;
    });

// Mở Menu modal
document.addEventListener("click", (event) => {

    // Mở Menu
    if (event.target.closest("#menu-button")) {
        document.getElementById("menu-modal").classList.add("active");
        return;
    }

    // Đóng khi click vào vùng nền
    if (event.target.id === "menu-modal") {
        document.getElementById("menu-modal").classList.remove("active");
    }

});

// Mở QR modal
document.addEventListener("click", (event) => {

    // Mở QR
    if (event.target.closest("#qr-button")) {
        document.getElementById("qr-modal").classList.add("active");
        return;
    }

    // Đóng khi click vào vùng nền
    if (event.target.id === "qr-modal") {
        document.getElementById("qr-modal").classList.remove("active");
    }

});