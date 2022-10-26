# GLOW

[참고 사이트](!https://www.youtube.com/watch?v=nmC6QDCB7zI)

![image](https://user-images.githubusercontent.com/44540726/197915136-668934f2-9320-4f4e-9ef3-3678cacb0ec5.png)

## 🐱‍🐉 정리

### transform-style

요소의 하위 항목들이 3D 공간에 위치할 것인지, 평면에 위치할 것인지 설정해주는 CSS 속성이다.

### transform

요소들을 rotate, scale, skew, translate할 수 있게 하는 속성이다.

- 사용 시, [시각적 서식 모델](https://developer.mozilla.org/ko/docs/Web/CSS/Visual_formatting_model)을 수정한다.

> `**perspective()**`

transform-style이 3d인 경우에 효과가 적용된다.

현재 사용자와 요소 간의 거리(z)가 얼마나 되는지 설정한다.

- 값이 작을 수록 화면하고 엄청 가까워진다.

### 변수 사용하기

```html
// html 코드
<div>
  <!-- style 속성? -->
  <span style="--i: 0"></span>
  <span style="--i: 1"></span>
  <span style="--i: 2"></span>
  <span style="--i: 3"></span>
</div>
```

```css
// CSS 코드
transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
```

html의 style 속성에 추가한 **CSS 변수**도 `CSS 파일`에서 **사용이 가능**하다.

### box-shadow

박스 섀도우는 사용할 때마다 잊어버리는 것 같다!

```css
// 문법
box-shadow: none | x-position y-position blur spread color | inset | initial |
  inherit;
```

`,`로 구분해서 여러개의 box-shadow를 사용할 수 있다.

입력 값에 따라 해석하는 요소가 다르다.

- 두 개에서 네 개의 `[<length>](https://developer.mozilla.org/ko/docs/Web/CSS/length)` 값.
  - 두 개의 값을 사용하면 `<offset-x><offset-y>`로 분석합니다. `필수값`
  - 세 번째 값이 주어지면 `<blur-radius>`로 분석합니다.
  - 네 번째 값이 주어지면 `<spread-radius>`로 분석합니다.
- 선택사항으로 `inset` 키워드.
- 선택사항으로 `[<color>](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)` 값.
