function toggleViewMode() {
    //alert('HI!');
    btn = document.getElementById("view_toggle_button");
    body = document.getElementsByTagName("body")[0];
    cur = btn.firstChild.innerHTML
    if (cur == "brightness_7") {
        btn.firstChild.innerHTML = "brightness_4";
        body.classList.remove("dark");
    } else {
        btn.firstChild.innerHTML = "brightness_7";
        body.classList.add("dark");
    }
}
