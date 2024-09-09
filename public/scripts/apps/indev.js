class InDevApp {
    init(id) {
        $(`#${id}__title`).html("В разработке");
        $(`#${id}__content`).html(`
            <p>Следите за разработкой в моем <a target="_blank" href="https://github.com/Moln1kas/molnikas.su">Github репозитории</a></p>
        `);
    }
}