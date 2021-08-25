## 📁8_cssAnimation

**HTML과 CSS로만 애니메이션 만들기**

[유튜브링크](https://www.youtube.com/watch?v=_jOqYe0eFqY&list=PL5e68lK9hEzcZLltZrc3NDlKWS3XygchY)

![CSS애니메이션220210825_173219](https://user-images.githubusercontent.com/44540726/130756777-1e291b96-d5d5-4b63-9ed0-b2a42b9e88fa.gif)

## 공부

CSS와 HTML만 사용해서 애니메이션 효과를 만들어보고 싶어서 해당 강의를 선택했다. CSS만으로 할 수 있는게 정말 많다고 느낀다.

#### **`background: radial-gradient(rgba(0, 0, 0, 0.2) 25%, transparent, transparent;`**

항상 `linear-gradient`만 사용해서 이번에 `radial-gradient`를 사용한 것은 처음이다!

`radial`은 `방사형` 이라는 뜻으로 중심에서 쭉 퍼저나가는 원형식 그라디언트이다.

`radial-gradient( 포지션, 색 퍼짐정도%, 다음 색, 다음 색)`

여기서는 포지션은 생략하고 그라디에이션 색상들과 퍼짐정도만 설정해주었다.

  <br/>

#### **인라인 스타일 변수**

CSS 변수를 인라인 style로 사용할 수 있는지 몰랐다.🤷‍♀️

기본적으로 `:root`를 사용하는 것은 **html문서 전체**에 사용하는 변수를 설정하는 것이다.

[:root](https://developer.mozilla.org/ko/docs/Web/CSS/:root)는 가상 클래스로 문서 트리의 루트 요소를 의미한다.

> :root에 선언하는 것은 전역에 CSS 변수를 선언하는 것이다.

**inline-style로 변수 선언하기**

- ```html
  <span style="--변수명: 값"></span>
  ```

- ```html
  <span style="--i: 1"></span>
  ```

**inline-style로 선언한 변수를 실제 css에서 사용하기**

- ```css
  .vapour span{
    ...
    animation-delay: calc(var(--i) * 0.5s);
  }
  ```

  해당 변수값을 가져와서 계산 가능!
