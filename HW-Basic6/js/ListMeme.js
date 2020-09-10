import { BaseComponent } from "./BaseComponent.js";

class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            memes: [{
                "name": 'Girl1',
                "image": "https://media.travelmag.vn/files/hoangvantai/2020/04/27/hot-girl-dong-phuc-1-1347.jpeg",
                "description": 'Girl-1',
                "date-modified": new Date().toISOString()
            }]
        }
    }

    render() {
        let html = '';
        for (let meme of this.state.memes) {
            html += `<meme-container name="${meme.name}" image="${meme.image}" description="${meme.description}" date-modified="${meme["date-modified"]}"></meme-container>`
        }

        this._shadowRoot.innerHTML = `
    
        <form id="form-add-meme">
            <input type="text" name="name" placeholder="Name">
            <input type="text" name="image" placeholder="Link">
            <input type="text" name="description" placeholder="Description">
            <button>Add meme</button>
        </form>
        <div class="list">
            ${html}
        </div>
        `;

        this.$formAddMeme = this._shadowRoot.getElementById('form-add-meme');
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                "name": this.$formAddMeme.name.value,
                "image": this.$formAddMeme.image.value,
                "description": this.$formAddMeme.description.value,
                "date-modified": new Date().toISOString()
            }
            this.state.memes.push(newMeme);

            let $meme = document.createElement('meme-container');
            $meme.setAttribute('name', newMeme.name);
            $meme.setAttribute('image', newMeme.image);
            $meme.setAttribute('description', newMeme.description);
            $meme.setAttribute('date-modified', newMeme["date-modified"]);

            this.$list = this._shadowRoot.querySelector('.list');
            this.$list.appendChild($meme);
        }
    }
}

window.customElements.define('list-container', List);