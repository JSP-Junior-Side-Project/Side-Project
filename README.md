# SIDE-PROJECT

## Frontend Todos

### Pages

- [ ] Home
  - [ ] Project Rank (by dates)\*
  - [ ] Artist Rank
  - [ ] Navigation bar\*
- [ ] Login
  - [ ] Social Login Buttons
  - [ ] Navigation Bar\*
- [ ] Join
  - [ ] Social Login Buttons
  - [ ] Join Forms (3/3)
    - [ ] Phone Number Certification
    - [ ] Personal Information
    - [ ] Account Information
- [ ] Post
  - [ ] Post Forms (3/3)
    - [ ] Step 1 (title, category, description, price)
    - [ ] Step 2 (media)
    - [ ] Step 3 (files)
  - [ ] Navigation Bar\*
- [ ] Project List
  - [ ] Project Rank (by query)\*
  - [ ] Filter
  - [ ] Navigation Bar\*
- [ ] User Profile
  - [ ] Default Frame
  - [ ] Edit Popup
  - [ ] Project List
  - [ ] Sell History
  - [ ] Buy History
  - [ ] Withdrawl History
  - [ ] Navigation Bar\*
- [ ] Artist Profile
  - [ ] Default Frame
  - [ ] Project List
  - [ ] Navigation Bar\*
- [ ] Personal Security
  - [ ] Account Information
  - [ ] Account Delete
  - [ ] Navigation Bar\*
- [ ] Payment
  - [ ] Payment Way Popup
  - [ ] Navigation Bar\*

### Components

- [ ] Navigation Bar
  - [ ] Seach Bar
  - [ ] Drop Down
- [ ] Project Rank
  - [ ] Project Popup
    - [ ] Upvote Button
    - [ ] Media Carousel
    - [ ] Purchase & Download Buttons
    - [ ] Comments

### Styles

- [ ] styles.css
- [ ] fonts.css
- [ ] responsive.css

## RESTful API

작성자: 장재혁

#### auth 계정 생성

#### user 인증

1. **GET** /user _인증 토큰_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; id &nbsp; &nbsp; **int64** &nbsp; &nbsp; 유저 고유 번호  
     > }
   ```json
   // example
   {
     "id": 1
   }
   ```
   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; 유저 고유 번호  
     > &nbsp; nickname &nbsp; &nbsp; **string** 유저 닉네임  
     > }
   ```json
   // example
   {
     "id": 1,
     "nickname": "bbq12340"
   }
   ```

#### project 프로젝트

1. **GET** /project/information _프로젝트 리스트 조회_

   - 요청 메시지
     > schema: json  
     > {
     > &nbsp; demand_date &nbsp; &nbsp; **string** &nbsp;요청 시작 날짜  
     > &nbsp; demand_period &nbsp; **int** &nbsp; &nbsp; &nbsp; 요청 기간  
     > }

   ```json
   // example
   {
     "demand_date": "2021-03-05",
     "demand_period": 1
   }
   ```

   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; &nbsp; date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; 요청 시작 날짜  
     > &nbsp; &nbsp; project_list: [{
     > > &nbsp; &nbsp; &nbsp; project_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; &nbsp;프로젝트 고유번호
     > > &nbsp; &nbsp; &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; 제목
     > > &nbsp; &nbsp; &nbsp; category_id &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; 카테고리 번호
     > > &nbsp; &nbsp; &nbsp; desc &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; 설명 (요약/글자수: ??수)
     > > &nbsp; &nbsp; &nbsp; image_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; 썸내일 링크
     > > &nbsp; &nbsp; &nbsp; created_at &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp;업로드 날짜
     > > &nbsp; &nbsp; &nbsp; sell_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;판매수
     > > &nbsp; &nbsp; &nbsp; artist_nickname &nbsp; **string** &nbsp; &nbsp; &nbsp;아티스트 닉네임
     > > &nbsp; &nbsp; &nbsp; comment_count &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;댓글 갯수
     > > &nbsp; &nbsp; &nbsp; upvote_count &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 추천 수
     > > &nbsp; &nbsp; &nbsp; price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 가격
     > > &nbsp; &nbsp; &nbsp; beta &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **boolean** &nbsp; 베타 버젼 유무
     > > &nbsp; &nbsp; &nbsp; rank &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;순위
     > > &nbsp; &nbsp; &nbsp; }]  
     > &nbsp; &nbsp; total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; 총 개수  
     > &nbsp; &nbsp; period &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; 요청 기간  
     > &nbsp; &nbsp; rank_last_number &nbsp; **int**&nbsp; &nbsp; &nbsp;마지막 프로젝트 랭크  
     > }

   ```json
   // example
   {
     "date": "2021-03-06",
     "project_list": [
       {
         "id": 1,
         "title": "web_scrapper",
         "category_id": "002",
         "desc": "this is web scrapper",
         "image_link": "www.firebase.com/project-image/asdfadsfasdf",
         "created_at": "2021-01-18",
         "sell_cnt": 10,
         "artist_nickname": "bbq12340",
         "comment_count": 50,
         "upvote_count": 100,
         "price": 30000,
         "beta": true,
         "rank": 1
       },
       {},
       {}
     ],
     "total": 100,
     "period": 1,
     "rank_last_number": 11
   }
   ```

