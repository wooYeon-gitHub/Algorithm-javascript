// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++) { // 각각의 테스트 케이스를 확인
  let data = input[t].split(' ').map(Number);
  let n = data[0]; // 첫 번째 수는 데이터의 개수
  let summary = 0; // n개의 점수에 대하여 평균 계산
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }
  let average = summary / n;
  let cnt = 0; // 점수가 평균을 넘는 학생 수 계산
  for (let i = 1; i <= n; i++)
    if (data[i] > average) cnt += 1;
  // 점수가 편균을 넘는 학생의 비율을 소수점 아래 셋째 자리까지 출력
  console.log(`${(cnt / n * 100).toFixed(3)}%`);
}