class Component {
  target;
  state;
  constructor(target) {
    this.target = target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return '';
  }
  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  // 상태가 변경되면
  // 리렌더링을 해야한다.
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.state = { lists: ['test', '우와 신기해'] };
  }
  template() {
    const { lists } = this.state;

    return `
    <div class="card" id="reactCard">
    <div class="card__content">
      <div class="card__img">
        <img src="../src/img/1.jpg" alt="profile" />
      </div>
      <h2>
        Someone Famous <br />
        <span> WebDeveloper</span>
      </h2>
    </div>
    <ul class="navigation">
      ${lists.map((list) => `<li><a href='#'>${list}</a></li>`).join('')}
    </ul>
    <div class="toggle" id="reactToggle">
      <ion-icon name="chevron-down-outline"></ion-icon>
    </div>
  </div>
      `;
  }

  setEvent() {
    this.target.querySelector('#reactToggle').addEventListener('click', () => {
      this.target.querySelector('#reactCard').classList.toggle('active');
    });
  }
}

const reactComponent = new App(document.querySelector('#root'));
console.log(reactComponent);
