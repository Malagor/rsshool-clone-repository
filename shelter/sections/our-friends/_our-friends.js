class PetsGalerySlider extends PetsGalery{
  constructor(el, data) {
    super(el, data);
    this.init();
  }

  init() {
    this.prevIndex = [];
    this.countItemPerPage();
    this.render();
    this.events();
  }

  events() {
    document.querySelector('.gallery').addEventListener('click', event =>{
      const {target} = event;

      if (target.closest('.gallery__arrow--left') || target.closest('.gallery__arrow--right')){
        this.countItemPerPage();
        this.render();
      }
    })
  }

  getRandomItems = (count, max, oldIndex = []) => {
    const result = [];
    while (result.length < count) {
      const curNum = Math.floor(Math.random() * Math.floor(max));
      if (!result.includes(curNum) && !result.includes(this.prevIndex)) {
        result.push(curNum)
      }
    }

    // const rand = this.prevIndex;
    // do {
    //   this.prevIndex = Math.floor(Math.random() * Math.floor(8));
    // } while (this.prevIndex === rand);
    //
    // // this.prevIndex = rand;
    // console.log('this.prevIndex', this.prevIndex);
    //
    // for (let i = rand; i < (rand + count); i++) {
    //   result.push(i);
    // }
    //
    // console.log('result', result);
    this.prevIndex.splice(0);
    result.forEach(v => {
      this.prevIndex.push(v);
    });

    return result;
  };

  countItemPerPage() {
    const width = screen.width;
    if (width < 700) {
      this.itemsPerPage = 1;
    } else if (width < 992) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 3;
    }

    // this.itemsPerPage = 3
  }

  render() {
    this.$el.classList.remove('show');
    this.$el.innerHTML = '';
    this.getRandomItems(this.itemsPerPage, 8).forEach(index => {
      this.$el.insertAdjacentHTML('beforeend', this.toHTML(this.data[index], index));
    });
    setTimeout(() => {
      this.$el.classList.add('show');
    }, 200);
  }
}

const slider = document.querySelector('.gallery .gallery__list');

if (slider) {
  new PetsGalerySlider(slider, petsArray);
}