2. **GET** /project/information/detail/project _프로젝트 정보_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; 사용자 고유 번호  
     > &nbsp; project_id &nbsp; &nbsp; **int64** &nbsp; 프로젝트 고유 번호  
     > }
   ```json
   // example
   {
     "user_id": 1,
     "project_id": 1
   }
   ```
   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; artist_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; &nbsp;아티스트 고유 번호  
     > &nbsp; artist_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; 아티스트 닉네임  
     > &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 제목  
     > &nbsp; desc &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 설명  
     > &nbsp; video_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp;비디오 링크  
     > &nbsp; upvote_count &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;추천 수  
     > &nbsp; created_at &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 업로드 날짜  
     > &nbsp; rank &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; 순위  
     > &nbsp; beta_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 베타 버젼 링크  
     > &nbsp; upvote_status &nbsp; &nbsp; &nbsp; **boolean** 추천 클릭 참/거짓  
     > &nbsp; buy_status &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**boolean** 구매 참/거짓  
     > }
   ```json
   // example
   {
     "artist_id": 1,
     "artist_nickname": "bbq12340",
     "title": "web crawler",
     "desc": "this is the description of web crawler",
     "video_link": "",
     "upvote_count": 237,
     "created_at": "2021-01-27",
     "rank": 2,
     "beta_link": "",
     "upvote_status": true,
     "buy_status": true
   }
   ```
3. **GET** /project/information/detail/image _프로젝트 이미지_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; 유저 고유 번호  
     > &nbsp; project_id &nbsp; &nbsp; **int64** &nbsp; 프로젝트 고유 번호  
     > }
   ```json
   // example
   {
     "user_id": 1,
     "project_id": 1
   }
   ```
   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; image_links: [
     > > &nbsp; &nbsp; **string** &nbsp; &nbsp; 이미지 링크
     > > &nbsp; ]  
     > }
   ```json
   // example
   {
     "image_links": [
       "www.firebase.com/project/asdfadsfasdf/image/1",
       "www.firebase.com/project/asdfadsfasdf/image/2",
       "www.firebase.com/project/asdfadsfasdf/image/3"
     ]
   }
   ```
4. **GET** /project/information/detail/comment _프로젝트 댓글_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; 사용자 고유 번호  
     > &nbsp; project_id &nbsp; &nbsp; **int64** &nbsp; 프로젝트 고유 번호  
     > }
   ```json
   // example
   {
     "user_id": 1,
     "project_id": 1
   }
   ```
   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;댓글 고유 번호  
     > &nbsp; artist_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;작성자 고유 번호  
     > &nbsp; artist_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; 작성자 닉네임  
     > &nbsp; text &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 댓글 내용  
     > &nbsp; time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 작성 시간 (ISO 포맷 YYYY-MM-DDTHH:MM:SSZ)  
     > &nbsp; replies: [{
     > > &nbsp; &nbsp; id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;댓글 고유 번호
     > > &nbsp; &nbsp; artist_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;작성자 고유 번호
     > > &nbsp; &nbsp; artist_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; 작성자 닉네임
     > > &nbsp; &nbsp; text &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 댓글 내용
     > > &nbsp; &nbsp; time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 작성 시간 (ISO 포맷 YYYY-MM-DDTHH:MM:SSZ)
     > > &nbsp; }]  
     > }
   ```json
   {
     "comments": [
       {
         "id": 1,
         "artist_id": 11,
         "artist_nickname": "bbq12340",
         "text": "this looks good!",
         "time": "2015-03-25T12:00:00Z",
         "replies": [
           {
             "id": 2,
             "artist_id": 22,
             "user_nickname": "gubne_joa",
             "text": "I agree!",
             "time": "2015-03-25T12:00:00Z"
           },
           {
             "id": 3,
             "artist_id": 33,
             "user_nickname": "gubne_joa",
             "text": "I agree!",
             "time": "2015-03-25T12:00:00Z"
           }
         ]
       },
       {},
       {}
     ]
   }
   ```
