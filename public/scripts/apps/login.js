class LoginApp {
    init(id) {
        $(`#${id}__title`).html("Вход в систему");
        $(`#${id}__content`).html(`
            <p>Выберите имя пользователя:</p>
            <select size="2">
                <option selected>Moln1kas</option>
                <option>MixDev</option>
            </select>

            <p>Пароль:</p>
            <input type="text" disabled>

            <button style="width:96px;">ОК</button>
            <button style="width:96px;">Отмена</button>
        `);
    }
}