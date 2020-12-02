export default class Modal {
  constructor(obj) {
    this.elements ={
      overlay: obj.overlay,
      modal: obj.modal,
      modalInner: obj.modalInner,
      closeBtn: obj.closeBtn
    };

    this.events.call(this);
  }

  static create(){
    document.body.insertAdjacentHTML('beforeend', `
      <div class="overlay hide">
      <div class="modal">
        <div class="modal__close">&#128938;</div>
        <div class="modal__inner">
        Вы успешно прошли симулятор.
        Выполнив все 10 заданий.
        <div>При этом ниразу не воспользовались подсказкой. Это отличный разультат!</div>
        <div>Из них 3 решены с подсказкой.</div>        
        </div>
      </div>
    </div>
    `);

    const overlay = document.body.querySelector('.overlay');
    const modal = document.body.querySelector('.modal');
    const modalInner = document.body.querySelector('.modal__inner');
    const closeBtn = document.body.querySelector('.modal__close');

    const config ={
      overlay,
      modal,
      modalInner,
      closeBtn
    };

    return new Modal(config);
  }

  showModal(countTask, hintTask = 0){
    let modalText = `Вы успешно прошли симулятор. Выполнив все ${countTask} заданий.`;
    if (hintTask) {
      modalText += `<div>Из них ${hintTask} решены с подсказкой.</div>`;
    } else {
      modalText += `<div>При этом ниразу не воспользовались подсказкой. Это отличный разультат!</div>`;
    }

    this.elements.modalInner.innerHTML = modalText;
    this.elements.overlay.classList.remove('hide');
  }

  hideModal(){
    this.elements.overlay.classList.add('hide');
  }

  events() {
    this.elements.overlay.addEventListener('click', (event) => {
      const {target} = event;

      if (target === this.elements.modalInner) return;

      this.hideModal();
    })
  }
}
