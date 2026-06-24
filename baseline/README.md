# Baseline Version

This version represents a normal AI coding agent implementation.

It is intentionally reasonable and functional, but it uses multiple files and small abstractions that a typical agent might create for maintainability or future expansion.

## Run

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Notes

- Uses browser-native ES modules.
- Uses `localStorage` for persistence.
- Has separated components, a storage service, and a small date utility.
- No package installation is required.
