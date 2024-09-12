class CustomApp {
    init(id, title, text, color) {
        $(`#${id}__popup__title`).html(`${title}`);
        $(`#${id}__popup__content`).html(`
            <p>${text}</p>
        `);
        
        if(color) {
            $(`#${id}__popup__header`).css(`background`, `var(--${color})`)
        }
    }
}