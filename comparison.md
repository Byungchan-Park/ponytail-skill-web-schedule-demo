# Comparison

이 문서는 같은 스케줄 관리 웹 UI 요구사항을 두 방식으로 직접 구현한 뒤 비교한 결과입니다.

- Baseline: Ponytail skill/방식을 쓰지 않은 일반적인 AI 에이전트식 구현
- Ponytail: Ponytail mindset을 적용해 지금 필요한 기능만 최소 구현한 버전

## Measured Summary

측정 기준:

- App files: 실제 앱 실행에 필요한 파일만 계산했습니다. README는 제외했습니다.
- App lines of code: 실제 앱 파일의 전체 라인 수입니다. 빈 줄과 CSS 포함입니다.
- External dependencies: `package.json` dependencies/devDependencies 및 외부 CDN 사용 여부 기준입니다.

| Metric | Baseline | Ponytail | Notes |
|---|---:|---:|---|
| Files | 10 | 1 | Baseline은 `package.json`, `index.html`, `src/` 분리. Ponytail은 `index.html` 단일 파일. |
| Lines of code | 368 | 100 | Baseline은 CSS/컴포넌트/서비스/유틸 분리로 코드량 증가. |
| External dependencies | 0 | 0 | 둘 다 외부 런타임 의존성 없음. Ponytail은 package manager도 없음. |
| Build step required | No | No | 둘 다 정적 파일 서버 또는 직접 브라우저 실행 가능. |
| Setup steps | 2 | 1 | Baseline: `cd baseline`, 서버 실행. Ponytail: HTML 직접 열기 또는 서버 실행. |
| UI complexity | Medium | Low | Baseline은 shell/header/form/list/item 구조가 더 명확하지만 파일과 DOM 조립 코드가 많음. |
| State management complexity | Medium | Low | Baseline은 App 클래스에서 상태 변경 메서드 3개와 storage service를 사용. Ponytail은 배열과 `render()`/`save()`만 사용. |
| Unnecessary abstractions | Several | Minimal | Baseline은 component/service/util 분리가 현재 요구사항에는 과함. Ponytail은 별도 추상화 없음. |
| Features outside requirements | 0 | 0 | 둘 다 add/list/done/delete/localStorage만 구현. |
| Feature completeness | Complete | Complete | 브라우저에서 직접 add/list/done/delete/reload persistence 검증 완료. |
| Time to understand | Longer | Shorter | Baseline은 여러 파일을 따라가야 함. Ponytail은 한 파일에서 전체 흐름 확인 가능. |
| Ease of modification | Medium | High for small changes | 작은 요구사항 변경은 Ponytail이 빠름. 큰 앱으로 확장하면 Baseline 구조가 유리할 수 있음. |

## File and Line Count Detail

| Area | Baseline | Ponytail |
|---|---:|---:|
| App files only | 10 | 1 |
| App LOC only | 368 | 100 |
| All files including README | 11 | 2 |
| All LOC including README | 388 | 123 |

Baseline app files:

```text
baseline/package.json
baseline/index.html
baseline/src/main.js
baseline/src/App.js
baseline/src/components/ScheduleForm.js
baseline/src/components/ScheduleList.js
baseline/src/components/ScheduleItem.js
baseline/src/services/storageService.js
baseline/src/utils/dateUtils.js
baseline/src/styles.css
```

Ponytail app files:

```text
ponytail/index.html
```

## Browser Test Results

두 버전 모두 브라우저에서 직접 실행해 같은 사용자 흐름을 검증했습니다.

| Test | Baseline | Ponytail |
|---|---|---|
| Page loads | Pass | Pass |
| Add schedule | Pass | Pass |
| List schedule | Pass | Pass |
| Mark done | Pass | Pass |
| Delete schedule | Pass | Pass |
| Persist after reload with `localStorage` | Pass | Pass |
| Browser console JavaScript errors | 0 | 0 |

Test data:

| Version | Title | Date | Time |
|---|---|---|---|
| Baseline | 팀 회의 | 2026-06-25 | 10:00 |
| Ponytail | 운동 | 2026-06-25 | 19:00 |

Observed list text:

```text
Baseline after add/reload: 팀 회의 2026-06-25 10:00 Delete
Ponytail after add/reload: 운동 - 2026-06-25 19:00 Delete
```

## Observations

Baseline은 일부러 망가뜨린 코드가 아닙니다. 정상 동작하고, 일반적인 AI 코딩 에이전트가 “유지보수 가능하게” 만들려고 할 때 자연스럽게 나올 수 있는 구조입니다.

하지만 현재 요구사항은 작습니다. 이 정도 기능에는 컴포넌트 3개, App 클래스, storage service, date utility, package manifest까지 나누는 것이 검토 비용을 늘립니다.

Ponytail 버전은 같은 기능을 단일 HTML 파일로 구현했습니다. 기능은 동일하게 충족하면서 파일 수와 코드량이 크게 줄었습니다.

## What Ponytail Improved

- 파일 수를 10개에서 1개로 줄였습니다.
- 앱 코드 라인을 368줄에서 100줄로 줄였습니다.
- 실행 경로가 단순합니다. HTML 파일 하나만 보면 됩니다.
- 별도 컴포넌트, 서비스 레이어, 유틸 레이어를 만들지 않았습니다.
- 외부 의존성, 빌드 도구, 프레임워크, 서버, DB를 추가하지 않았습니다.
- 요구사항 외 기능을 만들지 않았습니다.

## What Ponytail Might Risk

- 기능이 계속 커지면 단일 HTML 파일은 길어질 수 있습니다.
- 여러 화면, 여러 데이터 모델, 협업 개발이 필요해지면 파일 분리가 유리할 수 있습니다.
- CSS와 JavaScript가 한 파일에 있어 대규모 변경에는 불편할 수 있습니다.

현재 데모 범위에서는 이 리스크가 실제 문제가 되기 전까지 구조를 미루는 것이 Ponytail 방식의 핵심입니다.

## Lessons Learned

간단한 웹 UI 요구사항에서도 AI 에이전트는 “나중에 필요할 수 있는 구조”를 먼저 만들기 쉽습니다.

Ponytail 방식은 “지금 필요한 기능만” 구현하게 하므로 결과물이 작고, 빠르게 읽히고, 비교하기 쉬워집니다.

이 데모에서 중요한 차이는 기능이 아니라 구현 압력입니다.

- Baseline: 유지보수와 확장을 예상한 구조
- Ponytail: 현재 요구사항을 만족하는 최소 구조

둘 다 동작하지만, 작은 UI에서는 Ponytail 방식이 검토 비용과 수정 비용을 낮춥니다.
