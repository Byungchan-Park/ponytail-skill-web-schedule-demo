# Ponytail Skill Web Schedule Demo

This repository is a small comparison demo for AI coding agents.

It shows how the same web UI requirement can lead to two different implementation styles:

1. `baseline/`: a normal agent-style implementation with separated files and a little structure.
2. `ponytail/`: a Ponytail-style minimum implementation that only builds what is needed now.

The goal is not to build the best schedule management product. The goal is to make overengineering visible.

## Why a schedule app?

A schedule app is familiar and small, but it still needs real UI behavior:

- add a schedule
- list schedules
- mark schedules done
- delete schedules
- persist data in `localStorage`

That makes it a good demo for comparing file count, code size, dependencies, and complexity.

## Run the baseline version

```bash
cd baseline
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

The baseline version uses browser-native JavaScript modules and no install step.

## Run the Ponytail version

```bash
cd ponytail
python3 -m http.server 8001
```

Open:

```text
http://localhost:8001
```

You can also open `ponytail/index.html` directly in a browser.

## Comparison criteria

- file count
- lines of code
- external dependencies
- build step requirement
- setup simplicity
- UI complexity
- state management complexity
- unnecessary abstractions
- features outside requirements
- feature completeness
- time to understand
- ease of modification

## Key insight

Even a simple web UI can become larger than necessary when an AI agent speculates about future needs. Ponytail keeps the implementation close to the current requirement: fewer files, fewer concepts, fewer dependencies, and faster review.
