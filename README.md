# malagor-JS2020Q3
Private repository for @malagor
<<<<<<< HEAD
=======

## Shelter: Main page
1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/shelter/shelter-main-page-ru.md
2. Screenshots:
   ![](https://webpolygon.by/wp-content/uploads/2020/09/shelter.png)
3. Deploy: https://rolling-scopes-school.github.io/malagor-JS2020Q3/shelter/pages/
4. Done 28.09.2020 / deadline 28.09.2020
5. Score: 100 / 100
- Header - содержит только логотип и панель навигации
  - [x] Интерактивная панель навигации. Подсвечен первый элемент About the shelter.
  - [x] Логотип находится слева. В логотипе используется текст.
  - [x] На странице присутствовует один элемент H1 с текстом Cozy House. Элемент скр
- Блок Not only
  - [x] Кнопка Make a Friend интерактивная.
  - [x] Бекграунд блоков можно сделан градиентом.
  - [x] Картинка собаки и текст - разные блоки, не накладываются.
- Блок About
  - [x] Использованы кавычки "запятые".
- Блок Our Friends
  - [x] Кнопки "влево" и "вправо" интерактивные. Есть класс desallow делающий кнопку не активной.
  - [x] Блоки с питомцами интерактивные при наведении на любую область блока.
  - [x] Кнопка Get to know the rest интерактивная.
- Блок Help
  - [x] Элементы расположены сеткой: 5 сверху, 4 снизу.
- Блок In addition
  - [x] Номер банковского счета интерактивный, выполнен ссылкой.
- Footer - содержит текст, логотип и панель навигации:
  - [x] При нажатии на email или его иконку открываться почтовый сервис.
  - [x] При нажатии на телефон или его иконку открываться набор номера.
  - [x] При нажатии на локацию открыться страница с google maps в отдельном окне, с локацией соответствующей адресу.
  - [x] Картинка собаки и текст - разные блоки, не накладываются друг на друга.
  - [x] Бекграунд блоков выполнен градиентом.


## Shelter: Pets page
1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/shelter/shelter-pets-page-ru.md
2. Screenshot:
![](https://webpolygon.by/wp-content/uploads/2020/10/shelter-pets.png)
3. Deploy: https://rolling-scopes-school.github.io/malagor-JS2020Q3/shelter/pages/pets.html
4. Done 24.10.2020 / deadline 26.10.2020
5. Score: 100 / 100


- ##Открытие страниц на полностью развернутом окне браузера на десктопе [30/30]

    - [x] [+5] Страница Main Page открывается, и на странице присутствют все 7 секций, внутри которых набор элемнтов количественно соотвествует дизайну.
    - [x] [+5] Страница Pets Page открывается, и на странице присутствют все 7 элементов, внутри которых набор элемнтов количественно соотвествует дизайну.
    - [x] [+5] Элементы на странице Main Page при наведении меняют свое состояние, т.е. являются интерактивными.
    - [x] [+5] Элементы на странице Pets Page при наведении меняют свое состояние, т.е. являются интерактивными
    - [x] [+3] Со страницы Main Page происходит переход на страницу Pets Page по нажатию на ссылки
    - [x] [+3] Со страницы Pets Page происходит переход на страницу Main Page по нажатию на ссылки
    - [x] [+2] При нажатии в каком-либо меню на "Help the shelter" или "Contacts" ничего не происходит, а сами элементы не интерактивные,
    - [x] [+2] При нажатии на email и телефон открываются соответствующие сервисы


- ##Adaptive [0/30]
    - [x] [+10]При растягивании экрана на 4k, хоть при уменьшении до 320px не должна теряться целостность приложения. При плавном изменении размера, мы не учитываем точных подсчетов расположения элементов. Однако, в первую очередь, не должен появляться горизонтальный скролл. Во-вторых, элементы ни при каких обстоятельствах не должны начать вылазить за рамки экрана. Если не появляется горизонтальной полосы прокрутки, или контент не вылазит за пределы экрана,

    - [x] [+5] При проверке в браузере Mozilla Firefox, если при изменении размера окна браузера от максимума до 320px не появляется горизонтальной полосы прокрутки, или контент не вылазит за пределы экрана.

###1280px <= width [+5] 
- ####Main Page [+3]

    - [x]  Выполняются все условия:
        - Фон растянут на Header и блок Not only.
        - Картинка собаки в блоке Not only не налазит на текст.
        - Все параграфы с текстом, справа от картинки кошки и собаки, выравнены по левому краю в блоке About the shelter.
        - В блоке Our friends текст, слайдер, и кнопка снизу центрированы.
        - В блоке Our friends, в слайдере 3 карточки питомцев.
        - В блоке How you в первом ряду 5 элементов, во тором 4.
        - Все параграфы с текстом, ссылка с номером карты, справа от картинки собаки, выравнены по левому краю в блоке You can.
        - Иконки и текст в обоих колонках выравнены по левому краю в блоке Footer.
- ####Pets Page [+2]

   - [x] Выполняются все условия:
        - Header всегда видимый, и находится сверху страницы, в том числе при скролле.
        - В блоке Our friends находится 8 карточек питомцев, 2 ряда по 4 элемента.
        - В блоке Our friends все элементы и блоки с элементами центрированы.
        - При открытии страницы, в пагинации должно быть число "1", а кнопки слева неактивны.
        - Иконки и текст в обоих колонках выравнены по левому краю в блоке Footer.


###768px <= width < 1280px
- ####Main Page [+3]

    - [x] Выполняются условия:
        - Фон растянут на Header и блок Not only.
        - Картинка собаки снизу в блоке Not only не налазит на текст.
        - Все параграфы с текстом выравнены по левому краю в блоке Not only. Сами блоки центрированы.
        - Кнопка "Make a friend" центрирована.
        - Все параграфы с текстом выравнены по левому краю в блоке About the shelter. Сами блоки центрированы.
        - В блоке Our friends текст, слайдер, и кнопка снизу центрированы.
        - В блоке Our friends, в слайдере 2 карточки питомцев.
        - В блоке How you 3 ряда по 3 элемента.
        - Все параграфы с текстом, а также ссылка с номером карты, выравнены по левому краю в блоке You can. Сами блоки центрированы.
        - Иконки и текст в обоих колонках выравнены по левому краю в блоке Footer.
        - Картинка собаки снизу в блоке Footer не налазит на текст.


- ####Pets Page [+2]

    - [x] Выполняются условия:

        - Header всегда видимый, и находится сверху страницы, в том числе при скролле.
        - В блоке Our friends находится 6 карточек питомцев, 3 ряда по 2 элемента.
        - В блоке Our friends все элементы и блоки с элементами центрированы.
        - При открытии страницы, в пагинации должно быть число "1", а кнопки слева неактивны.
        - Картинка собаки снизу в блоке Footer не налазит на текст.


###320px <= width < 768px
- ####Main Page [+3]

    - [x] Выполняются условия:

        - Фон растянут на Header и блок Not only.
        - Меню в Header становится бургер меню.
        - Все параграфы с текстом и кнопка центрированы в блоке Not only.
        - Картинка собаки снизу в блоке Not only не налазит на текст.
        - Все параграфы с текстом центрированы в блоке About the shelter. При этом текст в параграфах, но не заголовке, растянут на всю доступную ширину (stretch).
        - В блоке Our friends текст, карточка в слйдере, блок с кнопками слайдера, и кнопка снизу центрированы.
        - В блоке Our friends, в слайдере 1 карточка питомца.
        - В блоке How you 2 колонки, в перой слева 5 элементов, во второй 4.
        - Все параграфы с текстом, а также ссылка с номером карты, центрированы в блоке You can. При этом текст в параграфах, но не заголовках и ссылке с номером карты, растянут на всю доступную ширину (stretch).
        - Все параграфы с текстом и картинка снизу центрированы в блоке Footer.

- ####Pets Page [+2]

    - [x] Выполняются условия:

    Header всегда видимый, и находится сверху страницы, в том числе при скролле.
    Меню в Header становится бургер меню.
    В блоке Our friends находится 3 карточки питомцев, 1 колонка с 3 элементами.
    В блоке Our friends все элементы и блоки с элементами центрированы.
    При открытии страницы, в пагинации должно быть число "1", а кнопки слева неактивны.
    Все параграфы с текстом и картинка снизу центрированы в блоке Footer.

ставим +2.
DOM & events

Максимальный балл за выполнение всех условий: 40.
Main Page
Burger menu

Если выполняются условия:

    Бургер меню будет на странице только при width < 768px.
    При нажатии на бургер меню, с правой стороны будет выезжать блок шириной 320px, в котором будут вертикально расположенные и центрированные элементы меню.
    При открытии присутствует анимация выезда (slide-in).
    В элементах действуют те же правила активности и неактивности, как и в меню на большей ширине экрана.
    Область, выступающая за 320px, затемнена.
    При открытии меню, сама иконка меню поворачивается на 90 градусов.
    При открытии меню присутствует анимация поворота иконки (rotate).
    При открытии меню возможность скролла самой страницы пропадает.
    При нажатии вне границ меню, на затемненную область, или на кнопку с иконкой бургер меню, меню заезжает обратно, а страницу снова можно скроллить.
    При закрытии присутствует анимация заезда (slide-out).
    При закрытии меню, сама иконка меню поворачивается обратно на 90 градусов.
    При закрытии меню присутствует анимация поворота иконки (rotate).
    При нажатии на "About the shelter" страница окажется в начальном положении и меню будет закрыто.

ставим +5.
Slider

Если выполняются условия:

    Слайдер реализован со стрелакми, при нажатии на которые случается переход на новый блок элементов.
    Присутствует анимация смены слайдов. Время анимации, тайминг функция и вид анимации значения не имеют. Главное чтобы переход не случался моментально и без анимации.
    Слайдер бесконечный, не имеет границ, т.е. можно нажимать влево и вправо сколько угодно раз, и каждый раз контент в блоках будет новый.
    При 1280px <= width в блоке слайда 3 карточки питомцев. При нажатии на стрелку, все 3 карточки будут заменены на новые.
    При 768px <= width < 1280px в блоке слайда 2 карточки питомцев. При нажатии на стрелку, 2 карточки будут заменены на новые.
    При width < 768px в блоке слайда 1 карточка питомца. При нажатии на стрелку, меняется всего 1 карточка на новую.

ставим +5.

Каждый новый слайд будет содержать псевдослучайный набор питомцев, т.е. формироваться из исходных объектов в случайном порядке, но с условиями. Если выполняются условия:

    В текущем блоке слайда карточки с птомцами повторяться не будут.
    В следующем блоке, дублирующихся карточек с карточками текущего блока, не будет. Например в сладйдере из 3 элементов, следующий выезжающий слайд будет содержать 3 новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде.

ставим +5.
Popup

Если выполняются условия:

    В слайдере активные элементы выделаяются более светлым цветом заднего фона, и реагируют на hover.
    При нажатии на любое место карточки (блока) с описанием конкретного питомца появляется попап, его контент без учета крестика в правом верхнем углу центрируется по ширине и высоте экрана. Остальная часть страницы затемняется.
    При появлении попапа возможность скролла самой страницы пропадает.
    При нажатии на окно (блок) попапа ничего не происходит.
    При нажатии вне границ попапа, на затемненную область, или на кнопку с крестиком, попап и затемнение исчезают, а страницу снова можно скроллить.
    При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии hover, кнопка получает эффект наведения. Другими словами: кнопка интеректавная. При этом при наведении на окно (блок) самого попапа ничего не происходит.
    При 768px <= width в дизайне попапа есть картинка питомца.
    При width < 768px в дизайне попапа картинки питомца нет.

ставим +5.
Pets Page
Burger menu

Если выполняются условия:

    Бургер меню будет на странице только при width < 768px.
    При нажатии на бургер меню, с правой стороны будет выезжать блок шириной 320px, в котором будут вертикально расположенные и центрированные элементы меню.
    При открытии присутствует анимация выезда (slide-in).
    В элементах действуют те же правила активности и неактивности, как и в меню на большей ширине экрана.
    Область, выступающая за 320px, затемнена.
    При открытии меню, сама иконка меню поворачивается на 90 градусов.
    При открытии меню присутствует анимация поворота иконки (rotate).
    При открытии меню возможность скролла самой страницы пропадает.
    При нажатии вне границ меню, на затемненную область, или на кнопку с иконкой бургер меню, меню заезжает обратно, а страницу снова можно скроллить.
    При закрытии присутствует анимация заезда (slide-out).
    При закрытии меню, сама иконка меню поворачивается обратно на 90 градусов.
    При закрытии меню присутствует анимация поворота иконки (rotate).
    При нажатии на "Our Pets" страница окажется в начальном положении и меню будет закрыто.

ставим +5.
Popup

Если выполняются условия:

    В слайдере активные элементы выделаяются более светлым цветом заднего фона, и реагируют на hover.
    При нажатии на любое место карточки (блока) с описанием конкретного питомца появляется попап, его контент без учета крестика в правом верхнем углу центрируется по ширине и высоте экрана. Остальная часть страницы затемняется.
    При появлении попапа возможность скролла самой страницы пропадает.
    При нажатии на окно (блок) попапа ничего не происходит.
    При нажатии вне границ попапа, на затемненную область, или на кнопку с крестиком, попап и затемнение исчезают, а страницу снова можно скроллить.
    При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии hover, кнопка получает эффект наведения. Другими словами: кнопка интеректавная. При этом при наведении на окно (блок) самого попапа ничего не происходит.
    При 768px <= width в дизайне попапа есть картинка питомца.
    При width < 768px в дизайне попапа картинки питомца нет.

ставим +5.
Pagination

Если выполняются условия:

    При переключении страниц данные меняются (в нашем случае карточки питомцев меняют свой порядок). Эффекты могут быть, а могут и не быть. Отсуствие эффектов не является ошибкой!
    При каждой загрузке или перезагрузке Our Pets в браузере всегда активной является первая страница.
    Кнопка << всегда открывает первую страницу
    Кнопка < открывает предыдущую до текущей страницы
    Кнопка > открывает следующую после текущей страницы
    Кнопка >> всегда открывает последнюю страницу
    В кружке по центру указан номер текущей страницы
    При открытии первой страницы, кнопки << и < - неактивны.
    При открытии последней страницы, кнопки > и >> - неактивны.
    Всего для пагинации сгенерировано 48 объектов питомцев.
    При 1280px <= width на странице одновременно показаны 8 карточек питомцев, а самих страниц 6. Т.е. при нажатии >> открывается шестая страница. Проводим проверку с перезагрузкой страницы на новой ширине экрана.
    При 768px <= width < 1280px на странице одновременно показаны 6 карточек питомцевв, а самих страниц 8. Т.е. при нажатии >> открывается восьмая страница. Проводим проверку с перезагрузкой страницы на новой ширине экрана.
    При width < 768px на странице одновременно показаны 3 карточки питомцев, а самих страниц 16. Т.е. при нажатии >> открывается шестнадцатая страница. Проводим проверку с перезагрузкой страницы на новой ширине экрана.

ставим +5.

Каждая новая страница пагинации будет содержать псевдослучайный набор питомцев, т.е. формироваться из исходных объектов в случайном порядке, но с условиями. Если выполняются условия:

    При неизменных размерах области пагинации, в том числе размерах окна браузера, возвращаясь на страницу под определнным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расрположении, что и были до перехода на другие страницы.
    При загрузке Our Pets формируется массив из 48 объектов питомцев. Каждый из 8 приведенных на макете питомцев должен встречаться ровно 6 раз.
    При каждой загрузке набор элементов, отображенных на странице пагинации, должен формироваться случайно. Для этого делаем перезагрузку вкладки браузера 4 или более раза, и смотрим, чтобы порядок карточек питомцев в пагинации менялся.
    Каждые 8, каждые 6, и каждые 3, карточки питомцев не должны повторяться. Т.е. на одной странице пагинации не может быть одноврменно два одинаковых питомца.
    При 1280px <= width на странице одновременно показаны 8 неповторяющихся карточек питомцев.
    При 768px <= width < 1280px на странице одновременно показаны 6 неповторяющихся карточек питомцев.
    При width < 768px на странице одновременно показаны 3 неповторяющихся карточки питомцев.

ставим +5.
>>>>>>> shelter
