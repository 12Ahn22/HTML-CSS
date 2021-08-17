# HTML&CSS 강의

[Online Tutorials](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog)
[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

유튜브를 보고 작업한 내용들을 저장하는 레포지토리입니다.

- 완전 똑같이 따라하는 것이 아니라, BEM 방법론을 적용하거나 시맨틱 마크업을 적용해 만들고 있습니다.
- 목표는 HTML&CSS와 친해지는 것입니다 😉

### 목차

1. [스타벅스 랜딩페이지](#1_starbucks)
2. [비디오 백그라운드](#2_video)

---

### 📁1_starbucks

**스타벅스 랜딩페이지** [링크](https://www.youtube.com/watch?v=91Q6RvKvd7o)

![스타벅스랜딩페이지20210816_131338](https://user-images.githubusercontent.com/44540726/129510676-6caf25a2-8302-4783-a598-52fc5b22c30c.gif)

#### 공부

- `position: relative;`

  요소를 일반적인 문서 흐름에 따라 배치하고, 자기 자신을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용

- `position: absolute;`

  일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않습니다.
  가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치

- `display: inline-block;`

  내용물 만큼의 너비를 가진다. inline은 높이와 너비가 설정이 불가능하기 때문에 inline-block을 사용

- `em과 rem`

  em은 자기 자신or 부모의 글자 크기를 기준으로 설정한다
  rem은 root의 크기를 기준으로 크기를 설정한다. = 16px 기준
  현재 설정한 글자 크기가 없기때문에 부모로 부터 상속받는다.
  따라서 16px \* 4 = 64px이 된다.

- `line-height: 1.4em;`

  행간 = 줄간격
  em 단위를 사용한다.

- `left: 50%; transform: translateX(-50%);`

  left:50%로 가운데 정렬을 할 경우
  기준점이 왼쪽 상단 (0,0)을 기준으로 정렬이기 때문에
  transform을 이용해 정렬된 박스의 너비의 50퍼를 뒤로 이동시켜줘야한다.

- `clip-path: circle(600px at right 900px);`

  포토샵 마스크 클리핑과 비슷하다. 보여줄 부분을 정해서 보여준다.

---

### 📁2_video

**비디오를 백그라운드로 사용하는 랜딩페이지** [링크](https://www.youtube.com/watch?v=8MgpE2DTTKA)

![비디오랜딩페이지20210817_142635](https://user-images.githubusercontent.com/44540726/129668487-27a42260-f0d3-4f77-9d6c-3a0e04141525.gif)

#### 공부

- `css 간단한 애니메이션`

  hover시, letter-spacing이 늘어나게하기

```css
.btn {
  display: inline-block;
  font-size: 1em;
  background-color: #fff;
  padding: 10px 30px;
  text-decoration: none;
  color: #333;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.2s ease;
}
.btn:hover {
  letter-spacing: 6px;
}
```

- 메뉴 토글 버튼

  전체 섹션을 translateX를 사용해, -300px이동 시킨 후, 빈 300px 공간을 메뉴아이템을 보여주는 공간으로 사용한다.
  모바일에서도 확인해보니 적절하게 보이는 것 같다.

  그리고 메뉴아이템들을 `display:none`을 해놓는 것이 아니라 z-index를 사용해 맨 뒤에 존재하게 해서 가려놓는다.

  `display:none`을 다시 block으로 전환하면 layout 과정을 다시 하는 것으로 알고있다. display를 건들이지 않고 이런 방식을 사용하면 좀 더 빠르고 효율적으로 화면을 그릴 수 있다.

  그리고 top, left, right를 사용해 이동 시키는 것 보다 translate를 사용하는 것도 layout 과정을 다시 하지않기 때문에 rigth로 이동시키지 않고 translate를 사용하자.

- 오버레이

  div 태그에 배경색상을 넣어 CSS mix-blend-mode를 사용해 overlay를 줬다.
  `mix-blend-mode`는 어느 요소의 콘텐츠가 자신의 배경 및 부모와 어떻게 혼합되어야 하는지 지정한다.
  포토샵 레이어랑 똑같다.

- `box sizing`

  `border-box`는 테두리와 안쪽 여백의 크기도 요소의 크기로 고려한다.

- `z-index`

  z-index는 position 속성이 없다면 작동하지 않는다.

- 비디오 배경

  뷰의 전체크기를 사용하고, absolute를 사용해 위치를 고정시킨다.
  object-fit을 사용해 영상 크기가 가득 차도록 설정한다.
