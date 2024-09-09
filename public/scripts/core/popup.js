class Popup {
    constructor() { 
        this.screenWidth  = $(window).width();
        this.screenHeight = $(window).height();
    }

    init(id, width, height) {
        this.markup =
        `
            <div class="popup" id="${id}__popup">
                <header class="popup__header">
                    <div class="popup__title" id="${id}__title"></div>
                    <div class="popup__actions">
                        <button class="popup__button" id="${id}__popup__close">x</button>
                    </div>
                </header>
                <div class="popup__content" id="${id}__content"></div>
            <div>
        `;

        $("body").append(this.markup);

        this.popup = $(`#${id}__popup`);

        this.popup.css("width" , width );
        this.popup.css("height", height);
        this.popup.css("left", this.screenWidth  /2 - $(`#${id}__popup`).width()  /2);
        this.popup.css("top",  this.screenHeight /2 - $(`#${id}__popup`).height() /2);

        this.popup.draggable();
    }

    popupClose(id) {
        $(`#${id}__popup`).remove()
    }
}