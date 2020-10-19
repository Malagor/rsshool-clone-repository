class PetsGalery {
  constructor(el, petsData) {

    if (typeof el === "string") {
      this.$el = document.querySelector(el);
    } else {
      this.$el = el;
    }

    this.data = petsData;
  }

  render() {
    throw new Error('Этот метод нужно переопределить');
  }

  toHTML = (pet, index) => {
    const {name, img} = pet;
    return `
        <li class="gallery-item" data-index="${index}">
          <img src="${img}" alt="Katrine" class="gallery-item__image">
          <div class="gallery-item__title">${name}</div>
          <button class="btn btn--transparent pet-details">Learn more</button>
        </li>`
  }
}

class PetsGaleryTable extends PetsGalery {
  constructor(el, petData) {
    super(el, petData);
    this.init();
  }

  init() {
    this.totalItem = this.data.length;
    this.currentPage = 1;
    this.countItemPerPage();
    this.lastPageNumber = Math.ceil(this.totalItem / this.itemsPerPage);

    this.render();
  }

  countItemPerPage() {
    const width = screen.width;
    if (width < 480) {
      this.itemsPerPage = 3;
    } else if (width < 990) {
      this.itemsPerPage = 6;
    } else {
      this.itemsPerPage = 8;
    }

    this.totalPages = Math.ceil(this.totalItem / this.itemsPerPage);
  }

  render() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    let finish = (this.currentPage * this.itemsPerPage);
    if (finish > this.totalItem) finish = this.totalItem;

    const curArr = this.data.filter((val, index) => {
      return start <= index && index < finish;
    });

    this.$el.innerHTML = '';

    curArr.forEach((pet, index) => {
      this.$el.insertAdjacentHTML('beforeend', this.toHTML(pet, ((this.currentPage - 1)  * this.itemsPerPage) + index))
    });
  }

  nextPage() {
    if (!(this.currentPage + 1) < this.lastPageNumber) {
      ++this.currentPage;
    }
  }

  prevPage() {
    if (!(this.currentPage - 1) < 1) {
      --this.currentPage;
    }
  }

  firstPage() {
    this.currentPage = 1;
  }

  lastPage() {
    this.currentPage = this.lastPageNumber;
  }
}

const tablePets = document.querySelector('.gallery-table .gallery__list');
if (tablePets) {
  const petsTable = new PetsGaleryTable(tablePets, petsArray);

  // Пагинация и вывод карточек животных на страницу
  const $pagination = document.querySelector('#pagination');

  const $firstPageBtn = document.querySelector('#firstPage .gallery__arrow');
  const $prevPageBtn = document.querySelector('#prevPage .gallery__arrow');
  const $nextPageBtn = document.querySelector('#nextPage .gallery__arrow');
  const $lastPageBtn = document.querySelector('#lastPage .gallery__arrow');
  const $currentPageBlock = document.querySelector('#currentPage .gallery__arrow.active');
  const disabled = 'gallery__arrow--disabled';

  const controlsButtons = [
    $firstPageBtn,
    $prevPageBtn,
    $nextPageBtn,
    $lastPageBtn
  ];

  function disabledBtn(arr) {
    controlsButtons.forEach(el => {
      el.classList.remove(disabled);
    });

    if (arr) {
      arr.forEach(el => {
        el.classList.add(disabled);
      })
    }
  }

  disabledBtn([$firstPageBtn, $prevPageBtn]);

  $pagination.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('#firstPage')) {
      petsTable.firstPage();
      petsTable.render();
      disabledBtn([$firstPageBtn, $prevPageBtn]);
    }

    if (target.closest('#prevPage')) {
      if ((petsTable.currentPage - 1) < 1) return;

      if ((petsTable.currentPage - 1) === 1) {
        disabledBtn([$firstPageBtn, $prevPageBtn]);
      } else {
        disabledBtn([]);
      }

      petsTable.prevPage();
      petsTable.render();
    }

    if (target.closest('#nextPage')) {
      if ((petsTable.currentPage + 1) > petsTable.lastPageNumber) return;

      if ((petsTable.currentPage + 1) === petsTable.lastPageNumber) {
        disabledBtn([$lastPageBtn, $nextPageBtn]);
      } else {
        disabledBtn([]);
      }

      petsTable.nextPage();
      petsTable.render();
    }

    if (target.closest('#lastPage')) {
      petsTable.lastPage();
      petsTable.render();
      disabledBtn([$lastPageBtn, $nextPageBtn]);
    }

    $currentPageBlock.innerText = petsTable.currentPage;

  });
}
// /. Пагинация