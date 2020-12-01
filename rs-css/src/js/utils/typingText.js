import sound from "./playSound";

export default function typingText(element, text) {
  element.value = '';
  console.log(text, element);
  let i = 1;

  const timer = setInterval(() => {
    element.value = text.slice(0, i);
    i += 1;
    element.selectionStart = 100;
    element.selectionEnd = 100;
    element.focus();
    sound();
    if (i > text.length) clearInterval(timer);
  }, 200);
}
