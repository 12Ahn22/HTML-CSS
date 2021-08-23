## 📁5_calender

**캘린더 만들기**

[유튜브링크](https://www.youtube.com/watch?v=eOEX09sfhpM)

![캘린더20210821_145405](https://user-images.githubusercontent.com/44540726/130312140-b0b768b7-1a4b-4bcc-8591-770c9f72e72b.gif)

## 공부

보통 js 캘린더를 찾아보면 라이브러리를 사용하는 경우가 많은데
라이브러리가 아닌 처음부터 캘린더를 어떻게 만드는지 궁금했기 때문에
이번 유튜브 강의는 정말 재미있었습니다.

- **다크 모드**

  CSS로 다크모드를 만들 때, root에는 색상만 지정하고 .dark라는 클래스에 --bg-main 등 변수를 선언해준 것이 인상깊었다.

  앞으로 이런식으로 나도 CSS를 만들어야겠다.

  ```css
  .dark {
    --bg-body: var(--dark-body);
    --bg-main: var(--dark-main);
    --bg-second: var(--dark-second);
    --color-hover: var(--dark-hover);
    --color-text: var(--dark-text);
  }
  .light {
    --bg-body: var(--light-body);
    --bg-main: var(--light-main);
    --bg-second: var(--light-second);
    --color-hover: var(--light-hover);
    --color-text: var(--light-text);
  }
  ```

- **`grid`**

  보통 중앙 정렬을 할 때, flex를 사용해 `justify-contents:center`와 `align-items:center`를 사용했었는데,

  grid를 사용해 `place-items: center` 로 중앙 정렬을 한다. 비슷하지만 좀 더 짧은 것 같다.
  `grid-template-columns: repeat(7, 1fr);` 그리드는 명시적으로 컬럼과 로우를 정해줄 수 있는데 여기서 컬럼의 개수를 7개 1fr은 남은 공간에서 1만큼의 비율을 가져간다는 의미이다.
  `grid-template-columns: repeat(7, auto);` auto는 컨텐츠 크기만큼 가져간다.

- **`animation: to-top 1.2s forwards;`**

  `animation-fill-mode` 속성인 forwards는 애니메이션의 마지막 키 프레임에 설정된 계산값을 유지한다. to-top 애니메이션은 마지막에 opacity가 1이 되기 때문에 마지막 CSS 모습을 유지해야 화면에 계속 요소(날짜)가 나타난다.

- **`visibility: visible;`**

  `visibility: visible`는 `display:none`과 다르다. 요소가 공간(레이아웃)을 그대로 유지하고 있다. 단지 눈에 보이지 않을 뿐이다.

- **날짜를 계산하는 방법**

  캘린더에서 가장 궁금했던 것이, 년도별로 날짜와 요일을 어떻게 계산하는 것이였다.

  일단 월별 일수는 규칙이 있고, 윤년마다 2월만 달라지기 때문에 윤년을 계산하는 함수를 통해 윤년을 계산해 월별 일수를 변경해주었다.

  Date()생성자를 통해 입력받은 월/년도의 1일자 시간을 구해온다.

  구해온 해당 월의 1일의 요일값을 `getDay`로 가져온다. 0-6(일요일-토요일)

  만약, 1일이 수요일이였다면 getDay는 3을 리턴한다. 그럼 우리는 3(수요일)부터 1일이라고 시작해줘야한다. 따라서 앞에 3칸을 빈 div를 만들고 3번째 칸이 된 순간부터 1부터 31일까지 div안에 text로 써주면된다.

  그렇기 때문에 아래 코드에서 해당 월의 일수 + 요일 수 - 1 만큼 일수를 만들고, i값이 현재 요일(ex.3) 보다 큰 경우에만 안에 text를 넣어줘서 div를 만들어준다.

```js
 for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    // 기존에 있던 캘린더 데이를 모두 초기화
    // getDay = 월화수목금토일을 숫자로 돌려줌
    // div를 만든다.
    let day = document.createElement('div');
    // i가 현재 요일보다 큰 경우부터 날짜가 만들어져아한다.
    // first_day가 3(수요일)부터 시작이면 앞에 3칸이 비워져야함
    if (i >= first_day.getDay()) {
      day.classList.add('calendar-day-hover');
      // 3번째 칸부터 1일로 시작
      day.textContent = i - first_day.getDay() + 1;
      // span 4개를 붙여준다.
      for (let j = 0; j < 4; j++) {
        const span = document.createElement('span');
        day.appendChild(span);
      }
    }
    // 오늘 날짜와 같은 날짜인 경우 따로 표시를 해준다.
    if (
      i - first_day.getDay() + 1 === currentDate.getDate() &&
      year === currentDate.getFullYear() &&
      month === currentDate.getMonth()
    ) {
      day.classList.add('current-date');
    }
    calendar_days.appendChild(day);
  }
};
```
