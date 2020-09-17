import { BaseComponent } from "./BaseComponent.js";

class Meme extends BaseComponent {
    props;
    constructor() {
        super();
        // this._shadowRoot = this.attachShadow({ 'mode': open });

        this.props = {
            'image': '',
            'content': '',
            'date-modified': ''
        }

    }

    static get observedAttributes() {
        return ['image', 'content', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = `
            <div class='meme'>
                <img id='image' src="${this.props.image}">
                <div id='content'>${this.props.content}</div>
                <div id="date-modified">${this.props["date-modified"]}</div> 
                <button id="btn-edit">Edit</button>
                <button id="btn-delete">Delete</button>
            </div>
        `;


    }
}

window.customElements.define('meme-container', Meme);