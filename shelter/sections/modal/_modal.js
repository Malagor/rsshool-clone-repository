class PetsModal{
  constructor(el, data) {
    this.$el = document.querySelector(el);
    this.data = data;
  }

  getData(index){
    return this.data[index];
  }

  render(index) {
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('beforeend', this.toHTML(index));
  }

  toHTML(index) {
    const {name, img, type, breed, description, age, inoculations, diseases, parasites } = this.data[index];
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
        <li class="modal__item"><span class="modal__item-label">Age:</span>${age}</li>
        <li class="modal__item"><span class="modal__item-label">Inoculations:</span>${inoculations}</li>
        <li class="modal__item"><span class="modal__item-label">Diseases:</span>${diseases}</li>
        <li class="modal__item"><span class="modal__item-label">Parasites:</span>${parasites}</li>
      </ul>
    </div>
  </div>
    `
  }

  openModal(){
    this.$el.insertAdjacentHTML('beforebegin', '<div id="overlay"></div>');
    this.$el.classList.add('open');
  }

  closeModal(){
    if (this.$el.classList.contains('open')) {
      this.$el.classList.remove('open');
    }
    document.querySelector('.wrapper').removeChild(document.querySelector('#overlay'));
  }
}

const petsModal = new PetsModal('#modal', petsArray);

document.body.addEventListener('click', event => {

  const target = event.target;

  console.log(target);

  if (target.closest('.pet-details')) {
    const index = target.closest('.gallery-item').dataset.index;
    petsModal.render(index);
    petsModal.openModal();
  }

  if (target.closest('#modalClose') || target.closest('#overlay') ) {
    petsModal.closeModal();
  }
});





