import Block from '../block';

export default class Auth extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = `
        <div class="auth">
            ${this.options.text}
        </div>`;
    }

}