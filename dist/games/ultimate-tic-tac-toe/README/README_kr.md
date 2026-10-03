# 궁극의 틱택토

[English](README.md) | [中文](README_zh.md) | [日本語](README_jp.md) | [Русский](README_ru.md) | [Español](README_es.md) | [Français](README_fr.md) | [Deutsch](README_de.md)

🌐 현대적이고 다국어 지원, 다양한 기능을 갖춘 웹 기반 틱택토 게임 🌐

<div align="center">
  <img width="128px" src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/logo/UT.png" alt="궁극의 틱택토 로고">
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/releases">
    <img alt="버전" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/LICENSE">
    <img alt="라이선스: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="https://html.spec.whatwg.org/">
    <img alt="사용 기술: HTML5" src="https://img.shields.io/badge/Built%20with-HTML5-E34F26?logo=html5&logoColor=white">
  </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html">
    <img alt="스타일링: CSS3" src="https://img.shields.io/badge/Styled%20with-CSS3-1572B6?logo=css3&logoColor=white">
  </a>
  <a href="https://javascript.info/">
    <img alt="구동 기술: JavaScript" src="https://img.shields.io/badge/Powered%20by-JavaScript-F7DF1E?logo=javascript&logoColor=black">
  </a>
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/stargazers">
    <img alt="GitHub 스타" src="https://img.shields.io/github/stars/VoxDroid/Ultimate-Tic-Tac-Toe?color=gold">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/network/members">
    <img alt="GitHub 포크" src="https://img.shields.io/github/forks/VoxDroid/Ultimate-Tic-Tac-Toe?color=silver">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues">
    <img alt="GitHub 이슈" src="https://img.shields.io/github/issues/VoxDroid/Ultimate-Tic-Tac-Toe?color=orange">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/commits/main">
    <img alt="GitHub 커밋" src="https://img.shields.io/github/commit-activity/m/VoxDroid/Ultimate-Tic-Tac-Toe">
  </a>
</div>

<div align="center">
  <a href="https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/" target="_blank">
    <img src="https://img.shields.io/badge/지금%20플레이-궁극의%20틱택토-brightgreen?style=for-the-badge" alt="궁극의 틱택토 플레이">
  </a>
</div>

## 목차

