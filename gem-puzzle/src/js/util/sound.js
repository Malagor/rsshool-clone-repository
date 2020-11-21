import soundMove from '../../assets/sounds/move.mp3';

export default function sound() {
  const audio = new Audio();
  audio.src = soundMove;
  audio.autoplay = true;
}
