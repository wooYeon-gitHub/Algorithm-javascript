// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let testCase = Number(input[0]);

// 한 줄(line)씩 입력받기
for (let i = 1; i <= testCase; i++) {
  let [r, s] = input[i].split(" ");
  let result = "";
  // 현재 문자열의 각 문자를 하나씩 확인하며
  for (let j = 0; j <= s.length; j++) {
  // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}