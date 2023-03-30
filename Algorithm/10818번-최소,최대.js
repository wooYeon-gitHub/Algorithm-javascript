// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제이다.
// 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 0(N)으로 해결할 수 있다.

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue = 1000001;
let maxValue = -1000001;
for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i];
  if (maxValue < arr[i]) maxValue = arr[i];
}
console.log(minValue, maxValue);