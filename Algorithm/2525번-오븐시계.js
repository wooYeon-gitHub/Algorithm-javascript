// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

// 입력: (17시 40분 + 80분) = (1060분 + 80분) = 1140분
// 1140를 1440으로 나눈 나머지를 취하기: 1140분
// 이때, 60으로 나눈 몫을 시(hour)로 취하기: 19시
// 이때, 60으로 나눈 나머지를 분(minute)으로 취하기: 0분

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c;
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);