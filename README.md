# CommitBuddy 📝

> A clean, developer-friendly web tool to instantly format multi-line git commit messages into terminal-ready CLI commands.

🔗 **Live Demo:** [https://oukofranchez.github.io/CommitBuddy/](https://oukofranchez.github.io/CommitBuddy/)

---

## ✨ Features

- **Live Formatting:** Generates the commit command in real time as you type.
- **PowerShell & Bash / Zsh Modes:** Seamlessly switch between PowerShell multi-line syntax (``` ` ```) and POSIX Bash syntax (`\`).
- **Special Character Escaping:** Automatically handles quotes, backticks, and escape characters.
- **One-Click Copy:** Fast clipboard copying with visual toast feedback.
- **Keyboard Shortcut:** Hit `Ctrl + Enter` (or `Cmd + Enter`) to copy instantly.
- **Light & Dark Mode:** Auto-detects system preferences and persists your choice across sessions.

---

## 🚀 How to Use

1. Open the live site: [CommitBuddy](https://oukofranchez.github.io/CommitBuddy/).
2. Select your target terminal:
   - **PowerShell** (Windows PowerShell / pwsh)
   - **Bash / Zsh** (macOS / Linux / Git Bash)
3. Paste or type your multi-line commit message in the text area:
   - **First line:** Used as the commit subject (`-m "..."`).
   - **Following lines:** Formatted into consecutive `-m "..."` flags.
4. Click **Copy Command** or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> (<kbd>Cmd</kbd> + <kbd>Enter</kbd> on macOS).
5. Paste directly into your terminal and press enter to commit.

---

## 🛠️ Local Setup

No build tools or package managers required. Simply clone and open:

```bash
# Clone the repository
git clone [https://github.com/oukofranchez/CommitBuddy.git](https://github.com/oukofranchez/CommitBuddy.git)

# Navigate into the folder
cd CommitBuddy

# Open index.html in your default browser
# macOS:
open index.html
# Linux:
xdg-open index.html
# Windows:
start index.html

---

```
## 🖥️ Example
**Input:**

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

## 🤝 Contributing
Pull requests are welcome! If you’d like to add features (like clipboard support or shell detection), fork the repo and submit a PR.

---

## 📜 License
MIT License - feel free to use, modify, and share.
