$().ready(function () {
    let popup = new Popup();
    let indev = new InDevApp();

    popup.init("indev", 256, 256);
    indev.init("indev");
});