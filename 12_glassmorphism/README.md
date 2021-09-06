## 📁12_glassmorphism

- 참고 영상에서는 js 애니메이션 로직이 없지만 추가로 구현
- 마크업 수정
- BEM 방법 적용

---

[참고 링크](https://www.youtube.com/watch?v=Y1CXUfZOZ40)

![12글래스모피즘20210906_205717](https://user-images.githubusercontent.com/44540726/132214066-42faea9c-c13a-4e69-bbf5-7ae64dd2b5ca.gif)

## 공부

### `backdrop-filter`

요소 뒤 영역에 흐름이나 색상 시프트 등 그래픽 효과를 적용하는 CSS 속성

요소 뒤에 적용하기 때문에 앞 요소나 앞 요소의 배경을 적어도 반투명하게 설정해야한다.

```css
/* 요소 배경을 투명하게 설정 */
background: rgba(255, 255, 255, 0.1);
/* backdrop-filter - 요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용하는 속성, 요소 뒤에 적용하기 때문에 앞 요소나 요소의 배경을 적어도 반투명하게는 설정해야한다.*/
backdrop-filter: blur(15px);
```

### `transform-origin`

transform의 기준점을 옮겨준다.

### `요소.getBoundingClientRect()`

해당 요소의 DOM 위치/크기 정보를 제공해준다. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

- 뷰포트 기준으로 Rect 위치 정보 제공

- 해당 요소의 width와 height 정보 제공

  ```js
  const rect = e.target.getBoundingClientRect();
  ```

### `perspective`

해당 요소를 3차원으로 만든다.

- 즉, (x,y,z) 세 가지 좌표를 가지게 된다.
- `perspective`를 사용해 마우스 좌표에 따라 카드가 움직이도록 만들 수 있다.

  ```js
  // 해당 카드의 좌표와 마우스 위치를 사용해 움직이는 css 구현하기
  const card = document.querySelector('#card');
  card.addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x =
      e.offsetX <= rect.width / 2
        ? (rect.width / 2 - e.offsetX) / 10
        : (rect.width / 2 - e.offsetX) / 10;
    const y =
      e.offsetY <= rect.height / 2
        ? (rect.height / 2 - e.offsetY) / 10
        : (rect.height / 2 - e.offsetY) / 10;
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg) `;
  });
  ```

  card에 `mousemove`이벤트가 일어났을 경우

  - 해당 요소의 상자 크기를 계산

    ```js
    const rect = e.target.getBoundingClientRect();
    ```

  - 마우스의 위치에 따른 rotate 각도 설정하기

    ```js
    const x =
      e.offsetX <= rect.width / 2
        ? (rect.width / 2 - e.offsetX) / 10
        : (rect.width / 2 - e.offsetX) / 10;
    const y =
      e.offsetY <= rect.height / 2
        ? (rect.height / 2 - e.offsetY) / 10
        : (rect.height / 2 - e.offsetY) / 10;
    ```

  - css 처리 해주기

    ```js
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg) `;
    ``;
    ```

    - 주의 할점
      ![좌표 예시](https://user-images.githubusercontent.com/44540726/132213812-f0a7e243-4150-42ca-b6bb-73527fb7f9fc.png)
      - perspective를 한 경우, x는 화면 앞쪽으로 나오는 방향이다.
      - y는 옆으로 도는 방향이다.
      - 따라서 rotateX()에 y를 넣어주고 rotateY에 x를 넣어준다.

---

### 리뷰

- 적절한 각도값을 나오게 하는 로직을 생각하는데 시간이 많이 걸렸다. 대략 -20deg ~ 20deg만 왔다갔다 하고싶었기 때문에...
- 현재 마우스 위치가 요소의 크기의 반보다 작은 경우와 큰 경우 두가지를 생각해서 각도를 계산했다.
- z좌표가 내 방향으로 나오는 줄 알았는데, x좌표가 내 방향으로 나오는 것이였다.
