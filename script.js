function FullView(src) {
    const fullPage = document.getElementById("FullScreenClick");
    const fullscreenImg = document.getElementById("FullImg");
    fullscreenImg.src = src;
    fullPage.style.display = "block";
}
function CloseFull() {
    const fullPage = document.getElementById("FullScreenClick");
    fullPage.style.display = "none";
}