function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", setActiveLink);
