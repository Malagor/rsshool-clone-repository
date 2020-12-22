export const updateListOfCountries = (input) => {
  const listOfCountries = document.querySelectorAll('.country-item');  
    listOfCountries.forEach((item) => {item.style.display = ''});
    input.value = '';
}
