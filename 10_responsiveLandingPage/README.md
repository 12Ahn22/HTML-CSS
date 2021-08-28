## 📁10_responsiveLandingPage

**HTML과 CSS로만 애니메이션 만들기**

[유튜브링크](https://www.youtube.com/watch?v=lAOkx2yZESY)

![반응형랜딩페이지20210828_154323](https://user-images.githubusercontent.com/44540726/131209147-51e7d567-e77c-4410-933a-8b741b3ae85e.gif)

## 공부

### flex

- `flex`

  flex-grow | flex-shirink | flex-basis 를 축약해서 쓰는 속성

  - `flex-grow`

    flex컨테이너 내부에 요소가 할당 받을 공간의 정도

  - `flex-shirink`

    flex요소가 flex컨테이너 요소의 크기보다 클 때, 설정한 숫자에 따라 flex요소의 크기가 축소된다.

  - `flex-basis`

    flex요소의 초기 크기를 정한다.

### 미디어쿼리

```css
@media only screen and (max-width: 768px) {
  ...;
}
```

- 768px을 포함한 상태
- 아이패드의 너비와 같다.
- 768px를 기준으로하면 아이패드부터 반응형으로 괜찮게 작동한다.

```css
@media only screen and (max-width: 1024px) {
  ...;
}
```

- 1024px은 아이패드pro의 너비와 같다.
- 768px의 미디어 쿼리로 768px보다 작은 대다수의 반응형을 커버할 수 있지만
- 아이패드pro는 높이와 너비가 둘 다 크기 때문에 따로 추가해주는 게 보기좋다.
