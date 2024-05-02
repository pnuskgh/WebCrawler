# WebClawler

- GitHub 주소: https://github.com/pnuskgh/WebClawler

## 주요 명령어

```bash
#--- PC에서 develop branch 최초 생성
git  checkout  -b  develop
git  push  --set-upstream  origin  develop

#--- 서버에 있는 develop branch 가져오기
git  fetch  origin  develop
git  checkout  develop

#--- develop에서 개발한 내용을 master에 반영
#---     Client의 현재 branch develop
#---     Excel 파일 등이 열려 있으면 먼저 닫은 후 작업할 것
git  checkout  master
git  merge     develop                  #--- develop 반영
git  push                               #--- 서버에 반영
git  checkout  develop

#--- 최신 버전 적용
git  pull
npm  install
```

## 해야할 작업

- main 프로그램 작성
- Crawler 라이브러리 작성
- Scraper 라이브러리 작성
- WebSaver 라이브러리 작성
- 프로그램 검증
  - https://openapi.ebestsec.co.kr/apiservice 페이지에서 API 가이드
  - 로그인 후 특정 데이터 가져오기

## 완료한 작업

- 2024-05-02, pnuskgh, 테스트 환경 구성
- 2024-05-02, pnuskgh, TypeScript 개발 환경 구성
- 2024-05-01, pnuskgh, 공용 노트북에 개발 환경 설정
- 2024-05-01, pnuskgh, GitHub에 WebClawler repository 생성

## 참고 문헌

- [TypeScript 핸드북](https://typescript-kr.github.io/pages/basic-types.html)
- [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript)
- [TypeScript 홈페이지 (한글)](https://www.typescriptlang.org/ko)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [TypeScript Handbook (한글)](https://www.typescriptlang.org/ko/docs/handbook/intro.html)
  - [TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)
- 프로젝트 관련 정보 : manual/project.md 파일 참조
 