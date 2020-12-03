export default function saveLoadLocalStorage(data = null) {
  if (data) {
    try {
      localStorage.setItem('rs-css-data', data);
      return true;
    } catch (e) {
      console.log('Data is not saved', e);
      return false;
    }
  } else {
    return localStorage.getItem('rs-css-data');
  }
}