5. **POST** /project/information/upload _프로젝트 업로드_
   - 요청 메시지
     > schema: multipart form  
     > POST /upload Http/1.1  
     > Content-type: multipart/form-data; boundary=abcde12345  
     > --abcde12345  
     > Content-disposition: form-data; name="project"  
     > Content-Type: application/json  
     > Content-Id: json
     > {  
     > &nbsp; user_id &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; 사용자 고유 번호
     > &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 제목  
     > &nbsp; category &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 카테고리 번호  
     > &nbsp; desc &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 설명  
     > &nbsp; price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 프로젝트 가격  
     > &nbsp; youtube &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp;프로젝트 유튜브 링크 (없으면 "")  
     > }  
     > --abcde12345  
     > Content-disposition: form-data; name="image1"  
     > Content-Type: image/png  
     > Content-Id: projectimage  
     > Content-filename: image1  
     > &nbsp; **file** &nbsp; 프로젝트 상세 이미지 1  
     > --abcde12345  
     > Content-disposition: form-data; name="video"  
     > Content-Type: video/mp4  
     > Content-Id: projectvideo  
     > Content-filename: video  
     > &nbsp; **file** &nbsp; 프로젝트 상세 영상  
     > --abcde12345  
     > Content-disposition: form-data: name="beta"  
     > Content-Id: beta  
     > Content-filename: beta  
     > &nbsp; **file** &nbsp; 프로젝트 베타 버젼  
     > --abcde12345  
     > Content-disposition: form-data; name="original"  
     > Content-Id: original  
     > Content-filename: original  
     > &nbsp; **file** &nbsp; 프로젝트 정식 버젼
   ```json
   // example: json
   // project 파트만
   {
     "user_id": 1,
     "title": "web crawler",
     "category": "001",
     "desc": "hello, this is my new project. hope you enjoy it!",
     "price": 7000,
     "youtube": "http://www.youtube.com/video/DL1F2IL3KDS"
   }
   ```
   - 응답 메시지
     > schema: text  
     > 200 OK
6. **PUT** /project/information/upload _프로젝트 수정_
   - 요청 메시지
     > 5 번과 동일  
     > `POST` -> `PUT` 으로 변경
   - 응답 메시지
     > schema: text  
     > 200 OK

#### artist 아티스트

1. **GET** /artist _이 달의 아티스트 리스트 조회_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; demand_date &nbsp; &nbsp; **string** &nbsp;요청 시작 날짜  
     > }
   ```json
   {
     "demand_date": "2021-03-05"
   }
   ```
   - 응답 메시지
     > schema: json  
     > artist_list: [{
     > > &nbsp; artist_id &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; 아티스트 고유 번호
     > > &nbsp; nickname &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 아티스트 닉네임
     > > &nbsp; introduction &nbsp; **string** &nbsp; &nbsp; 아티스트 소개글
     > > &nbsp; image_link &nbsp; &nbsp; **string** &nbsp; &nbsp; 아티스트 썸네일 링크
     > > &nbsp; rank &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;아티스트 순위
     > > }]
   ```json
   // example
   {
     "artist_list": [
       {
         "artist_id": 1,
         "nickname": "bbq12340",
         "introduction": "my name is jang",
         "image_link": "www.firebase.com/artust-image/akdsfjlkajsdfk",
         "rank": 1
       },
       {},
       {}
     ]
   }
   ```

#### profileuser 사용자 정보

1. **GET** /profileuser/index _사용자 정보 페이지_

   - 요청 메시지
     > // 요청 값 없음
   - 응답 메시지
     > schema: text  
     > 200 OK

2. **GET** /profileuser/frame _사용자 정보 페이지 디폴트 프레임_

   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp; **int64** &nbsp; &nbsp; 사용자 고유 번호  
     > }

   ```json
   {
     "user_id": 1
   }
   ```

   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; 사용자 고유 번호  
     > &nbsp; user_nickname &nbsp; &nbsp; &nbsp; &nbsp; **string** 사용자 닉네임  
     > &nbsp; user_introduction &nbsp; &nbsp; &nbsp;**string** 사용자 소개글  
     > &nbsp; created_at &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** 사용자 가입 날짜  
     > &nbsp; project_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; 업로드 프로젝트 수 총합  
     > &nbsp; sell_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; 프로젝트 판매 수 총합  
     > &nbsp; buy_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; 프로젝트 구매 수 총합  
     > &nbsp; withdraw_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; 출금 완료 수  
     > }

   ```json
   // example
   {
     "user_id": 1,
     "user_nickname": "bbq12340",
     "user_introduction": "my name is Jang",
     "created_at": "2021-02-18",
     "project_cnt": 19,
     "sell_cnt": 10,
     "buy_cnt": 8,
     "withdraw_cnt": 9
   }
   ```

