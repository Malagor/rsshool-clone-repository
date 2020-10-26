class Modal {
  constructor() {
    this.init();
  }

  init() {
    document.body.insertAdjacentHTML('beforeend', '<div id="modal" class="modal"></div>');
    this.$el = document.querySelector('#modal');
    return this;
  }

  setContent(data) {
    this.data = data;
    return this;
  }

  toHTML(data) {
    const {name, img, type, breed, description, age, inoculations, diseases, parasites} = data;
    return `
    <div class="modal__wrapper">
    <button id="modalClose" class="btn btn--transparent modal__close">
      <svg class="icon icon-close">
        <use xlink:href="../assets/icons/svg-sprites.svg#modal-close"></use>
      </svg>
    </button>
    <div class="modal__image">
      <img src="${img}" alt="${name}">
    </div>
    <div class="modal__text">
      <div class="modal__name">${name}</div>
      <div class="modal__breed">${type}- ${breed}</div>
      <div class="modal__description">${description}</div>
      <ul class="modal__list">
        <li class="modal__item"><span><span class="modal__item-label">Age:</span>${age}</span></li>
        <li class="modal__item"><span><span class="modal__item-label">Inoculations:</span>${inoculations}</span></li>
        <li class="modal__item"><span><span class="modal__item-label">Diseases:</span>${diseases}</></li>
        <li class="modal__item"><span><span class="modal__item-label">Parasites:</span>${parasites}</></li>
      </ul>
    </div>
  </div>
    `
  }

  openModal() {
    this.$el.insertAdjacentHTML('beforebegin', '<div id="overlay" style="top: 0;"></div>');

    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('beforeend', this.toHTML(this.data));

    this.$el.classList.add('open');
  }

  closeModal() {
    if (this.$el.classList.contains('open')) {
      this.$el.classList.remove('open');
    }
    document.body.removeChild(document.querySelector('#overlay'));
  }
}

const petsModal = new Modal();

document.body.addEventListener('click', event => {

  const target = event.target;

  if (target.closest('.gallery-item')) {
    disableScroll();
    const index = target.closest('.gallery-item').dataset.index;

    target.closest('.gallery-item').classList.add('active');

    petsModal.setContent(petsArray[index]).openModal();
  }

  if (target.closest('#modalClose') || target.closest('#overlay')) {
    enableScroll();
    document.querySelector('.gallery-item.active').classList.remove('active');
    petsModal.closeModal();
  }
});