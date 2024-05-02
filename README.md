# WebCrawler

- GitHub 주소: https://github.com/pnuskgh/WebCrawler


    

## 주요 명령어

```bash
#--- 실행 명령어
npm  run  start:study                   #--- Study 프로그램 실행
npm  run  test                          #--- Test 자동화
npm  run  start                         #--- WebCrawler 실행
npm  run  build                         #--- WebCrawler 배포 준비

#--- PC에서 study branch 최초 생성후 배포
git  checkout  -b  study
git  push  --set-upstream  origin  study

#--- 서버에 있는 study branch 가져오기
git  fetch  origin  study
git  checkout  study

#--- study에서 개발한 내용을 develop에 반영
#---     Client의 현재 branch study
#---     Excel 파일 등이 열려 있으면 먼저 닫은 후 작업할 것
git  checkout  develop
git  merge     study                    #--- study 반영
git  push                               #--- 서버에 반영
git  checkout  study
git  status

#--- 최신 버전 적용
git  pull
npm  install
```

​    

### Code Convention

- ESLint 사용
- Prettier 사용
- [TypeScript Naming Conventions](https://aykhanhuseyn.medium.com/typescript-naming-conventions-crafting-maintainable-code-7d872234fe17)
- [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide/)

  

### Git Convention

- 형상 관리를 위한 branch 전략
  - main : 제품으로 출시될 수 있는 브랜치
  - develop : 다음 출시 버전을 개발하는 브랜치
  - feature : 기능을 개발하는 브랜치
    - feature/기능명
  - refactor : 기능을 리팩터링하는 브랜치
    - refactor/기능명
  - release : 이번 출시 버전을 준비하는 브랜치
  - hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치
  - study : Study용 브랜치
- Merge Request > 동료 Review > Merge
- Commit message 규칙
  - [Type] commit message
  - type
    - feature : 새로운 기능 추가
    - fix : 버그 수정
    - docs : 문서 업데이트
    - style : 포매팅 등 style 수정
    - refactor : 코드의 리팩토링
    - test : 테스트코드 업데이트
    - env : 환경 구축
    - chore : 잡일
    - study : Study

  

## 참고 문헌

- [TypeScript 핸드북](https://typescript-kr.github.io/pages/basic-types.html)
- [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript)
- [TypeScript 홈페이지 (한글)](https://www.typescriptlang.org/ko)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [TypeScript Handbook (한글)](https://www.typescriptlang.org/ko/docs/handbook/intro.html)
  - [TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)

  