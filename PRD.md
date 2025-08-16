# 25 Rules Snack Publishing 홈페이지 PRD
## Product Requirements Document v1.0

---

## 📋 **프로젝트 개요**

### **제품명**
25 Rules Snack Publishing 공식 홈페이지

### **프로젝트 목표**
- 실용과 성찰을 아우르는 듀얼 트랙 출판사의 브랜드 정체성 구현
- 한빛미디어 스타일의 깔끔하고 전문적인 도서 진열 시스템
- 킨들 최적화와 25개 룰 철학을 강조하는 차별화된 사용자 경험

### **타겟 사용자**
- **1차**: 바쁜 1인 창업자, 소상공인 (SNACK Series)
- **2차**: 삶의 의미를 탐구하는 성찰형 독자 (SOUL Series)
- **3차**: 전자책 애호가, 킨들 사용자

---

## 🎨 **브랜드 가이드라인**

### **핵심 브랜딩**
```
📚 25 Rules Snack Publishing
"실용과 성찰, 모두를 품는 출판사"
"25개의 룰로 완성하는 새로운 나"
```

### **색상 팔레트**
```css
/* SNACK Series - 에너지틱 & 실용적 */
--snack-primary: #FF6B6B;
--snack-secondary: #FF8500;
--snack-accent: #00B894;
--snack-gradient: linear-gradient(135deg, #FF6B6B 0%, #FF8500 100%);

/* SOUL Series - 명상적 & 깊이감 */
--soul-primary: #6C5CE7;
--soul-secondary: #3D5A80;
--soul-accent: #355C7D;
--soul-gradient: linear-gradient(135deg, #6C5CE7 0%, #3D5A80 100%);

/* 공통 색상 */
--text-primary: #2c3e50;
--text-secondary: #7f8c8d;
--background: #f8f9fa;
--white: #ffffff;
```

### **타이포그래피**
- **SNACK**: Sans-serif (Helvetica, Montserrat)
- **SOUL**: Serif (Georgia, Playfair Display)
- **본문**: 14-16px, line-height: 1.6

---

## 🏗️ **사이트 구조 및 페이지**

### **1. 헤더 (공통)**
```
로고 + 태그라인 | 네비게이션 | 검색 | 언어선택
├── 홈
├── 도서
│   ├── 전체 도서
│   ├── SNACK Series 🍿
│   └── SOUL Series 🌙
├── 시리즈 소개
├── 독자 지원
│   ├── 자료실
│   ├── 오탈자 신고
│   └── FAQ
└── 출판사 소개
```

### **2. 메인 페이지 구성**

#### **2.1 Hero Section**
- **레이아웃**: 전폭 배너
- **콘텐츠**: 
  - 메인 카피: "25개의 룰로 완성하는 새로운 나"
  - 서브 카피: 듀얼 트랙 시스템 소개
  - CTA 버튼: "도서 둘러보기"
- **배경**: 그라데이션 + 미니멀 일러스트

#### **2.2 듀얼 트랙 소개**
- **레이아웃**: 2컬럼 카드
- **SNACK Card**: 
  - 아이콘: 🍿
  - 제목: "SNACK Series - Think Smart, Not Hard"
  - 특징: 10-15분, Smart vs Dumb, 즉시 실행
- **SOUL Card**:
  - 아이콘: 🌙
  - 제목: "SOUL Series - Deep Thinking, Slow Reading"
  - 특징: 30-60분, 명상적 성찰, 내면 성장

#### **2.3 추천 도서 (한빛미디어 스타일)**
- **레이아웃**: 4컬럼 그리드 (반응형)
- **도서 카드 구성**:
  ```
  [표지 이미지]
  시리즈 배지 (SNACK/SOUL)
  도서 제목
  서브타이틀
  평점 ⭐ + 리뷰 수
  가격
  ```

#### **2.4 신간 안내**
- **레이아웃**: 슬라이드 배너 또는 2컬럼
- **출간 예정일** 강조

#### **2.5 통계 & 성과**
- **레이아웃**: 4컬럼 통계
- **내용**: 출간 도서 수, 독자 수, 평균 평점, 다운로드 수

### **3. 도서 목록 페이지**

#### **3.1 필터링 시스템 (한빛미디어 참조)**
```
[카테고리] [시리즈] [정렬] [검색]
├── 전체
├── SNACK Series 🍿
│   ├── Business SNACK
│   ├── Money SNACK
│   ├── Career SNACK
│   └── Health SNACK
└── SOUL Series 🌙
    ├── Timeless Wisdom
    ├── Life Seasons
    └── Inner Voice
```

