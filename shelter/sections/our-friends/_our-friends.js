class PetsGalerySlider extends PetsGalery{
  constructor(el, data) {
    super(el, data);
    this.init();
  }

  init() {
    this.countItemPerPage();
  }

  countItemPerPage() {
    const width = screen.width;
    if (width < 700) {
      this.itemsPerPage = 1;
    } else if (width < 990) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 3;
    }
  }

  render() {
    this.$el.classList.remove('show');
    this.$el.innerHTML = '';
    this.getRandomItems(this.itemsPerPage, this.data.length).forEach(index => {
      this.$el.insertAdjacentHTML('beforeend', this.toHTML(this.data[index], index));
    });
    setTimeout(() => {
      this.$el.classList.add('show');
    }, 200);
  }
}

const slider = document.querySelector('.gallery .gallery__list');

if (slider) {
  const petsSlider = new PetsGalerySlider(slider, petsArray);
  petsSlider.render();

  document.querySelector('.gallery').addEventListener('click', event =>{
    const {target} = event;

    if (target.closest('.gallery__arrow--left') || target.closest('.gallery__arrow--right')){
      petsSlider.render();
    }
  })
}


