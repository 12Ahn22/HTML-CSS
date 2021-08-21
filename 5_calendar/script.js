const month_picker = document.querySelector('#month-picker');
const calendar_days = document.querySelector('.calendar-days');
const calendar_header_year = document.querySelector('#year');
const month_list = document.querySelector('.month-list');
const calendar = document.querySelector('.calendar');

// 다크모드 토글
document.querySelector('.dark-mode-switch').onclick = () => {
  document.querySelector('body').classList.toggle('dark');
  document.querySelector('body').classList.toggle('light');
};

// 월 고르기 버튼
month_picker.onclick = () => {
  month_list.classList.add('show');
};

// 년도 버튼 클릭 이벤트
document.querySelector('#prev-year').onclick = () => {
  --current_year.value;
  generateCalendar(current_month.value, current_year.value);
};
document.querySelector('#next-year').onclick = () => {
  ++current_year.value;
  generateCalendar(current_month.value, current_year.value);
};

// 윤년 체크
const isLeapYear = (year) => {
  // 4로 나누어 떨어지면서 100과 400으로 나누어 떨어지지 않는 숫자
  // or
  // 100으로 나누어떨어지고 400으로도 나누어 떨어지는 숫자
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

// 2월의 날짜수 얻기
// 윤년이라면 29일 아니면 28일
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

const month_names = [
  'January',
  'Fabruary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// 캘린더 생성하기
const generateCalendar = (month, year) => {
  // 월별 일수
  const days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  // 현재 날짜
  const currentDate = new Date();
  // 입력받은 월 / 년도를 헤더에 설정
  month_picker.textContent = month_names[month];
  calendar_header_year.textContent = year;

  // 입력받은 월/년으로 해당 월의 1일의 시간을 구한다.
  const first_day = new Date(year, month, 1); // Date()

  // 캘린더를 새로 그리기 전에 이전에 있던 캘린더를 삭제해준다.
  calendar_days.innerHTML = '';

  // 해당 월의 날짜수 + 요일 수 - 1 만큼 날짜를 그린다.
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

const currentDate = new Date();
let current_month = { value: currentDate.getMonth() };
let current_year = { value: currentDate.getFullYear() };

month_names.forEach((item, idx) => {
  const month = document.createElement('div');
  const month_text = document.createElement('div');
  month_text.textContent = item;
  month.appendChild(month_text);
  month.onclick = () => {
    month_list.classList.remove('show');
    // 선택된 날짜로 월을 변경
    current_month.value = idx;
    // 선택된 월/년으로 캘린더 다시 그리기
    generateCalendar(current_month.value, current_year.value);
  };
  month_list.appendChild(month);
});

// 첫 로딩 시 캘린더
generateCalendar(current_month.value, current_year.value);
