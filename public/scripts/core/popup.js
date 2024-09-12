class Popup {
    constructor() { 
        this.screenWidth  = $(window).width();
        this.screenHeight = $(window).height();
    }

    init(id, width, height, position) {
        this.markup =
        `
            <div class="popup" id="${id}__popup">
                <header class="popup__header" id="${id}__popup__header">
                    <div class="popup__title" id="${id}__popup__title"></div>
                    <div class="popup__actions">
                        <button class="popup__button" id="${id}__popup__close">x</button>
                    </div>
                </header>
                <div class="popup__content" id="${id}__popup__content"></div>
            <div>
        `;

        $("body").append(this.markup);

        this.popup = $(`#${id}__popup`);

        this.popup.css("width" , width );
        this.popup.css("height", height);
        if(!position) {
            this.popup.css("left", this.screenWidth  /2 - $(`#${id}__popup`).width()  /2);
            this.popup.css("top",  this.screenHeight /2 - $(`#${id}__popup`).height() /2);
        } else if(position[2] === true) {
            this.popup.css("left", this.screenWidth  /2 - $(`#${id}__popup`).width()  /2 + position[0]);
            this.popup.css("top",  this.screenHeight /2 - $(`#${id}__popup`).height() /2 + position[1]);
        } else if(position[2] === false) {
            this.popup.css("left", position[0]);
            this.popup.css("top",  position[1]);
        }

        this.popup.draggable();
    }

    popupClose(id) {
        $(`#${id}__popup`).remove()
    }
}