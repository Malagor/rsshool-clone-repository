# malagor-JS2020Q3
Private repository for @malagor

## Momentum
1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/ready-projects/momentum.md
2. Screenshot:
   ![](https://webpolygon.by/wp-content/uploads/2020/10/momentum3.jpg)
3. Deploy: https://rolling-scopes-school.github.io/malagor-JS2020Q3/momentum/
4. Done xx.xx.xxxx / deadline 25.19.2020
5. Score: 50 / 50
  
- ####Базовая функциональность [12 / 12]
    - [x] время выводится в 24-часовом формате, обновляется каждую секунду
    - [x] выводится день недели, дата, месяц, например: "Пятница, 25 ноября"
    - [x] можно ввести имя пользователя и его цель. Для ввода данных используется клавиша Enter
    - [x] имя пользователя и его цель сохраняются в local storage и отображаются после обновления страницы
    - [x] фоновое изображение и приветствие изменяются в зависимости от времени суток (утро, день, вечер, ночь)
    - [x] при клике в поле ввода текст, который там был, исчезает, если пользователь ничего не ввёл или ввёл пустую строку, текст восстанавливается

- ####Смена фонового изображения [10 / 10]
    - [x] фоновые изображения меняются каждый час и выбираются в зависимости от времени суток (утро, день, вечер, ночь)
    - [x] есть кнопка, при клике по которой можно пролистать все фоновые изображения за сутки
    - [x] изображения пролистываются в том же порядке, в котором они менялись бы в реальном времени (утро, день, вечер, ночь), начиная с того, которое соотвествует текущему времени суток
    - [x] при обновлении страницы формируется новый список фоновых изображений на текущие сутки
    - [x] при клике по кнопке для обновления фонового изображения происходит плавная смена фоновых изображений, нет ситуации, когда пользователь видит частично загрузившееся изображение

- ####Цитата дня [6 / 6]
    - [x] при загрузке приложения выводится цитата или другой короткий текст (высказывание, шутка, анекдот и т.д.)
    - [x] при перезагрузке страницы цитата заменяется на другую
    - [x] есть кнопка, при клике по которой меняется цитата

- ####Прогноз погоды [12 / 12]
    - [x] в приложении есть возможность указать город
    - [x] для указанного пользователем города выводится прогноз погоды
    - [x] указанный пользователем город сохраняется в local storage и отображается при обновлении страницы. Также отображается прогноз погоды для него
    - [x] прогноз погоды включает в себя данные о температуре, относительной влажности воздуха, скорости ветра
    - [x] прогноз погоды включает в себя иконку погоды
    - [x] если пользователь вводит пустую строку, данные не меняются, отображается прежний прогноз погоды. Если пользователь вводит данные, для которых API погоды не возвращает результат, выводится уведомление об ошибке в человекочитаемом формате

- ####Адаптивный дизайн [10 / 10]
    - [x] элемены приложения оптимально занимают площадь страницы
    - [x] приложение корректно отображается как на компьютере, так и на мобильных устройствах. Отсутствует горизонтальная полоса прокрутки. Минимальное разрешение экрана, при котором проверяем корректность отображения приложения - 320px
    - [x] при смене даты и времени, смене цитаты, смене фонового изображения, содержание страницы не дёргается, размеры блоков остаются прежними, кнопки для смены цитаты и смены фонового изображения остаются на своих местах
    - [x] шрифт достаточного размера (не меньше 14рх) и контрастности Colour contrast checking tool, хорошо читается на любом фоне. Можно использовать полупрозрачный overlay (есть в коллекции изображений) или другой способ, позволяющий обеспечить читаемость текста.
    - [x] интерактивность кликабельных элементов не сводится к свойству cursor:pointer. Стили при наведении, фокусе, клике меняются плавно (используйте свойство transition или @keyframes)

