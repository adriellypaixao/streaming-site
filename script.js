function resetset_Sidebar() {
    if (document.getElementById("sidebar-button-icon").style.display != "none") {
        document.getElementById("navlist").style.display = "none";
        document.getElementById("sidebar-button-icon").innerHTML = "▶";
        document.getElementById("sidebar-button-icon").style = "padding-left: 5px; padding-right: 0;";
    } else {
        document.getElementById("navlist").style.display = "none";
        document.getElementById("sidebar-button-icon").innerHTML = "▶";
        document.getElementById("sidebar-button-icon").style = "padding-left: 5px; padding-right: 0;";
    }
}

function active_sidebar(style_display) {
    if (style_display == "none") {
        document.getElementById("navlist").style.display = "block";
        document.getElementById("sidebar-button-icon").innerHTML = "◀";
        document.getElementById("sidebar-button-icon").style = "padding-left: 0; padding-right: 5px;";
    } else {
        document.getElementById("navlist").style.display = "none";
        document.getElementById("sidebar-button-icon").innerHTML = "▶";
        document.getElementById("sidebar-button-icon").style = "padding-left: 5px; padding-right: 0;";
    }
}

function teste(stylevalue) {
    alert(stylevalue);
}
