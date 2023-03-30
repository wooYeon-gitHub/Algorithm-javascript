// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

// 원소를 하나씩 확인
for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}

//집합에 포함된 원소의 개수 출력
console.log(mySet.size);