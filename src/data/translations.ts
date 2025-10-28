import unfoldX2022_1 from "@/assets/exhibitions/unfold-x-2022-1.webp";
import unfoldX2022_2 from "@/assets/exhibitions/unfold-x-2022-2.webp";
import unfoldX2022_3 from "@/assets/exhibitions/unfold-x-2022-3.webp";

export const translations = {
  en: {
    title: "Classy Trash Monster",
    subtitle: "An Educational Game for Teaching Machine Learning to Non-major Students",
    conference: "CHI '22 Extended Abstracts, April 29-May 5, 2022, New Orleans, LA, USA",
    
    nav: {
      overview: "Overview",
      video: "Video",
      features: "Features",
      download: "Download",
      credits: "Credits",
      wallpapers: "Wallpapers",
      exhibition: "Exhibition",
      citation: "Citation",
      acknowledgments: "Acknowledgments",
    },

    video: {
      title: "Videos",
      description: "Watch gameplay videos and learn more about Classy Trash Monster.",
    },

    wallpapers: {
      title: "Phone Wallpapers",
      description: "Download exclusive CTM phone wallpapers designed by Joonhyung Bae.",
      artworkBy: "Artwork by",
      license: "Licensed under CC BY-NC-ND 4.0",
      blackAndWhite: "Black & White",
      monochrome: "Monochrome",
      color: "Color",
      download: "Download",
    },
    
    hero: {
      playNow: "Download Game",
      readPaper: "Read Paper",
      downloadPaper: "Download PDF",
      paperUrl: "https://drive.google.com/file/d/1qIxLvzgjNvwYG-1GYh5wQsjAB2kZ4Qva/view?usp=drive_link",
    },
    
    abstract: {
      title: "Abstract",
      content: "As machine learning (ML) became more relevant to our lives, ML education for college students without technical background arose important. However, not many educational games designed to suit challenges they experience exist. We introduce an educational game Classy Trash Monster (CTM), designed to better educate ML and data dependency to non-major students who learn ML for the first time. The player can easily learn to train a classification model and solve tasks by engaging in simple game activities designed according to an ML pipeline. Simple controls, positive rewards, and clear audiovisual feedback makes game easy to play even for novice players. The playtest result showed that players were able to learn basic ML concepts and how data can impact model results, and that the game made ML feel less difficult and more relevant. However, proper debriefing session seems crucial to prevent misinterpretations that may occur in the learning process.",
    },
    
    features: {
      title: "Game Features",
      items: [
        {
          title: "Easy to Play",
          description: "Players don't need extensive math or programming knowledge to understand the game. Simple controls and clear feedback make it accessible to everyone.",
        },
        {
          title: "Learn ML Concepts",
          description: "Experience the complete ML pipeline through engaging game mechanics: data collection, model training, and evaluation.",
        },
        {
          title: "Data Dependency",
          description: "Understand how the quality and balance of training data affects model performance through hands-on experience.",
        },
        {
          title: "Progressive Learning",
          description: "Four carefully designed levels guide players from basic concepts to complex ML challenges at their own pace.",
        },
      ],
    },
    
    download: {
      title: "Download",
      description: "Try Classy Trash Monster and experience machine learning education through play.",
      windows: "Download for Windows",
      mac: "Download for macOS",
      comingSoon: "Coming Soon",
      requestAccess: "Request Download Access",
      formTitle: "Download Request Form",
      formDescription: "Please fill out the form below to access the game download.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      institution: "Institution/Organization",
      institutionPlaceholder: "Your institution or organization",
      role: "Role/Position",
      rolePlaceholder: "e.g., Student, Researcher, Educator",
      purpose: "Purpose",
      purposePlaceholder: "Select purpose",
      purposeEducational: "Educational",
      purposeResearch: "Research",
      purposePersonal: "Personal Learning",
      purposeOther: "Other",
      purposeDetail: "Detailed Purpose",
      purposeDetailPlaceholder: "Please describe how you plan to use this game",
      fieldOfStudy: "Field of Study",
      fieldOfStudyPlaceholder: "e.g., Computer Science, Education",
      mlBackground: "Machine Learning Background",
      mlBackgroundPlaceholder: "Describe your ML experience",
      referralSource: "How did you hear about us?",
      referralSourcePlaceholder: "e.g., Conference, Website, Colleague",
      privacyConsent: "I agree to the collection and use of my personal information for download access purposes.",
      researchConsent: "I consent to the anonymous use of my usage data for research purposes.",
      submit: "Submit Request",
      submitting: "Submitting...",
      successTitle: "Request Submitted Successfully!",
      successDescription: "Thank you for your interest. You can now download the game.",
      downloadNow: "Download Now",
      errorTitle: "Submission Failed",
      errorDescription: "Please try again or contact us directly at jh.bae@kaist.ac.kr",
      privacyRequired: "Privacy consent is required",
      researchRequired: "Research consent is required",
    },
    
    credits: {
      title: "Credits",
      author: "Author",
      name: "Name",
      affiliation: "Affiliation",
      role: "Role",
      email: "Email",
      orcid: "ORCID",
      links: "Links",
      coFirstAuthor: "Co-first author",
      correspondingAuthor: "Corresponding author",
      roles: {
        joonhyung: "Game Design / Art Director / Video Production",
        karam: "Game Design / Playtesting",
        haram: "Game Design / Game Development",
        seolhee: "Game Design / UI Development",
        youngyim: "Advisor",
        juhan: "Advisor",
        eunjin: "Music Composer",
      },
    },
    
    citation: {
      title: "Citation",
      bibtex: "BibTeX",
      apa: "APA",
      mla: "MLA",
      chicago: "Chicago",
      ieee: "IEEE",
    },

    exhibition: {
      title: "Exhibition",
      exhibitions: [
        {
          title: "The 1st Seoul Convergence Art Festival \"Unfold X 2022\"",
          location: "SFactory, Seoul, Republic of Korea",
          date: "Nov. 7-19, 2022",
          images: [
            unfoldX2022_1,
            unfoldX2022_2,
            unfoldX2022_3,
          ],
        },
      ],
    },

    acknowledgments: {
      title: "Acknowledgments",
      content: "This game was developed as part of the GCT742 Innovative Game Design class at Korea Advanced Institute of Science and Technology. We sincerely thank our advisors, classmates, NCSoft Game Design Lab members (Dong Gyo Lee, Eun Dong Kim, Hyun Seok Yun), and playtesters for their valuable feedback and support. This research was supported by the Ministry of Culture, Sports and Tourism and Korea Creative Content Agency (Project Name: Research Talent Training Program for Emerging Technologies in Games, Project Number: R2020040211).",
    },
  },
  
  ko: {
    title: "클래시 트래시 몬스터",
    subtitle: "비전공 학생들을 위한 기계학습 교육 게임",
    conference: "CHI '22 Extended Abstracts, 2022년 4월 29일-5월 5일, 뉴올리언스, 미국",
    
    nav: {
      overview: "개요",
      video: "영상",
      features: "특징",
      download: "다운로드",
      credits: "크레딧",
      wallpapers: "배경화면",
      exhibition: "전시",
      citation: "인용",
      acknowledgments: "사사",
    },

    video: {
      title: "영상",
      description: "게임플레이 영상을 보고 클래시 트래시 몬스터에 대해 더 알아보세요.",
    },

    wallpapers: {
      title: "폰 배경화면",
      description: "배준형이 디자인한 CTM 폰 배경화면을 다운로드하세요.",
      artworkBy: "아트워크",
      license: "CC BY-NC-ND 4.0 라이센스",
      blackAndWhite: "흑백",
      monochrome: "모노크롬",
      color: "컬러",
      download: "다운로드",
    },
    
    hero: {
      playNow: "게임 다운로드",
      readPaper: "논문 읽기",
      downloadPaper: "PDF 다운로드",
      paperUrl: "https://drive.google.com/file/d/1qIxLvzgjNvwYG-1GYh5wQsjAB2kZ4Qva/view?usp=drive_link",
    },
    
    abstract: {
      title: "초록",
      content: "기계학습(ML)이 우리 삶과 더욱 밀접해짐에 따라, 기술적 배경이 없는 대학생들을 위한 ML 교육의 중요성이 대두되었습니다. 하지만 이들이 겪는 어려움에 맞춰 설계된 교육용 게임은 많지 않습니다. 우리는 처음 ML을 배우는 비전공 학생들에게 ML과 데이터 의존성을 더 잘 교육하기 위해 설계된 교육용 게임 클래시 트래시 몬스터(CTM)를 소개합니다. 플레이어는 ML 파이프라인에 따라 설계된 간단한 게임 활동에 참여하여 분류 모델을 훈련하고 작업을 해결하는 방법을 쉽게 배울 수 있습니다. 간단한 조작, 긍정적인 보상, 명확한 시청각 피드백은 초보 플레이어도 쉽게 게임을 플레이할 수 있게 합니다. 플레이테스트 결과, 플레이어들이 기본적인 ML 개념과 데이터가 모델 결과에 미치는 영향을 배울 수 있었으며, 게임을 통해 ML이 덜 어렵고 더 관련성 있게 느껴졌다는 것을 보여주었습니다. 다만, 학습 과정에서 발생할 수 있는 오해를 방지하기 위해서는 적절한 디브리핑 세션이 중요해 보입니다.",
    },
    
    features: {
      title: "게임 특징",
      items: [
        {
          title: "쉬운 플레이",
          description: "플레이어는 게임을 이해하기 위해 광범위한 수학이나 프로그래밍 지식이 필요하지 않습니다. 간단한 조작과 명확한 피드백으로 누구나 접근할 수 있습니다.",
        },
        {
          title: "ML 개념 학습",
          description: "흥미로운 게임 메카닉을 통해 완전한 ML 파이프라인을 경험하세요: 데이터 수집, 모델 훈련, 그리고 평가.",
        },
        {
          title: "데이터 의존성",
          description: "실습을 통해 훈련 데이터의 품질과 균형이 모델 성능에 어떻게 영향을 미치는지 이해합니다.",
        },
        {
          title: "점진적 학습",
          description: "신중하게 설계된 4개의 레벨이 플레이어를 기본 개념에서 복잡한 ML 과제까지 자신의 속도로 안내합니다.",
        },
      ],
    },
    
    download: {
      title: "다운로드",
      description: "클래시 트래시 몬스터를 플레이하며 게임을 통한 기계학습 교육을 경험해보세요.",
      windows: "Windows용 다운로드",
      mac: "macOS용 다운로드",
      comingSoon: "곧 출시",
      requestAccess: "다운로드 권한 요청",
      formTitle: "다운로드 요청 양식",
      formDescription: "게임 다운로드를 위해 아래 양식을 작성해주세요.",
      name: "이름",
      namePlaceholder: "성함을 입력하세요",
      email: "이메일",
      emailPlaceholder: "your.email@example.com",
      institution: "소속 기관",
      institutionPlaceholder: "소속 기관 또는 조직을 입력하세요",
      role: "직책/역할",
      rolePlaceholder: "예: 학생, 연구원, 교육자",
      purpose: "사용 목적",
      purposePlaceholder: "목적을 선택하세요",
      purposeEducational: "교육",
      purposeResearch: "연구",
      purposePersonal: "개인 학습",
      purposeOther: "기타",
      purposeDetail: "상세 목적",
      purposeDetailPlaceholder: "이 게임을 어떻게 사용할 계획인지 설명해주세요",
      fieldOfStudy: "연구 분야",
      fieldOfStudyPlaceholder: "예: 컴퓨터 과학, 교육학",
      mlBackground: "머신러닝 배경",
      mlBackgroundPlaceholder: "머신러닝 경험을 설명해주세요",
      referralSource: "어디서 알게 되셨나요?",
      referralSourcePlaceholder: "예: 학회, 웹사이트, 동료",
      privacyConsent: "다운로드 권한 제공 목적으로 개인정보 수집 및 이용에 동의합니다.",
      researchConsent: "연구 목적으로 익명화된 사용 데이터 활용에 동의합니다.",
      submit: "요청 제출",
      submitting: "제출 중...",
      successTitle: "요청이 성공적으로 제출되었습니다!",
      successDescription: "관심을 가져주셔서 감사합니다. 이제 게임을 다운로드할 수 있습니다.",
      downloadNow: "지금 다운로드",
      errorTitle: "제출 실패",
      errorDescription: "다시 시도하거나 jh.bae@kaist.ac.kr로 직접 연락주세요",
      privacyRequired: "개인정보 동의는 필수입니다",
      researchRequired: "연구 데이터 사용 동의는 필수입니다",
    },
    
    credits: {
      title: "크레딧",
      author: "저자",
      name: "이름",
      affiliation: "소속",
      role: "역할",
      email: "이메일",
      orcid: "ORCID",
      links: "링크",
      coFirstAuthor: "공동 1저자",
      correspondingAuthor: "교신저자",
      roles: {
        joonhyung: "게임 디자인 / 미술 감독 / 영상 제작",
        karam: "게임 디자인 / 플레이테스트",
        haram: "게임 디자인 / 게임 개발",
        seolhee: "게임 디자인 / UI 개발",
        youngyim: "지도교수",
        juhan: "지도교수",
        eunjin: "음악 작곡",
      },
    },
    
    citation: {
      title: "인용",
      bibtex: "BibTeX",
      apa: "APA",
      mla: "MLA",
      chicago: "Chicago",
      ieee: "IEEE",
    },

    exhibition: {
      title: "전시",
      exhibitions: [
        {
          title: "제 1회 서울융합예술페스티벌 Unfold X 2022",
          location: "에스팩토리, 서울, 대한민국",
          date: "2022년 11월 7일-19일",
          images: [
            unfoldX2022_1,
            unfoldX2022_2,
            unfoldX2022_3,
          ],
        },
      ],
    },

    acknowledgments: {
      title: "사사",
      content: "이 게임은 한국과학기술원의 GCT742 혁신적 게임 디자인 수업의 일환으로 개발되었습니다. 귀중한 피드백과 지원을 제공해주신 지도교수님, 동료 학생들, NCSoft Game Design Lab 구성원(이동교, 김은동, 윤현석), 그리고 플레이테스터 여러분께 진심으로 감사드립니다. 본 연구는 문화체육관광부와 한국콘텐츠진흥원의 지원을 받았습니다 (과제명: 게임 신기술 연구인력 양성 사업, 과제번호: R2020040211).",
    },
  },
};

export type Language = keyof typeof translations;
