import { BaseComponent } from "./BaseComponent.js";

class MangaContainer extends BaseComponent {
    props;
    state;
    constructor() {
        super();

        this.props = {
            "img": "",
            "name": "",
            "views": "",
            "likes": ""
        }
    }

    static get observedAttributes() {
        return ["img", "name", "views", "likes"];
    }

    render() {
        this._shadowRoot.innerHTML = `
            <div class="manga">
                <img src="${this.props['img']}"/>
                <div class="name">${this.props['name']}</div>
                <div class="views">${this.props['views']}</div>
                <div class="likes">${this.props['likes']}</div>
            </div>
        `;
    }
}

window.customElements.define("manga-container", MangaContainer);