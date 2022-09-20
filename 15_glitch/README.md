[출처](https://www.youtube.com/watch?v=9CCkp_El1So)

![image](https://user-images.githubusercontent.com/44540726/191200362-0d7b3eb0-b6c4-494f-ad5a-392788ae228c.png)

[정리글 노션](https://thundering-engine-3d3.notion.site/698daa4d4b694f4da512ad2397bce255)

> 노션 정리글 일부를 옮긴 내용입니다.
>
> 노션 링크를 추천드립니다.

유튜브에서 보자마자 이뻐서 바로 따라해봤다. 약간 틱톡같은 느낌이다.

간단하게 호버 시, before와 after에 색상을 주고 top,left만 바뀌는 애니메이션을 준 것이다.

## 🐱‍🐉정리

### 요소 가운데 정렬

```css
.glitch {
  position: absolute;
  top: 50%;
  left: 50%;
  /* top, left 50%로 했을 때, 왼쪽 최상단이 가운데로 오도록 설정되니까
  translate로 전체크기의 반을 이동시켜야함. translate는 퍼센트로 사용 시, 요소 크기가 기준 */
  transform: translate(-50%, -50%);
  font-size: 100px;
  letter-spacing: 8px;
  cursor: pointer;
}
```

**가운데 정렬**을 하는 경우, transform을 사용해 해당 요소의 절반을 왼쪽으로 이동시켜야한다.

- top과 left를 50%로 하는 경우 해당 요소의 왼쪽 최상단 지점이 50퍼 지점(가운데)로 오게된다.
- 따라서 해당 요소 크기의 절반을 이동시켜야한다.
- 이때 사용하는 translate는 퍼센트를 사용할 경우 해당 요소 전체 크기를 기준으로 한다.

## 🐱‍🐉개선

before와 after로 만들어진 GLITCH 글자가 겹쳐져 있어서, 글자 가장자리 부분이 매끄럽지 못했다. 곡선 부분이 겹쳐지면서 지글거리는 게 눈에 잘 띈다.

그래서 hover하지 않은 상태인 경우엔 visibility를 hidden으로 설정하고, hover 시에 visibility를 visible로 설정했다.

그나마 덜 지글거린다.

### visibility를 사용한 이유

display를 none을 사용할 수 도 있지만 visibility를 사용한 이유는 레이아웃이 변경될 필요가 없기 때문이다.

생각해보니 opacity를 사용해도 됬을 것 같다.

- **CSS 코드**
  ```css
  .glitch {
    position: absolute;
    top: 50%;
    left: 50%;
    /* top, left 50%로 했을 때, 왼쪽 최상단이 가운데로 오도록 설정되니까
    translate로 전체크기의 반을 이동시켜야함. translate는 퍼센트로 사용 시, 요소 크기가 기준 */
    transform: translate(-50%, -50%);
    font-size: 100px;
    letter-spacing: 8px;
    cursor: pointer;
  }
  .glitch::before,
  .glitch::after {
    content: "GLITCH";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    visibility: hidden;
  }
  .glitch:hover::before {
    visibility: visible;
    animation: glitch 0.3s linear infinite;
    color: #e91e63;
    z-index: -2;
  }
  .glitch:hover::after {
    visibility: visible;
    animation: glitch 0.3s linear infinite reverse;
    color: #2196f3;
    z-index: -1;
  }
  ```
