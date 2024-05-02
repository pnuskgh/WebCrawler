## TypeScript

  

### 주석

```typescript
/*
주석
*/

// 한줄 주석
```

  

### 상수와 변수 타입

|     이름     |    영문     |             상      세             |
| :----------: | :---------: | :--------------------------------: |
| 문자열, 문자 |   string    |          "~", '~', \`~\`           |
|     숫자     |   number    |      정수: 123, 실수: 123.45       |
|     논리     |   boolean   |            true, false             |
|     배열     | Array<타입> |         [ 값0, 값1, 값2 ]          |
|     객체     |   object    |     { 이름1: 값1, 이름2: 값2 }     |
|              |    void     | 결과값을 반환하지 않는 함수의 타입 |
|              |    null     |                                    |
|              |  undefined  |                                    |

  

```typescript
//--- 상수 선언. 일반적으로 상수명은 대문자 사용
const  상수명: 타입

//--- 변수 선언
let 변수명: 타입
var 변수명: 타입

//--- 배열 선언
let 변수명: string[]
let 변수명: Array<string>

//--- 배열에서 값 지정
배열[0], 배열[1], 배열[2]

//--- 객체에서 값 지정
객체.이름1
객체["이름1"]

//--- 변수 타입 확인용 함수
//---     string, number, boolean, object
//---     bigint, symbol, undefined, function
typeof 변수명
typeof(변수명)

//--- 타입 변환
정수 = parseInt(문자열)
실수 = parseFloat(문자열)
문자 = `${숫자변수}`
```

  

### 제어문

  

### 기본 문법

  

### 입출력

  

### 참고 문헌

- [TypeScript 핸드북](https://typescript-kr.github.io/pages/basic-types.html)
- [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript)
- [TypeScript 홈페이지 (한글)](https://www.typescriptlang.org/ko)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [TypeScript Handbook (한글)](https://www.typescriptlang.org/ko/docs/handbook/intro.html)
  - [TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)

  