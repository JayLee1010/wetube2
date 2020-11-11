1. Install NodeJS >> 환경변수 고려
2. WeTube 폴더 생성 후 VSC에 띄우기
3. NPM init > json 폴더 있는 곳에서 npm 실행
4. Nodejs의 .ignore 추가
5. npm install @babel/node, preset-env, core
6. npm install nodemon -D>> 저장할때마다 npm start 자동으로
7. Middleware 추가해보기, next()로 퍼미션을 줘야 다음 단계로 넘어감 app.get("/", betweenHome, handlehome); 전체 페이지에 적용하려면 app.use(between) next를 안주면 해당 페이지로 못간다
8. 로거 모건 설치 app.use(morgan("dev")); dev옵션
9. 보안을 위한 middleware helmet 설치
