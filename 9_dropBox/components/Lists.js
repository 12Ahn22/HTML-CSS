import Component from '../Component.js';

export default class Lists extends Component {
  setup() {
    // 상태 설정
    this.state = { lists: ['모듈화', '신기하다', '진짜 신기해'] };
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