3. **GET** /profileuser/project _사용자 프로젝트_

   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: json  
     > project_list: [{
     > > &nbsp; project_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; &nbsp; &nbsp;프로젝트 고유 번호
     > > &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; 프로젝트 제목
     > > &nbsp; desc &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; 프로젝트 설명
     > > &nbsp; image_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; 프로젝트 썸네일 링크
     > > &nbsp; created_at &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; 프로젝트 업로드 날짜
     > > &nbsp; sell_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 판매 수
     > > &nbsp; user_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp;&nbsp;사용자 닉네임
     > > &nbsp; comment_count &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 댓글 수
     > > &nbsp; upvote_count &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 추천 수
     > > &nbsp; price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 가격
     > > &nbsp; beta &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**boolean** &nbsp; 프로젝트 베타 버젼 유무
     > > }]

   ```json
   // example
   project_list: [
       {
           "project_id": 1,
           "title": "web_scrapper",
           "desc": "this is web scrapper",
           "image_link": "www.firebase.com/project-image/asdfadsfasdf",
           "created_at": "20210118",
           "sell_cnt": "10",
           "user_nickname": "bbq12340",
           "comment_count": "50",
           "upvote_count": "100",
           "price": "30000",
           "beta": "true"
       },
       {},
       {}
   ]
   ```

4. **GET** /profileuser/sell _사용자 판매 내역_

   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: json  
     > sell_list: [{
     > > &nbsp; sell_id &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; &nbsp;프로젝트 고유 번호
     > > &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 제목
     > > &nbsp; date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 판매 날짜
     > > &nbsp; buyer_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; 구매자 닉네임
     > > &nbsp; price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;판매 가격
     > > }]

   ```json
   // example
   "sell_list": [
           {
               "sell_id": 1,
               "title": "web_scrapper",
               "date": "2021-02-18",
               "buyer_nickname": "dukryung",
               "price": 30000
           },
           {},
           {}
   ]
   ```

5. **GET** /profileuser/buy _사용자 구매 내역_

   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: json  
     > buy_list: [{
     > > &nbsp; buy_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int64** &nbsp; &nbsp; &nbsp;프로젝트 고유 번호
     > > &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; 프로젝트 제목
     > > &nbsp; date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 구매 날짜
     > > &nbsp; seller_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; 구매자 닉네임
     > > &nbsp; price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;구매 가격
     > > }]

   ```json
   // example
   "buy_list": [
           {
               "buy_id": 1,
               "title": "web_scrapper": ,
               "date": "2021-02-18",
               "seller_nickname": "dukryung",
               "price": 30000
           },
           {},
           {}
   ]
   ```

6. **GET** /profileuser/withdraw _사용자 출금 내역_

   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: json  
     > withdraw_list: [{
     > > &nbsp; withdraw_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp;출금 고유 번호
     > > &nbsp; requested_date &nbsp; &nbsp; **string** &nbsp; &nbsp; 출금 요청 날짜
     > > &nbsp; complete_date &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 출금 완료 날짜
     > > &nbsp; amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 출금 금액
     > > }].

   ```json
   // example
   "withdraw_list": [
           {
               "withdraw_id": 1,
               "requested_date": "2021-02-18",
               "complete_date": "2021-02-19",
               "amount": 18000
           },
           {},
           {}
   ]
   ```

7. _사용자 출금 요청_

   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: text
     > 200 OK

8. **GET** /profileuser/modification _사용자 정보 수정 팝업_

   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 실명  
     > &nbsp; nickname &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 닉네임  
     > &nbsp; email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 이메일  
     > &nbsp; agree_email_marketing &nbsp; &nbsp; **boolean** &nbsp; &nbsp; 이메일 마케팅 수신 동의  
     > &nbsp; introduction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 소개글  
     > &nbsp; image_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 프로필 이미지 링크  
     > }

   ```json
   // example
   {
     "name": "장재혁",
     "nickname": "bbq12340",
     "email": "davidj171@gmail.com",
     "agree_email_marketing": true,
     "introduction": "my name is jang",
     "image_link": ""
   }
   ```

