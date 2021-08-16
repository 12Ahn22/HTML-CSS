# HTML&CSS 강의

[Online Tutorials](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog) 의 유튜브를 보고 작업한 내용들을 저장하는 레포지토리입니다.


+ 완전 똑같이 따라하는 것이 아니라, BEM 방법론을 적용하거나 시맨틱 마크업을 적용해 만들고 있습니다.
+ 목표는 HTML&CSS와 친해지는 것입니다 😉

### 목차
1. [스타벅스 랜딩페이지](#1_starbucks)



---

### 📁1_starbucks
**스타벅스 랜딩페이지** [링크](https://www.youtube.com/watch?v=91Q6RvKvd7o)

![스타벅스랜딩페이지20210816_131338](https://user-images.githubusercontent.com/44540726/129510676-6caf25a2-8302-4783-a598-52fc5b22c30c.gif)

#### 공부
+ `position: relative;`
  
  요소를 일반적인 문서 흐름에 따라 배치하고, 자기 자신을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용
+ `position: absolute;`
  
  일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않습니다.
  가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치
+ `display: inline-block;`
  
  내용물 만큼의 너비를 가진다. inline은 높이와 너비가 설정이 불가능하기 때문에 inline-block을 사용
+ `em과 rem`
  
  em은 자기 자신or 부모의 글자 크기를 기준으로 설정한다
  rem은 root의 크기를 기준으로 크기를 설정한다. = 16px 기준
  현재 설정한 글자 크기가 없기때문에 부모로 부터 상속받는다.
  따라서 16px * 4 = 64px이 된다.
+ `line-height: 1.4em;`
  
  행간 = 줄간격
  em 단위를 사용한다.
+ `left: 50%;
  transform: translateX(-50%);`
  
  left:50%로 가운데 정렬을 할 경우
  기준점이 왼쪽 상단 (0,0)을 기준으로 정렬이기 때문에
  transform을 이용해 정렬된 박스의 너비의 50퍼를 뒤로 이동시켜줘야한다.
+ `clip-path: circle(600px at right 900px);`
  
  포토샵 마스크 클리핑과 비슷하다. 보여줄 부분을 정해서 보여준다.
