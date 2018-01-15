(function () {
    'use strict';

    const Block = window.Block;
    const Input = window.Input;
    const Button = window.Button;
    const Textarea = window.Textarea;
    
    const pageAuth = `
    <div class="app">
        <div class="app__list">
        </div>
        <div class="app__control">
            <div class="app__name js-name"></div>
            <div class="app__submit js-submit"></div>
        </div>
    </div>`;

    const pageChat = `
    <div class="app">
        <div class="app__list">
        </div>
        <div class="app__control">
            <div class="app__send-message js-send-message"></div>
        </div>
    </div>
    `;

    class App extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        authorize(){
            this.node.addEventListener("click",() => {this.node.innerHTML = pageChat;});
        } //нужно одолжить потом этот метод для кнопки

        render() {
            this.node.innerHTML = pageChat;

            let button = new Button(this.node.querySelector('.js-submit'), {
                text: 'Войти'
            });

            let input = new Input(this.node.querySelector('.js-name'), {
                value: '',
                placeholder: 'Ваше имя'
            });

            let textarea = new Textarea(this.node.querySelector('.js-send-message'), {
                value: '',
                placeholder: 'Текст сообщения'
            });

            button.render();
            input.render();
            textarea.render();
        }

    }

    window.App = App;
})();