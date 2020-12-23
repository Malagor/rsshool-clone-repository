import { localStorageCountryList } from '../mainApp/localStorageCountryList';

export const createListOfCountries = () => {
  const listOfCountries = document.querySelector('.setting__list');
  const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
  list.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('setting-list-item');
    li.innerText = item;
    listOfCountries.append(li);
  })
  const li = document.createElement('li');
  li.className = 'setting-list-item item-main';
  li.innerText = 'All World';
  listOfCountries.prepend(li);

  return listOfCountries;
}
