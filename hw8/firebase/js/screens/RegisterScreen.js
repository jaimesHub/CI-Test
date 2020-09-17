import { BaseComponent } from "../BaseComponent.js";

var newUser = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}

class RegisterScreen extends BaseComponent {
    constructor() {
        super();


    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <section class="register-screen">
                <form action="#" class="form-register">
                    <input-wrapper class="name" label="Name" type="Text" error=""></input-wrapper>
                    <input-wrapper class="email" label="Email" type="email" error=""></input-wrapper>
                    <input-wrapper class="password" label="Password" type="password" error=""></input-wrapper>
                    <input-wrapper class="confirm-password" label="Confirm Password" type="password" error=""></input-wrapper>
                    <button class="btn-register">Register</button>
                </form>
            </section>
        `;

        this.$formRegister = this._shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit = (event) => {
            event.preventDefault();
            // lấy dữ liệu từ các input wrapper
            let newUser = {
                    username: this._shadowRoot.querySelector('.name').value,
                    email: this._shadowRoot.querySelector('.email').value,
                    password: this._shadowRoot.querySelector('.password').value,
                    confirmPassword: this._shadowRoot.querySelector('.confirm-password').value
                }
                // console.log(newData); // => dua data vao du lieu

            // kiểm tra dữ liệu nhập vào, nếu có lỗi thì show ra
            // this.checkInputUser(newUser);

            // lưu dữ liệu vào firestore
            if (this.checkInputUser(newUser) === true) {
                this.addUser(newUser); // dua data vao firestore
            } else {
                alert("Nhap lai");
            }

        }
    }

    async addUser(user) {
        await firebase.firestore().collection('users').add({
            username: user.username,
            email: user.email,
            password: user.password
        });
    }

    async checkInputUser(newUser) {
        let flag = true;
        if (newUser.password === newUser.confirmPassword) {
            if (newUser.username === '') {
                alert("username ko duoc bo trong");
                flag = false;
                return flag;
            } else {
                alert("da nhap ten!");
            }

            let emailsInDB = await firebase.firestore().collection('users').where('email', '==', newUser.email).get();

            if (newUser.email === '') {
                alert("email ko duoc bo trong");
                flag = false;
                return flag;
            } else if (!this.isEmail(newUser.email)) {
                alert("email ko hop le");
                flag = false;
                return flag;
            } else if (emailsInDB.length >= 1) {
                alert("email da ton tai");
                flag = false;
                return flag;
            } else {
                alert("email ok!");
            }
        } else {
            alert("mat khau ko trung nhau khi dang ki");
            flag = false;
            return flag;
        }
        return flag;
    }

    isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}

window.customElements.define('register-screen', RegisterScreen);