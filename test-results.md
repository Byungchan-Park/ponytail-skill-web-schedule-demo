# Test Results

이 파일은 `baseline/`과 `ponytail/` 구현을 브라우저에서 직접 실행한 검증 결과입니다.

## Test Environment

- Baseline URL: `http://127.0.0.1:8000`
- Ponytail URL: `http://127.0.0.1:8001`
- Static server command: `python3 -m http.server`
- Persistence: browser `localStorage`

## Baseline Test

Test data:

```text
Title: 팀 회의
Date: 2026-06-25
Time: 10:00
```

Result:

| Check | Result | Evidence |
|---|---|---|
| Page loaded | Pass | Title: `Baseline Schedule Demo` |
| Add schedule | Pass | Stored item count became 1 |
| List schedule | Pass | `팀 회의 2026-06-25 10:00 Delete` shown |
| Mark done | Pass | Stored `done` became `true` |
| Reload persistence | Pass | Same item remained after reload |
| Delete schedule | Pass | Stored item count became 0 |
| Console errors | Pass | 0 JavaScript errors |

## Ponytail Test

Test data:

```text
Title: 운동
Date: 2026-06-25
Time: 19:00
```

Result:

| Check | Result | Evidence |
|---|---|---|
| Page loaded | Pass | Title: `Ponytail Schedule Demo` |
| Add schedule | Pass | Stored item count became 1 |
| List schedule | Pass | `운동 - 2026-06-25 19:00 Delete` shown |
| Mark done | Pass | Stored `done` became `true` |
| Reload persistence | Pass | Same item remained after reload |
| Delete schedule | Pass | Stored item count became 0 |
| Console errors | Pass | 0 JavaScript errors |

## Requirement Coverage

| Requirement | Baseline | Ponytail |
|---|---|---|
| 일정 제목 입력 | Pass | Pass |
| 날짜 입력 | Pass | Pass |
| 시간 입력 | Pass | Pass |
| 일정 추가 | Pass | Pass |
| 일정 목록 조회 | Pass | Pass |
| 완료 처리 | Pass | Pass |
| 삭제 | Pass | Pass |
| 새로고침 후 데이터 유지 | Pass | Pass |
| Ponytail 외부 의존성 없음 | Not applicable | Pass |
| Ponytail 단일 HTML 파일 | Not applicable | Pass |
