# Web Crawler 프로젝트

- 프로젝트 이름 : WebCrawler
- 사용 언어 : TypeScript

​    

## 프로젝트 개요

> Crawler 라이브러리를 제작 한다.

  

- 라이브러리
  - Crawler : Web Page를 가져 온다.
    - 라이브러리 : axios, puppeteer / Selenium, Playwright
    - 인증 처리

  - Scraper : Web Page에서 원하는 데이터를 JSON 형태로 가져 온다. 
    - 라이브러리 : cheerio
  
- Saver : 데이터를 다양한 형태로 저장 한다. (여기서는 Excel)
    - 라이브러리 : excel4node (Excel에 저장)
    - 라이브러리 : exceljs(Excel 읽기), xlsx (Excel에 저장), xlsx-js-style
    
- Main 프로그램
  - Node 라이브러리 : worker_threads
  - JSON으로 설정 관리
  
- Test 자동화
  
  - 라이브러리 : vitest
  
- 검증용 Web Page
  - https://openapi.ebestsec.co.kr/apiservice 페이지에서 API 가이드
  - 로그인 후 특정 데이터 가져오기
    - http://3.35.138.16:8080/main.jsp : qwer / 일사
  
- Code Convention

    - 라이브러리 : ESLint, Pretter

- 버전 관리 : Git, GitHub

- 산출물
  - Markdown 사용

  

## 작업 환경 설정

| Software |      | Version | Description          |
| :------: | :--: | :-----: | -------------------- |
|   VSC    |      |         | Visual Studio Code   |
|   git    |      | 2.19.0  |                      |
|   nvm    |      |         | Node Version Manager |
|          | node | 18.16.0 |                      |
|          | npm  |  9.5.1  | Node Package Manager |

  

### GitHub 연동

- GitHub에 로그인한 후 다음 작업을 진행 한다.
  - WebCrawler repositoty를 생성 한다.
    - Repository : https://github.com/pnuskgh/WebCrawler
  - Repository의 "Settings > Access > Collaborators" 메뉴에서 협업할 사람을 초대 한다.
  - 사용자의 "Settings > Access > SSH and GPG keys" 메뉴에서 SSH key를 등록 한다.
    - 아래 ssh-keygen 명령으로 생성된 id_rsa.pub 파일의 내용을 등록 한다.

```powershell
#--- Git 환경 설정
git  --version
git  config  --global  user.name  "Oneho"
git  config  --global  user.email  "wonhokim2015@gmail.com"
git  config  --list

#--- SSH 키 생성
#---    .ssh/id_rsa : 비밀키
#---    .ssh/id_rsa.pub : 공개키
cd  c:/users/user
mkdir  .ssh
ssh-keygen  -t  rsa
```

  

### 개발 환경 구성

```powershell
#--- 최상위 작업 폴더 생성
cd  c:/
mkdir  work
cd  work

#--- Node 설치
nvm  version
nvm  list  available
nvm  install  18.16.0
nvm  use  18.16.0
nvm  list

node  --version
npm  --version

#--- Project 작업 폴더 생성
#---     work/WebCrawler/ 폴더가 생성됨
cd  c:/work
git  clone  git@github.com:pnuskgh/WebCrawler.git
cd  WebCrawler
npm  install
# npm  install  -f

#---     한번만 실행할 작업
#---         Global 환경에 모듈을 설치 한다.
npm  install  -g  ts-node
```

  

## 일정 관리

- 목표 : 일주일에 10시간 이상 작업 한다.

|   시작일   |  월  |  화  |  수  |  목  |  금  |  토  |  일  |
| :--------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 2024-04-29 |  -   |  -   |  2   |      |      |      |      |
| 2024-05-06 |      |      |      |      |      |      |      |
| 2024-05-13 |      |      |      |      |      |      |      |
| 2024-05-20 |      |      |      |      |      |      |      |
| 2024-05-27 |      |      |      |      |      |      |      |
| 2024-06-03 |      |      |      |      |      |      |      |
| 2024-06-10 |      |      |      |      |      |      |      |
| 2024-06-17 |      |      |      |      |      |      |      |
| 2024-06-24 |      |      |      |      |      |      |      |

  

## 작업 목록

- To-Do
  - Desktop에 개발 환경 구성 by wonhokim2015
  - study_20240501 실습
- Study : [TypeScript 핸드북](https://typescript-kr.github.io/pages/basic-types.html)
  - 제어문 학습
  - 기본 문법 학습
  - 입출력 학습
- Project
  - Crawler 제작
    - Web Page 가져 오기
    - 인증 후 Web Page 가져 오기
      - http://3.35.138.16:8080/main.jsp : qwer / 일사
  - Scraper 제작
  - Saver 제작
    - Excel로 저장
  - Main 프로그램 제작
    - https://openapi.ebestsec.co.kr/apiservice API 가이드를 Excel로 저장



## 완료한 작업

  

- 개발 환경 구성
  - GitHub에 WebCrawler Repository 생성과 환경 구성
    - 인증 등 환경 구성
  - VSC (Visual Studio Code) 설치와 환경 구성
    - git 관련 extensions 설치
  - git 설치와 환경 구성
  - nvm (Node Version Manager) 설치와 환경 구성
    - node 설치
  - WebCrawler 작업 폴더 생성과 환경 구성
    - TypeScript 사용 환경 구성
    - 테스트 환경 구성 (vitest 사용)
    - build 환경 구성
    - study 환경 구성
- Study: TypeScritp의 상수와 변수

  