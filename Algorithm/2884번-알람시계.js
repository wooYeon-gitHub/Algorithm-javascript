// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if (minute < 45) { // 분이 45분 미만이라면
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
}
else minute -= 45;

console.log(hour + " " + minute);
