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
    let modalText = `You have successfully completed the simulator. After completing all <strong>${countTask}</strong> tasks.`;
    if (hintTask) {
      modalText += `<div>Of these, <strong>${hintTask}</strong> is solved with a hint.</div>`;
    } else {
      modalText += `<div>At the same time, they never used the hint. This is a great result!</div>`;
    }
    modalText += '<div class="small-text">You can reset the results and try again.<br>To do this, use the "Reset" button in the statistics section.</div>';

    this.elements.modalInner.innerHTML = modalText;
    this.elements.overlay.classList.remove('hide');
  }

  hideModal(){
    this.elements.overlay.classList.add('hide');
  }

  events() {
    this.elements.overlay.addEventListener('click', (event) => {
      const {target} = event;

      if (target === this.elements.modal || target.closest('.modal__inner')) return;

      this.hideModal();
    })
  }
}
