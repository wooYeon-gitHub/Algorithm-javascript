// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let maxValue = scores.reduce((a,b) => Math.max(a, b));
let updated = [];
for (let i = 0; i < n; i++) { // 수정된 원소 하나씩 저장
  updated.push(scores[i] / maxValue * 100);
}

// 배열에 포함된 원소의 평균 출력
console.log(updated.reduce((a,b) => a + b) / n);