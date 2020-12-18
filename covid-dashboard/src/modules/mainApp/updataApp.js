import { properties } from '../Properties/Properties';
import {
  allWorldPerPeriod,
  allCountriesPerPeriod,
  countryPerPeriod,
  flagAndPopulation,
} from '../queries/Queries';
import { changeChartData } from '../chart/chart';
import { processingDataForChart } from './processingDataForChart';

export const updateApp = () => {
  const { country, /* population, */ type } = properties;
  let { period } = properties;

  if (typeof period === 'boolean') {
    period = period ? 2 : false;
  }

  const urlForFlagAndPopulation = flagAndPopulation();
  const urlAllCountry = allCountriesPerPeriod(period);
  let urlCurrentData;

  if (country) {
    urlCurrentData = countryPerPeriod(country, period);
  } else {
    urlCurrentData = allWorldPerPeriod(period);
  }

  Promise.all([
    fetch(urlForFlagAndPopulation),
    fetch(urlAllCountry),
    fetch(urlCurrentData),
  ])
    .then(async ([flagAndPop, allCountry, currentData]) => {
      return {
        flagAndPop: await flagAndPop.json(),
        allCountriesInfo: await allCountry.json(),
        covidData: await currentData.json(),
      };
    })
    .then((data) => {
      console.log('Data form Promise :=>\n', data);

      // Все данные в трех массивах в data.
      // Нужно их обработать в зависимости от Страны и периода.
      // Сами данные отобраны нормально, нужно просто их подготовить для передачи в модули отрисовки
      // Для жтого сделайте функцию внешнюю, в которую заберите нужные данные, а верните из нее уже подготовленные данные.

      const { arrData, locCountry } = processingDataForChart(data, country);
      // Вот вызов отрисовки Графика для примера
      changeChartData(arrData, locCountry, type, period);
    })
    .catch((err) => {
      console.log('Error updating information in the app!', err);
    });
};
