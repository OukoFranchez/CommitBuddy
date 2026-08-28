const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const copyBtn = document.getElementById('copy-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const shellRadios = document.querySelectorAll('input[name="shell"]');
const toastEl = document.getElementById('toast');

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2000);
}

function escapeForShell(str, shellType) {
  if (shellType === 'pwsh') {
    return str.replace(/`/g, '``').replace(/"/g, '`"');
  } else {
    // POSIX Bash / Zsh escaping
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\$/g, '\\$').replace(/`/g, '\\`');
  }
}

function formatCommit() {
  const text = inputEl.value.trim();
  const selectedShell = document.querySelector('input[name="shell"]:checked').value;

  if (!text) {
    outputEl.textContent = 'git commit -m "..."';
    return;
  }

  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
  if (lines.length === 0) {
    outputEl.textContent = 'git commit -m "..."';
    return;
  }

  const continuationChar = selectedShell === 'pwsh' ? '`' : '\\';
  const subject = escapeForShell(lines[0], selectedShell);
  const bodyLines = lines.slice(1).map(line => escapeForShell(line, selectedShell));

  let cmd = `git commit -m "${subject}"`;
  bodyLines.forEach(line => {
    cmd += ` ${continuationChar}\n-m "${line}"`;
  });

  outputEl.textContent = cmd;
}

async function copyOutput() {
  const output = outputEl.textContent;
  if (!output || output === 'git commit -m "..."') {
    showToast('⚠️ Nothing to copy');
    return;
  }

  try {
    await navigator.clipboard.writeText(output);
    copyBtn.classList.add('success');
    copyBtn.querySelector('.copy-text').textContent = '✓ Copied!';
    showToast('📋 Copied to clipboard');

    setTimeout(() => {
      copyBtn.classList.remove('success');
      copyBtn.querySelector('.copy-text').textContent = 'Copy Command';
    }, 1500);
  } catch {
    showToast('❌ Copy failed');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('commitbuddy-theme', isDark ? 'dark' : 'light');
}

// Event Listeners
inputEl.addEventListener('input', formatCommit);
shellRadios.forEach(radio => radio.addEventListener('change', formatCommit));
copyBtn.addEventListener('click', copyOutput);
themeToggleBtn.addEventListener('click', toggleTheme);

// Keyboard shortcuts (Ctrl/Cmd + Enter to copy)
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    copyOutput();
  }
});

// Init saved theme
(() => {
  const savedTheme = localStorage.getItem('commitbuddy-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
  }
})();