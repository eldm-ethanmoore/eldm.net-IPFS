function mainMenuRedirect() {
    document.getElementById("CenterTitle").style.overflow = "hidden";
    var titleTop = document.getElementById("CenterTitle").offsetTop;
    var title = document.getElementById("CenterTitle");
    var notification = document.getElementById('CenterNotify');
    widenNavBar();
    moveTitle();
    moveNotification();
}