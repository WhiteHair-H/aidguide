# 응급처치 빠른 가이드 🚨

React + Vite 기반 응급처치 가이드 웹앱. Vercel 배포용으로 구성되어 있습니다.

## 로컬에서 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속

## Vercel 배포 방법

### 방법 A — GitHub 연동 (추천, 가장 쉬움)

1. 이 폴더를 GitHub 저장소에 올립니다.
2. [vercel.com](https://vercel.com) 로그인 → **Add New → Project**
3. 해당 GitHub 저장소를 Import
4. Vercel이 Vite를 자동 인식합니다. 설정 그대로 **Deploy** 클릭
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 끝. 자동으로 URL이 생성됩니다.

### 방법 B — Vercel CLI

```bash
npm i -g vercel
vercel
```

질문에 기본값으로 엔터만 누르면 배포됩니다.

## 폴더 구조

```
first-aid-app/
├── index.html          # 진입점
├── package.json        # 의존성 정의
├── vite.config.js      # Vite 설정
└── src/
    ├── main.jsx        # React 마운트
    ├── App.jsx         # 메인 컴포넌트 (가이드 내용)
    └── index.css       # 전역 스타일
```

## 내용 수정

응급 상황 데이터는 `src/App.jsx` 상단의 `firstAidData` 객체에서 수정·추가할 수 있습니다.

---
⚠️ 본 가이드는 참고용이며 전문 의료 진료를 대체하지 않습니다.
