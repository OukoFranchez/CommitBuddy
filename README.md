# CommitBuddy 📝

CommitBuddy is a simple HTML/CSS/JS utility that helps you format multi‑line Git commit messages into **PowerShell‑friendly CLI commands**.  
No more broken quotes or line continuation errors — just paste your commit message, click format, and copy the ready‑to‑use command.

---

## 🚀 Features
- Paste any commit message (subject + body).
- Automatically converts to `git commit` with multiple `-m` flags.
- Escapes quotes and backticks for safe PowerShell usage.
- Outputs a clean, copy‑pasteable command.
- Lightweight — no dependencies, just plain HTML/CSS/JS.

---

## 📦 Usage
1. Clone or download this repo:
   ```bash
   git clone https://github.com/yourusername/CommitBuddy.git
   ```
2. Open `commit-helper.html` in your browser.
3. Paste your commit message in the textarea.
4. Click **Format**.
5. Copy the generated command and run it in PowerShell.

---

## 🖥️ Example
**Input:**
```
fix(auth): handle token refresh in middleware

- Add Next.js middleware to automatically refresh expiring Strava OAuth tokens
- Export refreshToken helper and add safe try-catch in setSessionCookies
- Set secure cookie flag dynamically based on NODE_ENV
```

**Output:**
```powershell
git commit -m "fix(auth): handle token refresh in middleware" `
-m "- Add Next.js middleware to automatically refresh expiring Strava OAuth tokens" `
-m "- Export refreshToken helper and add safe try-catch in setSessionCookies" `
-m "- Set secure cookie flag dynamically based on NODE_ENV"
```

---

## 🛠️ Roadmap
- [ ] Add **Copy to Clipboard** button.
- [ ] Support for bash/zsh formatting.
- [ ] Dark mode UI.

---

## 🤝 Contributing
Pull requests are welcome! If you’d like to add features (like clipboard support or shell detection), fork the repo and submit a PR.

---

## 📜 License
MIT License — feel free to use, modify, and share.
