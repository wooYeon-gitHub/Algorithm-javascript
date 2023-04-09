// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

// 본 문제에서는 문자열의 중복을 허용하지 않으므로, 집합(set)자료형을 사용할 수 있다.
// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로

let n = Number(input[0]); // 단어의 개수(N)와 전체 문자열 입력
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
// 중복된 원소를 제거하기 위해 집합(set)으로 변환한 뒤에 배열로 되돌리기
arr = [...new Set(arr)];

arr.sort((a, b) => {
  // 길이가 같으면 길이가 짧은 것이 우선
  if (a.length != b.length) return a.length - b.length;
  else { // 길이가 같으면 사전 순으로 정렬
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

for (let x of arr) { // 정렬된 결과를 한 줄에 하니씩 출력
  console.log(x);
}