import sound from "./playSound";

export default function typingText(element, text) {
  element.setValue('');
  let i = 1;

  const timer = setInterval(() => {
    element.setValue(text.slice(0, i));
    i += 1;
    // element.selectionStart = 100;
    // element.selectionEnd = 100;
    // element.focus();
    sound();
    if (i > text.length) clearInterval(timer);
  }, 200);
}
