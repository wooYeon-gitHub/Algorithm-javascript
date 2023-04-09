// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 좌표 압축이란, 쉽게 말해 각 값을 크기 순위로 변경하는 것이다. 
// 배열 [2, 4, -10, 4, -9]를 생각해 보자.
// 이를 순위로 표현하려면(0부터 시작) [2, 3 ,0, 3, 1]로 이해할 수 있다.

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

//집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행

// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

answer = "";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);