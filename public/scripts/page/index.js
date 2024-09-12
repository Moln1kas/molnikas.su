$().ready(function () {
    let popup = new Popup();

    let indev = new InDevApp();
    let login = new LoginApp();
    let custom= new CustomApp();

    popup.init("login", 360, 300);
    login.init("login");
    $("#login__popup__close").bind("click", function() {
        let id = "warn__" + Math.floor(Math.random() * 999999);

        popup.init(id, 256, 128);
        custom.init(id, "Предупреждение", "Нет-нет-нет, вы так просто не уйдете!", "yellow-dark");
        $(`#${id}__popup__close`).bind("click", function() {
            $(`#${id}__popup`).remove()
        });
    });

    popup.init("indev", 256, 256, [100, 100, true]);
    indev.init("indev");
    $("#indev__popup__close").bind("click", function() {
        $("#indev__popup").remove();
    });
});