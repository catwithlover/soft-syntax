const copyButton = document.querySelector("[data-copy-target]");

if (copyButton) {
  const copyButtonLabel = copyButton.querySelector("span");
  const commandStatus = document.querySelector(".command-status");
  const isTraditionalChinese = document.documentElement.lang.toLowerCase().startsWith("zh");
  const messages = isTraditionalChinese
    ? {
        copy: "複製",
        copied: "已複製",
        success: "已複製指令",
        error: "請選取並複製指令",
      }
    : {
        copy: "Copy",
        copied: "Copied",
        success: "Command copied",
        error: "Select and copy the command",
      };
  let resetTimer;

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    textArea.remove();
    if (!copied) throw new Error("Copy command failed");
  }

  copyButton.addEventListener("click", async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget);
    if (!target) return;

    try {
      await copyText(target.textContent.trim());
      copyButtonLabel.textContent = messages.copied;
      commandStatus.textContent = messages.success;
    } catch {
      commandStatus.textContent = messages.error;
    }

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      copyButtonLabel.textContent = messages.copy;
      commandStatus.textContent = "";
    }, 2400);
  });
}
