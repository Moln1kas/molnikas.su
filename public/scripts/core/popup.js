class Popup {
    constructor(name) { 
        this.name = name;

        this.screenWidth  = $(window).width();
        this.screenHeight = $(window).height();

        this.markup =
        `
            <div class="popup" id="${name}__popup">
                <header class="popup__header">
                    <div class="popup__title" id="${name}__title"></div>
                    <div class="popup__actions">
                        <button id="${name}__popup__close">x</button>
                    </div>
                </header>
                <div class="popup__content" id="${name}__content"></div>
            <div>
        `;
    }

    init() {
        $("body").append(this.markup);
        
        $(".popup").css('left', this.screenWidth  /2 - $(".popup").width()  /2);
        $(".popup").css('top',  this.screenHeight /2 - $(".popup").height() /2);

        $(".popup").draggable();
    }

    popupClose(id) {
        $(`.${id}`).remove()
    }
}