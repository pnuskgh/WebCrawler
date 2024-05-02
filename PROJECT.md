## Web Crawler

- 프로젝트 이름 : WebCrawler
- 사용 언어 : TypeScript

- 프로젝트 개요
  - Crawler : Web Page를 가져 온다.
    - 라이브러리 : axios, puppeteer / Selenium, Playwright
    - 인증 처리 : 20만

  - Scraper : Web Page에서 원하는 데이터를 JSON 형태로 가져 온다. : 20만
    - 라이브러리 : cheerio

  - Saver : 데이터를 다양한 형태로 저장 한다. (여기서는 Excel)
    - 라이브러리 : exceljs(Excel 읽기), excel4node (Excel에 저장) / xlsx, xlsx-js-style

  - Test 자동화
    - 라이브러리 : vitest
    - Crawler 테스트 자동화 : 20만
    - Scraper 테스트 자동화 : 20만

  - 검증용 Web Page
    - https://openapi.ebestsec.co.kr/apiservice 페이지에서 API 가이드
    - 로그인 후 특정 데이터 가져오기

  - JSON으로 설정 관리
  - Node 라이브러리 : worker_threads
  - VSC 라이브러리 : ESLint, Pretter
  - 버전 관리 : Git, GitHub

  - 산출물
    - Markdown 사용

## 작업 환경 설정

- 설치 Software
  - vsc (Visual Studio Code) 설치
  - git 설치
  - nvm 설치
    - nvm에서 node 설치

- 설치 Softwar 버전
  - git 2.19.0
  - nvm 1.1.9
    - Node Version Manager
  - node 18.16.0   
    - npm 9.5.1
      - Node Package Manager


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
nvm  list
nvm  list  available
nvm  install  18.16.0
nvm  use  18.16.0
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

### 제어문

  

### 기본 문법

  

### 입출력