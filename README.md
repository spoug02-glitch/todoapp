# ✨ Todo App

HTML, CSS, JavaScript만을 사용하여 만든 모던하고 아름다운 할 일 관리 애플리케이션입니다.

https://spoug02-glitch.github.io/todoapp/

## 🎯 주요 기능

### 기본 기능
- ✅ **할 일 추가**: 텍스트 입력 후 Enter 또는 + 버튼 클릭
- ✅ **완료 체크**: 체크박스 클릭으로 완료/미완료 전환
- ✅ **삭제**: 항목에 마우스 오버 시 나타나는 × 버튼으로 삭제
- 💾 **자동 저장**: LocalStorage를 통한 데이터 영구 보존

### 고급 기능
- 📅 **날짜 표시**: 각 할 일의 생성 날짜 자동 표시
- 🎨 **우선순위**: 3단계 우선순위 설정 (낮음/보통/높음)
  - 초록색: 낮은 우선순위
  - 파란색: 보통 우선순위
  - 빨간색: 높은 우선순위
- 📊 **정렬 기능**: 다양한 정렬 옵션
  - 최신순 (기본값)
  - 오래된순
  - 이름순 (가-하)
  - 이름순 (하-가)
- 📈 **통계**: 전체/완료/남은 할 일 실시간 카운트

## 🚀 시작하기

### 설치 방법
1. 이 저장소를 클론하거나 파일들을 다운로드하세요
2. `index.html` 파일을 브라우저로 여세요

```bash
# 프로젝트 디렉토리로 이동
cd todoapp

# 브라우저에서 index.html 열기
# Windows: start index.html
# Mac: open index.html
# Linux: xdg-open index.html
```

### 사용 방법

#### 1. 할 일 추가하기
1. 상단 입력란에 할 일을 입력하세요
2. 우선순위를 선택하세요 (낮음/보통/높음)
3. Enter 키를 누르거나 **+** 버튼을 클릭하세요

#### 2. 할 일 완료 표시
- 할 일 왼쪽의 원형 체크박스를 클릭하세요
- 완료된 항목은 회색 취소선으로 표시됩니다

#### 3. 할 일 삭제
- 할 일에 마우스를 올리면 우측에 **×** 버튼이 나타납니다
- × 버튼을 클릭하여 삭제하세요

#### 4. 정렬하기
- 통계 아래의 정렬 드롭다운에서 원하는 정렬 방식을 선택하세요

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Variables를 활용한 테마 시스템
  - Flexbox/Grid 레이아웃
  - CSS 애니메이션 및 트랜지션
  - 반응형 디자인 (모바일 지원)
- **Vanilla JavaScript (ES6+)**:
  - LocalStorage API
  - DOM Manipulation
  - Event Handling
  - Array Methods (map, filter, sort)

## 📁 파일 구조

```
todoapp/
├── index.html      # 메인 HTML 구조
├── style.css       # 스타일시트 (디자인 시스템)
├── script.js       # JavaScript 로직
└── README.md       # 프로젝트 문서
```

## 🎨 디자인 특징

### 컬러 시스템
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)
- Danger: `#ef4444` (Red)

### UI/UX
- 모던한 그라데이션 배경
- 부드러운 애니메이션 효과
- 마이크로 인터랙션 (호버, 클릭 효과)
- 글라스모피즘 느낌의 카드 디자인
- Google Font (Inter) 적용

### 반응형
- 데스크톱 우선 디자인
- 모바일 (480px 이하) 최적화

## 💾 데이터 구조

각 할 일 항목은 다음과 같은 구조를 가집니다:

```javascript
{
  id: "고유ID",
  text: "할 일 내용",
  completed: false,
  priority: "medium",  // low, medium, high
  createdAt: 1707623456789
}
```

## 🌐 브라우저 호환성

- ✅ Chrome/Edge (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Opera (최신 버전)

> **참고**: LocalStorage와 ES6+ 기능을 사용하므로 모던 브라우저가 필요합니다.

## 📝 향후 개선 사항

- [ ] 다크 모드 지원
- [ ] 할 일 수정 기능
- [ ] 카테고리/태그 기능
- [ ] 마감일 설정
- [ ] 검색 기능
- [ ] 데이터 내보내기/가져오기 (JSON)
- [ ] 드래그 앤 드롭으로 순서 변경

## 📄 라이선스

이 프로젝트는 개인 및 상업적 용도로 자유롭게 사용할 수 있습니다.

## 👨‍💻 제작자

순수 HTML, CSS, JavaScript로 제작되었습니다.

---

**즐거운 할 일 관리 되세요! 🎉**

