function active_sidebar(style_display) {
    const navlist = document.getElementById("navlist");
    const icon = document.getElementById("sidebar-button-icon");

    if (navlist.classList.contains("show")) {
        navlist.classList.remove("show");
        icon.innerHTML = "▶";
        icon.style.paddingLeft = "5px";
        icon.style.paddingRight = "0";
    } else {
        navlist.classList.add("show");
        icon.innerHTML = "◀";
        icon.style.paddingLeft = "0";
        icon.style.paddingRight = "5px";
    }
}

function teste(stylevalue) {
    alert(stylevalue);
}
