// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

// 뺄셈 연산자를 기준으로 나누어 여러 그룹 나누기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let groups = input[0].split('-');
let answer = 0;
for (let i = 0; i < groups.length; i++) {
  // 각 그룹 내부에서 덧셈 연산 적용
  let cur = groups[i].split('+').map(Number).reduce((a,b) => a + b);
  if (i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈
  else answer -= cur; // 두 번째 그룹부터 뺄셈
}
console.log(answer);