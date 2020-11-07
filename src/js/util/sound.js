export default function sound() {
  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '../assets/sounds/move.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
