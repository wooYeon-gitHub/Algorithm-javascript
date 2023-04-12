// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number); // A와 B입력
let flag = false;
let result = 1;

while (a <= b) {
  if ( a==b ) {
    flag = true;
    break;
  }
  if (b % 2 ==0) b = parseInt(b / 2); //   2로 나누어 떨어지는 경우
  else if (b % 10 == 1) b = parseInt(b / 10); // 그렇지 않고, 일의 자릿수가 1인 경우
  else break; // 위 경우가 모두 해당되지 않는 경우
  result++;
}
if (flag) console.log(result);
else console.log(-1);
