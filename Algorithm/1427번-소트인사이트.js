// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 0부터 9까지의 모든 숫자에 대하여, 빈도수를 센다.
// 각 숫자를 내림차순으로 하나씩 확인하며, [빈도수 만큼]출력한다.

let n = input[0]; // 수(N) 입력받기
// 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열(Array) 선언
let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화

for (let x of n) { // 한 자리씩 숫자(digit)를 확인하며
  cnt[Number(x)]++;
}

let answer = "";
// 9부터 0까지 하나씩 숫자(digit)를 확인하며
for (let i = 9; i >= 0; i--) {
  //출현 빈도만큼 출력하기
  for (let j = 0; j < cnt[i]; j++) answer += i + "";
}
console.log(answer);