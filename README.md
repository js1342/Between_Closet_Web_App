# Between Closet: 스마트 옷장 공유 서비스

## 프로젝트 개요

- 📅 **기간**: 2020.11.18 ~ 2020.12.24
- 📋 **주제**: 나만의 옷장을 관리하고 사용자간 코디 생성, 공유 및 추천할 수 있는, 패션에 관심이 많은 연령대를 위한 패션 공유 플랫폼
- 👨‍👩‍👦‍👦 **팀 구성 및 역할**: Big Data(1명), AI(1명), IoT(2명), Cloud(2명)

➡️ **프로젝트 상세 설명 포트폴리오 보러가기**

[🥇🐵 작고 소듕한 1342 🐷 - Google Drive](https://drive.google.com/drive/u/0/folders/17L1uqUZwETT_U28cvFE4DyZvj33FvAQ2?ths=true)

## 수행 역할

1. **클라우드**: 클라우드 아키텍쳐 설계 및 구축
   - 스마트 미러 (IoT), 옷 종류 / 색 인식 모델 (AI), 트렌드 데이터 분석 (Big Data)를 연계할 수 있는 클라우드 아키텍쳐 구성
   - DB 구축 및 연동
   - AWS Amplify 및 S3 웹 정적 웹 호스팅을 활용한 웹사이트 배포
   - AWS Cognito를 활용한 유저 정보 관리
2. **프론트엔드**: Vue.js를 활용한 모바일 웹 앱 개발
   - Quasar framework를 활용한 웹 페이지 개발
   - 부트스트랩을 활용한 반응형 웹 페이지 개발
3. **백엔드**: AWS Lambda를 활용한 서버리스 백엔드 구축
   - AWS Lambda 및 API Gateway를 사용한 REST API 개발

## 기능 설명

![Untitled](https://user-images.githubusercontent.com/37285946/111023450-731a8280-841c-11eb-8bc4-0ae0801d7c21.png)

**📱스마트 미러**

![Untitled 1](https://user-images.githubusercontent.com/37285946/111023444-70b82880-841c-11eb-8cd8-b410d1585680.png)

- 메인 화면

  - 코디 참고를 위한 **날씨 조회 기능**
  - 의상 카테고리별 **분류 및 조회 기능**

![Untitled 2](https://user-images.githubusercontent.com/37285946/111023445-7150bf00-841c-11eb-932f-598a55bd4b38.png)

- 사진 등록 화면

  - 스마트 미러에 부착된 카메라를 통해 의상 촬영
  - 이미지 업로드시 내 옷장에 **옷 등록 기능**

- 코디 등록 화면

  - 등록된 옷들을 상의, 하의, 아우터로 구분하여 **코디 등록**

**📱웹 앱**

![Untitled 3](https://user-images.githubusercontent.com/37285946/111023446-71e95580-841c-11eb-8b0a-7a734e8f12d0.png)


- 홈
  - 사용자와 친구들의 등록된 옷들 조회 기능
  - 색상별/카테고리별로 필터링된 옷들 조회 기능
- 인기색상 추천
  - 좋아요 수를 기반으로 최근 인기있는 코디 조회 기능
  - 인기 있는 색상 조합 조회 기능

![Untitled 4](https://user-images.githubusercontent.com/37285946/111023447-71e95580-841c-11eb-8464-47368593534a.png)


- 사용자 검색
  - 사용자 ID를 통해 **친구 검색 기능**
  - 검색된 사용자 프로필 조회

![Untitled 5](https://user-images.githubusercontent.com/37285946/111023448-7281ec00-841c-11eb-8974-17bd77753aac.png)

- 코디 주고 받기
  - 친구 옷장에서 등록된 옷들로 **코디를 만들어 친구에게 전송 기능**
  - 전송된 코디는 친구의 옷장에 등록됨

## 수행 도구

💻 **개발 언어**: Python, Javascript, HTML/CSS

⚒️ **사용 프레임워크 / SDK**: Vue.js, AWS SDK for Javascript, boto3

☁️ **클라우드 서비스 (AWS)**: Lambda, API Gateway, EC2, S3,  Amplify, RDS, DynamoDB, Cognito

🤲 **협업 / 프로젝트 관리 툴**: Github, Notion, Figma, Google Drive

## 프로젝트 설계 / 기획 (아키텍쳐 / REST API)

**클라우드 아키텍쳐 (Cloud Architecture)**

AI의 의상 분류 모델, 빅데이터의 데이터 분석, IoT의 스마트 미러 기능을 하나의 웹서비스로 연동하기 위해 제일 처음 클라우드 아키텍쳐를 작성해 서비스 전체의 흐름을 설계


![Untitled 6](https://user-images.githubusercontent.com/37285946/111023449-731a8280-841c-11eb-8bc7-0aede76b7e55.png)

**데이터 흐름도 (Data Flow Diagram)**

각 기능간 통신과 서비스 구축을 위해 필요한 데이터를 파악하기 위해 데이터 흐름도 작성

![DFD(___)_(1)](https://user-images.githubusercontent.com/37285946/111023451-73b31900-841c-11eb-9d8c-a00f226bc365.png)

**API 명세서 (링크: 전체 명세서 보러가기)**

REST API Method, 경로, 설명등을 기술해 놓은 API 명세서 작성

![Screen_Shot_2021-03-13_at_3 44 43_PM_(1)](https://user-images.githubusercontent.com/37285946/111023443-6eee6500-841c-11eb-971a-6d160cbce1b2.jpg)

## 배운점 / 느낀점

1. **시행착오를 통해 배운 클라우드 아키텍쳐 설계**: 이전에 AWS를 학습했을때는 주로 간단한 웹서비스를 배포하는 것 위주로 배웠었는데 AI / IoT / Big Data 등등 훨씬 복잡한 레벨의 서비스를 구성하는데 어려움이 있었음

   AWS Greengrass, Amplify, Cognito등 이전에 사용해보지 못한 서비스들의 활용법에 대해 리서치하고, 멘토님들의 조언을 통해 계속해서 아키텍쳐를 수정해 나갔고, 실제 서비스를 모델링한 최종 아키텍쳐를 완성할 수 있었음

**2. 서버리스 아키텍쳐를 사용하면서 느낀 장단점**

- AWS를 통해서 서버리스 API를 구축하는 과정을 이해하고 나니 생각보다 구축하기 간편해서 프로젝트 초반에는 사용하는데 큰 어려움이 없었음
- 시간이 지나면서 프로젝트가 더욱 복잡해 지고, 필요한 API가 많아 지면서 function 단위로 구성되어 있는 람다 함수들을 전부 유지보수하는데 많은 어려움 있었음
- 이런 장단점을 몸소 느껴본뒤로 프로젝트 초반에 상세한 API 설계가 얼마나 중요한지 느끼는 계기가 되었음

**3. 새로운 프레임워크를 배우고 사용해 본 경험**

- 이 프로젝를 통해 Vue.js 기반의 Quasar 라이브러리를 처음 접해보았는데 단기간 내에 프레임워크를 습득하고 완성도 있는 결과물을 도출하는 경험을 하면서 언어 습득에 대한 자신감도 생기고 프레임워크의 편리함을 몸소 체험한 경험이었음

**4. 소통이 중요성**

- 각자 다른 분야의 팀원들과 협업한 만큼 팀원간의 소통이 중요하다는 것을 느꼈고, 소통이 원활하려면 내가 갖고 있는 지식의 원리와 흐름을 잘 알고 있어야 상대방에게 잘 전달할 수 있음을 깨달음
