const $app = document.querySelector('#root');

// 상태
let state = {
  lists: ['Profile', 'Message', 'Setting', 'Logout'],
};
// 렌더링 함수
const render = () => {
  const { lists } = state; // 구조분해할당

  // html
  $app.innerHTML = `
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
  const reactCard = document.querySelector('#reactCard');
  const reactToggle = document.querySelector('#reactToggle');
  reactToggle.addEventListener('click', () => {
    reactCard.classList.toggle('active');
  });
};

const setState = (newState) => {
  console.log(newState);
  state = { ...state, ...newState };
  console.log(state);
  render();
};

render();

// setState({ lists: ['test', 'test2'] });