#### **3.2 도서 그리드**
- **레이아웃**: 한빛미디어와 유사한 4컬럼 그리드
- **카드 디자인**:
  - 표지 (시리즈별 색상 테마)
  - 시리즈 배지
  - 제목 + 서브타이틀
  - 태그라인 (이탤릭)
  - 저자, 출간일, 페이지 수
  - 평점 + 리뷰
  - 가격 + 구매 버튼

### **4. 도서 상세 페이지**

#### **4.1 상세 정보 섹션**
```
[표지] [기본 정보]
├── 시리즈 배지
├── 제목 + 서브타이틀
├── 태그라인
├── 저자, 출간일, 페이지, 독서시간
├── 평점 + 리뷰 수
├── 가격 + 구매 버튼
└── 샘플 읽기 버튼
```

#### **4.2 접이식 상세 섹션**
- **📋 목차**: 25개 룰 구조 명시
- **📖 서문**: 저자의 집필 의도
- **💬 독자 리뷰**: 인증된 구매자 리뷰
- **📁 자료실**: 워킹북, 템플릿, 체크리스트 다운로드
- **⚠️ 오탈자 정정**: 투명한 오류 관리

### **5. 독자 지원 페이지**

#### **5.1 자료실**
- **카테고리별 분류**: 시리즈별, 도서별
- **파일 정보**: 이름, 형식, 크기, 다운로드 수
- **다운로드 버튼**: 원클릭 다운로드

#### **5.2 오탈자 신고**
- **신고 폼**: 도서명, 페이지, 오류 내용, 정정 제안
- **기존 신고 목록**: 처리 상태별 필터링

#### **5.3 FAQ**
- **카테고리**: 구매, 기술지원, 콘텐츠 문의
- **검색 기능**: 키워드 검색

---

## 🛠️ **기술적 요구사항**

### **프론트엔드**
- **프레임워크**: React 18 + TypeScript
- **스타일링**: Tailwind CSS
- **상태관리**: React Context API + useState/useReducer
- **라우팅**: React Router v6
- **반응형**: Mobile-first 접근

### **주요 라이브러리**
```json
{
  "react": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "tailwindcss": "^3.2.0",
  "lucide-react": "^0.263.1",
  "date-fns": "^2.29.0"
}
```

### **성능 최적화**
- **이미지**: WebP 포맷, lazy loading
- **코드 분할**: React.lazy + Suspense
- **SEO**: React Helmet, 구조화된 데이터

### **킨들 호환성**
- **흑백 최적화**: 명도 대비 4.5:1 이상
- **폰트 크기**: 최소 14px
- **터치 영역**: 최소 44px

---

## 📊 **데이터 구조**

### **도서 정보 스키마**
```typescript
interface Book {
  id: string;
  series: 'snack' | 'soul';
  title: string;
  subtitle: string;
  tagline: string;
  author: string;
  publishDate: string;
  pages: number;
  readingTime: string;
  rating: number;
  reviews: number;
  price: string;
  cover: string;
  description: string;
  tableOfContents: string[];
  preface: string;
  testimonials: Testimonial[];
  downloads: Download[];
  erratas: Errata[];
  tags: string[];
  category: string;
}
```

### **시리즈 정보 스키마**
```typescript
interface Series {
  id: 'snack' | 'soul';
  name: string;
  tagline: string;
  description: string;
  icon: string;
  colors: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  characteristics: string[];
  targetAudience: string;
  readingTime: string;
}
```

---

## 🎯 **핵심 기능 명세**

### **1. 도서 검색 & 필터링**
- **검색**: 제목, 저자, 태그라인, 키워드
- **필터**: 시리즈, 카테고리, 가격대, 평점
- **정렬**: 신간순, 인기순, 평점순, 가격순

### **2. 시리즈별 브랜딩**
- **동적 색상**: 선택된 시리즈에 따라 UI 색상 자동 변경
- **아이콘 시스템**: 🍿 (SNACK), 🌙 (SOUL)
- **톤앤매너**: 시리즈별 다른 문체와 디자인

### **3. 다운로드 시스템**
- **자료 유형**: PDF, Excel, Word, 이미지
- **접근 제어**: 도서 구매자 우선 (미구매자는 샘플만)
- **다운로드 추적**: 통계 및 인기 자료 집계

### **4. 오탈자 관리**
- **신고 접수**: 독자가 직접 신고 가능
- **상태 관리**: 접수 → 검토 → 확인 → 적용
- **투명성**: 모든 정정 사항 공개

### **5. 반응형 디자인**
```css
/* 브레이크포인트 */
--mobile: 320px-768px
--tablet: 768px-1024px  
--desktop: 1024px+

/* 그리드 시스템 */
Mobile: 1컬럼
Tablet: 2-3컬럼
Desktop: 4컬럼
```

---

## 🚀 **개발 마일스톤**

