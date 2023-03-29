// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0]);

function check(a) {
  if (90 <= a && a <= 100) console.log('A');
  else if (80 <= a && a <= 89) console.log('B');
  else if (70 <= a && a <= 79) console.log('C');
  else if (60 <= a && a <= 69) console.log('D');
  else console.log('F');
}
check(data);