class MyProfile extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.innerHTML = `
            <style>
            span {
                margin-right: 1.5rem;
            }
            </style>
            <img src="https://images.unsplash.com/photo-1597934924100-7abe6ac46775?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80" alt="girl">
            <br>
                Name: <span id="name">Leyla</span>
                Age: <span id="age">22</span>
                Address: <span id="address">Hà Nội</span>
            
        `;

        this.$image = this._shadowRoot.querySelector('img');
        this.$name = this._shadowRoot.querySelector('#name');
        this.$age = this._shadowRoot.querySelector('#age');
        this.$address = this._shadowRoot.querySelector('#address');
    }

    static get observedAttributes() {
        return ['img', 'name', 'age', 'address', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`
            Thuộc tính ${name} thay đổi từ ${oldValue} thành ${newValue}
        `);

        if (name === 'img') {
            this.$image.setAttribute('src', newValue);
        } else if (name === 'description') {
            this.$image.setAttribute('alt', newValue);
        } else if (name === 'name') {
            this.$name.innerHTML = newValue;
        } else if (name === 'age') {
            this.$age.innerHTML = newValue;
        } else if (name === 'address') {
            this.$address.innerHTML = newValue;
        }
    }
}

window.customElements.define("my-profile", MyProfile);