### 📁3_responsiveWeb1

**반응형 웹페이지 만들기**

[유튜브링크](https://www.youtube.com/watch?v=ac5nmWOkBEY)

![반응형 웹페이지](http://drive.google.com/uc?export=view&id=1J8CRh80uFNyWLASx2-RhFzNIX_cAmswZ)

#### 공부

- 정적 웹 페이지를 반응형으로 만들어보기

  영상에서 중복적으로 계속 같은 CSS를 사용하는데 최대한 공통영역으로 빼보려고 노력했다

  BEM 방법 단점이 클래스명이 점점 길어진다는 것인데. 오늘 체험했다.
  `.testimonials .testimonial .testimonial__text h3` ..이라던가...

- 반응형을 위한 브레이크 포인트

  부트스트랩을 참조했다. 앞으로 반응형 웹을 만들 때, 해당 사이즈를 기준으로 삼을 것이다.

  | Medium | Large | Extra  |
  | ------ | ----- | ------ |
  | 768px  | 992px | 1200px |

  여기서 쓰인 css에서는 `max-width: 991px`인데 992px아래 부터 적용되는 미디어 쿼리라서 991px인 것이다.

- 영상에서는 하나의 css에 모든 section에서 사용된 css를 넣는다. 나중에 분리해야겠다..
