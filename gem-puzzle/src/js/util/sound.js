import soundMove from '../../assets/sounds/move.mp3';

export default function sound() {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = soundMove; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
