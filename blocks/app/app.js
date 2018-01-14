(function () {
    'use strict';

    const Block = window.Block;
    const Input = window.Input;
    const Button = window.Button;

    class App extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
                <div class="app">
                    <div class="app__list">
                    </div>
                    <div class="app__control">
                        <div class="app__name js-name"></div>
                        <div class="app__submit js-submit"></div>
                    </div>
                </div>`;

            let button = new Button(this.node.querySelector('.js-submit'), {
                text: 'Войти'
            });

            let input = new Input(this.node.querySelector('.js-name'), {
                value: '',
                placeholder: 'Ваше имя'
            });

            button.render();
            input.render();
        }

    }

    window.App = App;
})();