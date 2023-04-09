// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  data.push([x, y]);
}

function compare (a, b) {
  if (a[1] != b[1]) return a[1] - b[1]; // x 좌표 기준 오름차순
  else return a[0] - b[0]; // x가 같으면 y좌표 기준 오름차순
}
data.sort(compare); // 정렬 수행

let answer = ""; // 정렬 결과 출력
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);