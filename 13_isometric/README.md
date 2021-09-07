## 📁13_isometric

- BEM 방법론 사용

**CSS로 Isometric 효과주기**

---

[유튜브링크](https://www.youtube.com/watch?v=C8wSNZqktOM)

![13레이어효과20210907_192750](https://user-images.githubusercontent.com/44540726/132329914-db2c425a-6aa2-42b9-be1d-5b7266c69c9d.gif)

## 공부

### `transform-style: preserve-3d;`

해당 속성을 가진 요소를 부모 요소를 기준으로 3차원으로 설정한다.

- 상속되지않는다.

### 입체감 주기

해당 요소의 두께를 표시하기 위해서 `::before`와 `::after` 가상 요소를 사용했다.

- 가상 요소 ::와 가상 클래스 :는 다르다.
  - 가상 요소인 `::before`
    - 선택한 요소의 `특정 부분`에 스타일을 적용하고 싶을 경우 사용한다.
  - 가상 클래스인 `:hover`
    - 선택한 요소가 `특정한 상태`일 때, 스타일을 적용하고 싶을 경우 사용한다.

layer_box\_\_item의 두께를 표현하는 가상 요소 코드

```css
.layer_box .layer_box__item::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background: #2a2a2a;
  transform-origin: top;
  transform: skewX(-45deg);
}
.layer_box .layer_box__item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -10px;
  width: 10px;
  height: 100%;
  background: #2a2a2a;
  transform-origin: right;
  transform: skewY(-45deg);
}
```

### 레이어 표현하기

`span` 태그를 사용해 마우스 hover시, 각각 span들이 위치를 변경해 층이 쌓인 효과를 표현한다.

- `transform: translate(30px, -30px);`
  - transform을 사용해 위치를 변경할 때, 변경 기준은 현재 요소의 위치를 기준으로 한다.
  - 따라서, 30px, -30px은 현재 위치에서 30px을 이동한다.
