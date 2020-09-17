import { BaseComponent } from "./BaseComponent.js";

var newMeme = {
    'image': '',
    'content': '',
    'date-modified': ''
}

class ListMeme extends BaseComponent {
    state;
    constructor() {
        super();
        this.state = {
            memes: [
                { 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlM1yVrFqll3RtFjn3Uyh7XY2Wqiu4pgoZqA&usqp=CAU', 'content': "Người Nhện 2 Phần 1", 'date-modified': '2020/08/31' },
                { 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlM1yVrFqll3RtFjn3Uyh7XY2Wqiu4pgoZqA&usqp=CAU', 'content': "Người nhện 1 Phần 3", 'date-modified': '2019/10/30' },
                { 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlM1yVrFqll3RtFjn3Uyh7XY2Wqiu4pgoZqA&usqp=CAU', 'content': "Người nhện 1 Phần 2", 'date-modified': '2018/11/25' },
                { 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlM1yVrFqll3RtFjn3Uyh7XY2Wqiu4pgoZqA&usqp=CAU', 'content': "Người nhện 2 Phần 1", 'date-modified': '2020/10/25' }
            ]
        }

    }

    render() {
        let html = ``;
        for (let meme of this.state.memes) {
            html += `<meme-container image="${meme.image}" content="${meme.content}" date-modified="${meme["date-modified"]}"></meme-container>`;
        }

        this._shadowRoot.innerHTML = `
            <form id="form-add-meme">
                <input id="meme-image" type="text" placeholder="Link..."><br>
                <input id="meme-content" type="text" placeholder="Name..."><br>
                <input id="meme-dateModified" type="date" placeholder="Date..."><br><br>
                <button id="btn-create">Create new meme</button>
            </form><br><br>
            <div class="list-meme">
                ${html}
            </div>
        `;

        this.$addMeme = this._shadowRoot.getElementById("form-add-meme");
        // console.log(this.$addMeme);
        this.$addMeme.onsubmit = (event) => {
            event.preventDefault();
            // console.log(event);
            let newMeme = {
                'image': this.$addMeme['meme-image'].value,
                'content': this.$addMeme['meme-content'].value,
                'date-modified': this.$addMeme['meme-dateModified'].value
            }

            // console.log(newMeme);
            // cap nhat len webcomponent noi dung hinh anh + doc roi day
            this.setState({
                memes: [
                    ...this.state.memes,
                    newMeme
                ]
            });

            // add newMeme vao firebase + alert success
            this.addMemeFB(newMeme);


        }
    }

    async addMemeFB(newMeme) {
        await firebase.firestore().collection("memes").add({
            'image': newMeme.image,
            'content': newMeme.content,
            'date-modified': newMeme["date-modified"]
        });
    }


}

window.customElements.define("list-container", ListMeme);