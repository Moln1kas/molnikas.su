class InDevApp {
    init(id) {
        $(`#${id}__popup__title`).html("В разработке");
        $(`#${id}__popup__content`).html(`
            <p>Следите за разработкой в моем <a target="_blank" href="https://github.com/Moln1kas/molnikas.su">Github репозитории</a></p>
            <button id="${id}__popup__call">Вызвать 500 попапов</button>
        `);

        $(`#${id}__popup__call`).bind("click", function() {
            let popup = new Popup();
            let custom= new CustomApp();
            for (let id = 0; id < 500; id++) {
                popup.init(id, 200, 100, [Math.floor(Math.random() * $(window).width()), Math.floor(Math.random() * $(window).height()), false]);
                custom.init(id, `Попап #${id}`, "И зачем вы на это нажали?", "red-dark");
                $(`#${id}__popup__close`).bind("click", function() {
                    $(`#${id}__popup`).remove()
                });
            }
        });
    }
}