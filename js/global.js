// // Google Analytics
// const analyticsScript = document.createElement("script");

// analyticsScript.async = true;
// analyticsScript.src =
//     "https://www.googletagmanager.com/gtag/js?id=G-NH25X3D8MD";

// document.head.appendChild(analyticsScript);

// window.dataLayer = window.dataLayer || [];

// function gtag() {
//     window.dataLayer.push(arguments);
// }

// gtag("js", new Date());
// gtag("config", "G-NH25X3D8MD");

// Load các components
function loadComponent(selector, path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Không tải được ${path}: ${response.status}`);
            }

            return response.text();
        })
        .then(html => {
            const element = document.querySelector(selector);

            if (element) {
                element.innerHTML = html;
            }
        })
        .catch(error => console.error(error));
}

loadComponent("#header", "./components/header.html");
loadComponent("#footer", "./components/footer.html");
loadComponent("#content-foot", "./components/content-foot.html");
loadComponent("#sidebar", "./components/sidebar.html");
loadComponent("#modal", "./components/modal.html");

// Mở Menu modal
document.addEventListener("click", (event) => {

    // Mở Menu
    if (event.target.closest("#menu-button")) {
        document.getElementById("menu-modal")?.classList.add("active");
        return;
    }

    // Đóng khi click vào vùng nền
    if (event.target.id === "menu-modal") {
        document.getElementById("menu-modal")?.classList.remove("active");
    }

});

// Mở QR modal
document.addEventListener("click", (event) => {

    // Mở QR
    if (event.target.closest("#qr-button")) {
        document.getElementById("qr-modal")?.classList.add("active");
        return;
    }

    // Đóng khi click vào vùng nền
    if (event.target.id === "qr-modal") {
        document.getElementById("qr-modal")?.classList.remove("active");
    }

});