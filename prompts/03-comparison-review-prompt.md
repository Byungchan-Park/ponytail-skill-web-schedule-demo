# Comparison Review Prompt

Compare the two implementations in `baseline/` and `ponytail/`.

Review them using these criteria:

- file count
- code line count
- external dependency count
- whether a build step is required
- simplicity of setup and execution
- unnecessary component separation
- unnecessary abstraction
- removable code
- features outside the requirements
- whether all functional requirements are met
- whether a human can quickly understand the code
- difficulty of making small changes

Functional requirements to verify:

- add a schedule with title, date, and time
- show the schedule list
- show done status, title, date, and time
- mark a schedule done
- delete a schedule
- persist schedules in `localStorage` after refresh

Return a concise review with evidence. Prefer concrete counts over vague judgments.
