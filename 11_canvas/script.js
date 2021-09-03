import { Ball } from './ball.js';

class App {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');

    // 리사이즈 이벤트
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

    // 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다
    window.requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }
  // 실제 애니메이션을 구동시키는 함수
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}

window.onload = () => {
  new App();
};