- [소개](#소개)
- [특징](#특징)
- [시스템 요구 사항](#시스템-요구-사항)
- [설치](#설치)
- [시작하기](#시작하기)
- [사용 방법](#사용-방법)
- [데모](#데모)
- [기여](#기여)
- [보안](#보안)
- [행동 강령](#행동-강령)
- [지원](#지원)
- [라이선스](#라이선스)
- [감사의 말](#감사의-말)

## 소개

**궁극의 틱택토**는 클래식 틱택토 게임의 오픈소스 웹 기반 구현으로, 현대적인 기능과 세련된 사용자 경험을 더했습니다. HTML5, CSS3, JavaScript로 제작되었으며, 다국어 지원, 사용자 정의 가능한 테마, AI 상대, 그리고 타이머, 점수 추적, 되돌리기 기능과 같은 게임 플레이 개선 사항을 제공합니다. 모든 연령대의 플레이어를 위해 설계되었으며, 어떤 기기에서든 재미있고 접근하기 쉬운 틱택토 게임을 즐길 수 있는 방법을 제공합니다.

GitHub Pages에서 호스팅되며 설치 없이 온라인으로 이용 가능하지만, 로컬에서도 실행할 수 있습니다. 오픈소스 프로젝트로서 기능 개선, 버그 수정, 또는 접근성 향상을 위한 기여를 환영합니다.

> **참고**: 이 프로젝트는 활발히 유지 관리되고 있습니다. AI 전략이나 애니메이션 성능과 같은 일부 기능에는 제한이 있을 수 있습니다. 여러분의 피드백을 기다립니다!

## 특징

- **클래식 틱택토 게임 플레이** : 3x3 그리드에서 X와 O 기호를 사용하여 가로, 세로, 대각선으로 3개를 일렬로 만드는 것이 목표입니다.
- **플레이 모드** :
  - 인간 대 인간 (동일 기기에서 로컬 플레이).
  - 인간 대 AI (기본적인 랜덤 이동 AI 상대).
- **다국어 지원** : 8개 언어로 제공됩니다:
  - 영어, 중국어 (中文), 일본어 (日本語), 한국어 (한국어), 러시아어 (Русский), 스페인어 (Español), 프랑스어 (Français), 독일어 (Deutsch).
- **사용자 정의 가능한 UI** :
  - **색 구성표** : 기본, 다크, 라이트, 컬러풀 중 선택.
  - **글꼴** : Poppins, Roboto, Open Sans 중 선택.
- **게임 기능** :
  - **타이머** : 게임 시간을 추적하며 시작, 중지, 리셋 가능.
  - **점수 추적** : 플레이어 X, 플레이어 O, 무승부의 승리 횟수 표시.
  - **되돌리기** : 활성 게임 중 마지막 이동을 되돌림.
  - **플레이어 이름** : 플레이어 X와 플레이어 O의 이름 사용자 정의.
  - **승리 축하** : 승리 시 컨페티 애니메이션.
- **설정** :
  - 설정 모달을 통해 언어, 색 구성표, 글꼴 변경.
  - 로컬 스토리지에 설정을 저장하여 세션 간 유지.
- **반응형 디자인** : 데스크톱, 태블릿, 모바일 기기에 최적화.
- **시각 효과** :
  - 로딩 효과와 버블 배경이 있는 애니메이션 랜딩 페이지.
  - 승리 셀을 강조하여 승리를 명확히 표시.
- **접근성** : 번역을 위한 `data-i18n` 속성과 기본 키보드 지원 포함.
- **광고 없음** : 방해받지 않는 게임 경험.

## 시스템 요구 사항

궁극의 틱택토를 실행하려면 다음이 필요합니다:

- **웹 브라우저** : JavaScript가 활성화된 현대적인 브라우저 (예: Chrome, Firefox, Edge, Safari).
- **운영 체제** : 호환 브라우저가 있는 모든 OS (Windows, macOS, Linux, iOS, Android).
- **디스크 공간** : 최소 (~5MB, 에셋 포함).
- **인터넷 연결** : 초기 에셋 로드(예: Google Fonts)에 필요, 로컬 호스팅 시 제외.
- **종속성** : 없음 (모든 에셋은 CDN 또는 로컬 파일을 통해 로드됨).

## 설치

궁극의 틱택토를 로컬에 설정하려면 다음 단계를 따르세요:

1. **저장소 클론** :
   ```bash
   git clone https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe.git
   ```

2. **프로젝트 디렉토리로 이동** :
   ```bash
   cd Ultimate-Tic-Tac-Toe
   ```

3. **애플리케이션 열기** :
   - `index.html`을 더블 클릭하여 기본 웹 브라우저에서 엽니다.
   - 또는 로컬 서버를 사용하여 파일을 제공하는 것이 좋습니다 (에셋 로드를 위해 추천):
     ```bash
     python -m http.server 8000
     ```
     이후 브라우저에서 `http://localhost:8000`에 접속하세요.

4. **기능 확인** :
   - 랜딩 페이지가 로고, 제목, "게임 시작" 버튼과 함께 로드되는지 확인.
   - "게임 시작"을 클릭하여 게임 인터페이스로 전환하고 이동 테스트 (예: 셀에 X 배치).
   - 설정 모달, 언어 선택기, 게임 컨트롤 (예: 타이머, 되돌리기)이 작동하는지 확인.

> **참고**: CDN을 통해 로드되는 에셋(예: Google Fonts)이 접근 가능한지 확인하세요. 오프라인 사용을 위해서는 글꼴을 다운로드하여 로컬로 호스팅하는 것을 고려하세요.

## 시작하기

궁극의 틱택토를 플레이하려면:

1. **게임 접속** :
   - 온라인 플레이: [voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/).
   - 또는 [설치](#설치)에서 설명한 대로 `index.html`을 로컬로 엽니다.

2. **랜딩 페이지 탐색** :
   - 드롭다운 메뉴에서 언어 선택 (기본값: 한국어).
   - "게임 시작"을 클릭하여 로딩 애니메이션과 함께 게임 인터페이스로 전환.

3. **인터페이스 탐색** :
   - **게임 보드** : X 또는 O 기호를 배치할 3x3 그리드.
   - **게임 정보 패널** : 플레이어 이름 입력, 타이머, 점수 표시, 컨트롤 (되돌리기, 새 게임, AI 이동, 점수 리셋) 포함.
   - **설정** : 설정 버튼을 통해 언어, 색 구성표, 글꼴 조정 가능.
   - **상태 표시줄** : 현재 플레이어 턴 또는 게임 결과 표시.

4. **게임 시작** :
   - "게임 시작"을 클릭하여 보드를 초기화.
   - 셀을 클릭하여 기호 배치 (X가 먼저 시작).
   - "AI 이동" 버튼을 사용하여 AI가 상대방으로 플레이하도록 설정.

5. **설정 사용자 정의** :
   - 설정 모달을 열어 색 구성표, 글꼴, 언어 변경.
   - 입력 필드에 플레이어 이름 입력.
   - 설정은 로컬 스토리지에 자동 저장됨.

## 사용 방법

### 게임 플레이
- **인간 대 인간** :
  - 플레이어가 빈 셀에 X 또는 O를 번갈아 배치 (X가 먼저 시작).
  - 셀을 클릭하여 이동.
  - 가로, 세로, 대각선으로 3개 기호를 일렬로 만드는 것이 목표.
- **인간 대 AI** :
  - X 또는 O로 플레이하고 "AI 이동" 버튼을 클릭하여 AI가 랜덤 이동.
  - AI는 빈 셀을 무작위로 선택.
- **컨트롤** :
  - **새 게임** : 보드와 타이머를 리셋.
  - **되돌리기** : 마지막 이동을 취소 (게임이 활성 상태일 때).
  - **AI 이동** : AI가 상대방으로 이동.
  - **타이머 시작/중지/리셋** : 게임 타이머 관리.
  - **점수 리셋** : 승리/무승부 카운터 초기화.

### 사용자 정의
- **언어** : 랜딩 페이지 또는 게임 인터페이스의 드롭다운 메뉴에서 8개 언어 선택.
- **색 구성표** : 설정 모달에서 기본, 다크, 라이트, 컬러풀 선택.
- **글꼴** : Poppins, Roboto, Open Sans 간 전환.
- **플레이어 이름** : 플레이어 X와 플레이어 O의 사용자 정의 이름 입력.

### 게임 기능
- **타이머** : MM:SS 형식으로 경과 시간 표시, 시작, 중지, 리셋 가능.
- **점수 추적** : X, O, 무승부의 승리 횟수를 게임 정보 패널에 표시.
- **되돌리기** : 마지막 이동을 취소하고 게임 상태 유지.
- **승리 축하** : 플레이어가 승리하면 컨페티 애니메이션 발동.
- **알림** : 선택한 언어로 턴 표시, 승리 메시지, 무승부/게임 종료 경고 표시.

## 데모

<div align="center">
  <img src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/img/preview.png" alt="궁극의 틱택토 게임 플레이" width="800">
</div>

[voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/)에서 궁극의 틱택토를 라이브로 체험해보세요.

## 기여

궁극의 틱택토에 대한 기여를 환영합니다! 참여하려면:

- [기여 가이드라인](../CONTRIBUTING.md)을 확인하여 이슈 제출, 기능 요청, 풀 리퀘스트에 대한 세부 사항 확인.
- 저장소를 포크하고 변경 사항을 적용한 후 풀 리퀘스트 제출.
- [행동 강령](../CODE_OF_CONDUCT.md)을 준수하여 존중받는 커뮤니티를 유지.

기여 예시:
- 더 스마트한 알고리즘(예: 미니맥스)으로 AI 개선.
- 새로운 색 구성표 또는 글꼴 추가.
- 접근성 향상(예: ARIA 속성, 키보드 탐색).
- 궁극의 틱택토 규칙(9x9 그리드 및 서브 보드) 구현.

## 보안

궁극의 틱택토는 보안을 우선순위로 둡니다. 취약점을 발견하면:

- [보안 정책](../SECURITY.md)에 따라 비공개로 보고.
- 문제가 해결될 때까지 공개적으로 공개하지 마세요.

## 행동 강령

모든 기여자와 사용자는 환영받고 포용적인 환경을 유지하기 위해 [행동 강령](../CODE_OF_CONDUCT.md)을 준수해야 합니다.

## 지원

궁극의 틱택토에 대한 도움이 필요하신가요? [지원 페이지](../SUPPORT.md)에서 다음 리소스를 확인하세요:

- 버그 보고서 또는 기능 요청 제출.
- 커뮤니티 토론 및 연락처 정보.
- 일반적인 문제(예: AI 동작, 타이머 문제)에 대한 FAQ.

## 라이선스

궁극의 틱택토는 [MIT 라이선스](../LICENSE)에 따라 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](../LICENSE) 파일을 참조하세요.

## 감사의 말

- **Google Fonts** : Poppins, Roboto, Open Sans 글꼴 제공.
- **VoxDroid** : 프로젝트 생성 및 유지 관리.
- **기여자** : 문제를 보고하고 기능을 제안하며 코드를 기여한 모든 분께 감사드립니다.
- **틱택토 커뮤니티** : 리소스와 아이디어로 이 프로젝트에 영감을 준.

---

<div align="center">
  <p><strong><a href="https://github.com/VoxDroid">VoxDroid</a>에 의해 개발됨</strong></p>
  <p>궁극의 틱택토를 즐기고 계신가요? <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe">GitHub</a>에서 프로젝트에 스타를 주세요!</p>
</div>