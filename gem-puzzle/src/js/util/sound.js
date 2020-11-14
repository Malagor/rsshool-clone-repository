export default function sound() {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '../assets/sounds/move.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
