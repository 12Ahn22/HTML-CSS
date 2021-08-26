// 모든 컴포넌트들이 공통으로 가지는 특징들 = 추상화

export default class Component {
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
  // 렌더링 함수
  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  // 상태 변경 함수
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
