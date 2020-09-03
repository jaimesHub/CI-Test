class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this.props = {};
        this.state = {};
    }
    connectedCallback() {
        this.render();
        this.componentDidMount();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }
    disconnectCallback() {
        this.componentWillUnmout();
    }
    setState(newState) {
            this.setState = newState;
            this.render();
            this.componentDidUpdate();
        }
        /**
         * Print HTML ra ngoai` man` hinh .
         * gắn sự kiện cho các thẻ bên trong component.
         */
    render() {}
        /**
         *  được gọi sau khi component được sinh ra, sau khi render
         * được gọi 1 lần duy nhaát
         */
    componentDidMount() {}
        /**
         *  được gọi sau khi próps hoặc state được thay đổi , sau khi render
         */
    componentDidUpdate() {}
        /**
         *  được gọi trước khi component biến mất.
         */
    componentWillUnmout() {}
}

export { BaseComponent };