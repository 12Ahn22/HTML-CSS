import Lists from './components/Lists.js';

class App {
  constructor() {
    const root = document.querySelector('#root');
    new Lists(root);
  }
}

new App();
