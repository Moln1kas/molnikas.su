$().ready(function () {
    let popup = new Popup();
    let indev = new InDevApp();
    let login = new LoginApp();

    popup.init("login", 360, 300);
    login.init("login");

    popup.init("indev", 256, 256);
    indev.init("indev");
});