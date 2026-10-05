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

fetch("/components/right-sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("right-sidebar").innerHTML = data;
    });