### **Phase 1: 핵심 기능 (2주)**
- [x] 프로젝트 셋업 (React + Tailwind)
- [ ] 헤더 & 네비게이션
- [ ] 메인 페이지 (Hero + 듀얼 트랙)
- [ ] 도서 카드 컴포넌트
- [ ] 기본 라우팅

### **Phase 2: 도서 시스템 (2주)**
- [ ] 도서 목록 페이지
- [ ] 필터링 & 검색
- [ ] 도서 상세 페이지
- [ ] 시리즈별 색상 테마

### **Phase 3: 독자 지원 (1주)**
- [ ] 자료실 페이지
- [ ] 오탈자 신고 시스템
- [ ] FAQ 페이지

### **Phase 4: 최적화 (1주)**
- [ ] 성능 최적화
- [ ] SEO 구현
- [ ] 킨들 호환성 테스트
- [ ] 반응형 완성도

---

## 🎨 **UI/UX 가이드라인**

### **한빛미디어 참조 요소**
1. **깔끔한 그리드 레이아웃**
2. **명확한 카테고리 분류**
3. **직관적인 필터링**
4. **도서 표지 중심 디자인**
5. **검색 기능 prominence**

### **25 Rules 차별화 요소**
1. **듀얼 트랙 색상 시스템**
2. **25개 룰 철학 강조**
3. **킨들 최적화 배지**
4. **Smart vs Dumb 컨셉**
5. **시리즈 아이콘 (🍿🌙)**

### **인터랙션 디자인**
- **호버 효과**: 카드 lift-up, 색상 변화
- **로딩 상태**: 스켈레톤 UI
- **에러 상태**: 친근한 404 페이지
- **성공 상태**: 다운로드 완료, 신고 접수 등

---

## 📱 **반응형 상세 명세**

### **Mobile (320px-768px)**
```
Header: 햄버거 메뉴
Hero: 세로 레이아웃
도서 그리드: 1컬럼
필터: 드롭다운 형태
```

### **Tablet (768px-1024px)**
```
Header: 축약된 네비게이션
Hero: 가로 레이아웃
도서 그리드: 2-3컬럼
필터: 사이드바 형태
```

### **Desktop (1024px+)**
```
Header: 풀 네비게이션
Hero: 최대 활용
도서 그리드: 4컬럼
필터: 상단 + 사이드바
```

---

## 🔍 **SEO 전략**

### **메타 데이터**
```html
<title>25 Rules Snack Publishing - 실용과 성찰을 품는 출판사</title>
<meta name="description" content="25개의 룰로 완성하는 새로운 나. SNACK Series로 빠른 실용지식을, SOUL Series로 깊은 성찰을 경험하세요.">
<meta name="keywords" content="전자책, 킨들, 창업, 투자, 철학, 자기계발, 25 rules">
```

### **구조화된 데이터**
- **Organization**: 출판사 정보
- **Book**: 각 도서 정보
- **Review**: 독자 리뷰
- **BreadcrumbList**: 내비게이션

---

## ✅ **품질 기준**

### **성능**
- **Lighthouse Score**: 90점 이상
- **First Contentful Paint**: 1.5초 이하
- **Largest Contentful Paint**: 2.5초 이하

### **접근성**
- **WCAG 2.1 AA 준수**
- **색상 대비**: 4.5:1 이상
- **키보드 내비게이션** 완전 지원
- **스크린 리더** 호환

### **브라우저 지원**
- **Modern**: Chrome, Firefox, Safari, Edge (최신 2버전)
- **킨들**: Silk 브라우저 최적화
- **Mobile**: iOS Safari, Android Chrome

---

## 🎯 **성공 지표**

### **비즈니스 KPI**
- **페이지 뷰**: 월 10K+
- **도서 클릭률**: 15%+
- **자료 다운로드**: 월 1K+
- **신규 독자 유입**: 월 500명+

### **기술적 KPI**
- **사이트 속도**: 3초 이하
- **모바일 친화성**: 95점+
- **SEO 점수**: 90점+
- **에러율**: 1% 이하

---

## 📝 **개발 체크리스트**

### **필수 구현 사항**
- [ ] 홈페이지 완성
- [ ] 도서 목록 & 상세 페이지
- [ ] 시리즈별 브랜딩 적용
- [ ] 반응형 완벽 구현
- [ ] 검색 & 필터링
- [ ] 자료실 다운로드 기능

### **선택 구현 사항**
- [ ] 사용자 로그인/회원가입
- [ ] 장바구니 기능
- [ ] 위시리스트
- [ ] 소셜 로그인
- [ ] 뉴스레터 구독

---

**🏆 최종 목표: "실용과 성찰을 품는 25 Rules Snack Publishing만의 독특하고 전문적인 홈페이지 구현"**
