class LoginApp {
    init(id) {
        $(`#${id}__popup__title`).html("Вход в систему");
        $(`#${id}__popup__content`).html(`
            <p>Выберите имя пользователя:</p>
            <select size="2" id="${id}__popup__user">
                <option selected>Moln1kas</option>
                <option>MixDev</option>
            </select>

            <p>Пароль:</p>
            <input type="text" disabled>

            <button style="width:96px;" id="${id}__popup__ok">ОК</button>
            <button style="width:96px;" disabled>Отмена</button>
        `);

        $(`#${id}__popup__ok`).bind("click", function() {
            let user = $(`#${id}__popup__user`).val();

            $("body").append(`<div class="blur__screen"></div>`);
            $(".blur__screen").css("display", "none");
            $(".blur__screen").fadeIn(100, function() {
                switch(user) {
                    case "Moln1kas":
                        window.open("/moln1kas", "_self");
                    break;
    
                    case "MixDev":
                        window.open("/mixdev", "_self");
                    break;
                }
            });
        });
    }
}