9. **PUT** /profileuser/modification _사용자 정보 수정_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;사용자 고유 번호  
     > &nbsp; name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 실명  
     > &nbsp; nickname &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 닉네임  
     > &nbsp; email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 이메일  
     > &nbsp; agree_email_marketing &nbsp; &nbsp; **boolean** &nbsp; &nbsp; 이메일 마케팅 수신 동의  
     > &nbsp; introduction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 소개글  
     > &nbsp; image_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 사용자 프로필 이미지 링크  
     > }
   ```json
   // example
   {
     "user_id": 1,
     "user_name": "장재혁",
     "user_nickname": "bbq1234",
     "user_email": "bbq1234@hotmail.com",
     "agree_email_marketing": true,
     "user_introduction": "my name is jang",
     "image_link": ""
   }
   ```
   - 응답 메시지
     > schema: text
     > 200 OK

#### profileartist 아티스트 정보

1. **GET** /profileartist/index _아티스트 정보 페이지_
   - 요청 메시지
     > // 요청 메시지 없음
   - 응답 메시지
     > schema: text  
     > 200 OK
2. **GET** /profileartist/frame _아티스트 정보_

   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; artist_id &nbsp; &nbsp; **int64** &nbsp; &nbsp; 아티스트 고유 번호  
     > }

   ```json
   // example
   {
     "artist_id": 1
   }
   ```

   - 응답 메시지
     > schema: json  
     > {  
     > &nbsp; artist_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; 아티스트 고유 번호  
     > &nbsp; artist_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; 아티스트 닉네임  
     > &nbsp; introduction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; 아티스트 소개글  
     > &nbsp; project_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;아티스트 프로젝트 업로드 총수  
     > &nbsp; sell_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;아티스트 프로젝트 총 판매수  
     > &nbsp; image_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp;아티스트 썸네일 링크  
     > }

   ```json
   // example
   {
     "artist_id": "1",
     "artist_nickname": "bbq12340",
     "introduction": "hello world",
     "project_cnt": "10",
     "sell_cnt": "31",
     "image_link": ""
   }
   ```

3. **GET** /profileartist/project _아티스트 프로젝트_
   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > schema: json  
     > project_list: [{
     > > &nbsp; project_id &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int64** &nbsp; &nbsp; &nbsp; &nbsp;프로젝트 고유 번호
     > > &nbsp; title &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; 프로젝트 제목
     > > &nbsp; desc &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; 프로젝트 설명
     > > &nbsp; image_link &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; 프로젝트 썸네일 링크
     > > &nbsp; created_at &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; 프로젝트 업로드 날짜
     > > &nbsp; sell_cnt &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 판매 수
     > > &nbsp; artist_nickname &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp;&nbsp;아티스트 닉네임
     > > &nbsp; comment_count &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 댓글 수
     > > &nbsp; upvote_count &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 추천 수
     > > &nbsp; price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **int** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;프로젝트 가격
     > > &nbsp; beta &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**boolean** &nbsp; 프로젝트 베타 버젼 유무
     > > }]
   ```json
   // example
   {
     "artist_id": 1,
     "title": "web_scrapper",
     "desc": "this is web scrapper",
     "image_link": "www.firebase.com/project-image/asdfadsfasdf",
     "created_at": "20210118",
     "sell_cnt": 10,
     "artist_nickname": "bbq12340",
     "comment_count": 50,
     "upvote_count": 100,
     "price": 30000,
     "beta": true
   }
   ```

#### personal 사용자 결제 정보

1. **GET** /personal/index _사용자 결제 정보 페이지_
   - 요청 메시지
     > // 요청 메시지 없음
   - 응답 메시지
     > schema: text  
     > 200 OK
2. **GET** /personal/information _사용자 결제 정보_
   - 요청 메시지
     > schema: json  
     > {  
     > &nbsp; user_id &nbsp; &nbsp; **int64** &nbsp; &nbsp; 사용자 고유 번호  
     > }
   ```json
   // example
   {
     "user_id": 1
   }
   ```
   - 응답 메시지
     > schema: json  
     > {  
     >  &nbsp; bank &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **string** &nbsp; &nbsp; &nbsp; &nbsp; 은행 고유 번호  
     >  &nbsp; account &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**string** &nbsp; &nbsp; &nbsp; &nbsp; 계좌 번호  
     >  &nbsp; agree_policy &nbsp; &nbsp; **boolean** &nbsp; &nbsp; 정책 동의 여부 // 이게 굳이 필요할까..?  
     > }
   ```json
   // example
   {
     "bank": "1",
     "account": "1234-123-123",
     "agree_policy": true
   }
   ```
3. **PUT** /personal/information _사용자 결제 정보 수정_
   - 요청 메시지
     > 2번과 동일
   - 응답 메시지
     > 2번과 동일
