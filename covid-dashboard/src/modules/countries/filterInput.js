export const filterInput = (input) => {
  const filter = input.value.toUpperCase();
  const listOfCountries = document.querySelectorAll('.country-item'); 
  for ( let i = 0; i < listOfCountries.length; i += 1) {
    const countryName = listOfCountries[i].querySelector('.country-name');
    if (countryName.innerHTML.toUpperCase().indexOf(filter) === 0) {
      listOfCountries[i].style.display = '';
    } else {
      listOfCountries[i].style.display = 'none';
    }
  }
}