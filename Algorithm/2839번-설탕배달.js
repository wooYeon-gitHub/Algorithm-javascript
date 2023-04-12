// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A+B를 출력한다.

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n >= 0) { // 더 이상 반복할 수 없을 때까지 반복
  // n이 0이 되었거나, n으로 나누어 떨어지는 값인 경우
  if (n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5); // 5로 나눈 몫을 더하기
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}
if (!flag) {
  console.log(-1);
}

