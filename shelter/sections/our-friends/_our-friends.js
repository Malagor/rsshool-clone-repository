class PetsGalerySlider extends PetsGalery{
  constructor(el, data) {
    super(el, data);
  }

  render() {
    this.$el.innerHTML = '';
    this.data.forEach((pet, index) => {
      this.$el.insertAdjacentHTML('beforeend', this.toHTML(pet, index))
    })
  }

}

const slider = document.querySelector('.gallery .gallery__list');

if (slider) {
  const petsSlider = new PetsGalerySlider(slider, petsArray);
  console.log(petsSlider);

  petsSlider.render();

}



