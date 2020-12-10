/**
 *
 * Author: name <xxx@mail.com>
 *
 * Module function: building a map and working with objects on the map
 *
 * */

/*
*
* Не обязательно все функции складировать в один модуль. Если вы хотите какой то функционал вынести за пределы модуля
* что бы не "засорять" код здесь, то создавайте файл в src/js/<filename.js> и там делайте функцию-модуль. И просто импортируйте сюда.
* То есть тут пусть будут только те функции, которые мы отдаем в качестве интерфейса, а всякие "Сделать текст заглавными" выносить из модуля нафиг как не
* относящиеся к непосредственному функционалу
*
*/


/**
 *  ДЛЯ ТЕСТИРОВАНИЯ ВО ВРЕМЯ РАЗРАБОТКИ подключите модуль к системе в файле src/modules/modulesScripts.js.
 *  В последствии он будет подклбчен напрямую в mainApp, но пока вы тестируете, то этого подключения не будет.
 *  А что бы он заработал нужно его подключить как указано выше
 */


//  подключаем испорты и прочие штуки
// import initLayout from '../../js/initLayout';


export default function DefaultTemplate(el) {
  el.insertAdjacentHTML('afterbegin',
    '<!-- Вставляем требуемую верстку внутрь переданного контейнера-->' +
    '<div class="default__innerBlock">' +
    '<img src="../../assets/img/virus.png" alt="Вирус">' +
    '<div class="title">Table Module</div>' +
    '</div>',
  );

  // Заносим в переменные нужные элементы верстки
  const inner = el.querySelector('.default__innerBlock');
  const title = el.querySelector('.title');
  const image = el.querySelector('.default__innerBlock img');

  // Объявляем переменные-заглушки обработчиков событий
  let clickTitle = null;
  let clickImg = null;

  // И прописываем методы присваивания функций обработчиков к нашим переменным
  function setClickTitle(fn) {
    clickTitle = fn;
  }

  function setClickImg(fn) {
    clickImg = fn;
  }

  // Далее реализуем требуемый функционал модуля
  function clearLayout() {
    inner.innerHTML = '';
  }

  function newLayout(html) {
    inner.innerHTML = html;
  }

  function setTitle(text) {
    title.textContent = text;
  }

  function getTitle() {
    return title.textContent;
  }

  function setImg(src, alt) {
    image.setAttribute('src', src);
    image.setAttribute('alt', alt || getTitle());
  }

  function events() {
    // Навешиваем слушатели
    title.addEventListener('click', (event) => {
      // Делаем предварительную обработку, если требуется
      const {target} = event;
      if (target === el) return;

      // В данном случае просто получаем текст заголовка
      const text = getTitle();


      // и вызываем функцию обработчик события и передаем туда требуемые данные
      // в данном случае текст заголовка
      clickTitle(text);
    });

    image.addEventListener('click', (event) => {
      const {target} = event;
      if (target === el) return;

      clickImg();
    });
  }

  events();

  /**
   * ТЕСТИРОВАНИЕ
   * Тут получаем нужные данные из API, модифицируем их как нужно и вызываем свои собственные функции для тестирования
  */
  function getTestData() {
    const url = 'https://corona.lmao.ninja/v2/countries';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getTitle();
      });
  }
  getTestData();

  // и по итогу возвращаем набор функций/интерфейс/API работы с этим модулем.
  return {
    clearLayout,
    newLayout,
    setImg,
    getTitle,
    setTitle,

    // предлагаю те функции, которые редактируют "заглушки" обработчиков событий передавать в объекте setHandler
    // тогда в дальнейшем это приммет вид modelName.setHandler.clickTitle = newFunctionHandler()
    setHandler: {
      setClickTitle,
      setClickImg,
    },
  };
}
