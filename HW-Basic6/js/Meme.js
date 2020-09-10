import { BaseComponent } from "./BaseComponent.js";

class Meme extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "name": null,
            "image": null,
            "description": null,
            "date-modified": new Date().toISOString()
        }
    }

    static get observedAttributes() {
        return ['name', 'image', 'description', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./css/meme.css">
            <div class="meme">
                <div id="img">
                    <img src=${this.props['image']} alt=${this.props['name']}>
                </div>
                <div id="name">${this.props['name']}</div>
                <div id="description">${this.props['description']}</div>
                <div id="date-modified">${this.props['date-modified']}</div>
            </div>
        `;
    }
}

window.customElements.define('meme-container', Meme);