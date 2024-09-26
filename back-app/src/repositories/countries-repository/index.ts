import { request } from '../../utils/request';

async function getCountries() {
  const url = process.env.NAGER_AVAILABLE_COUNTRIES_URL;
  return await request.get(url);
}

async function getBorderCountries(countryCode: string) {
  const url = `${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`;
  const response = await request.get(url);
  return response.borders || [];
}

async function getPopulationData(countryCode: string) {
  const countryInfoUrl = `${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`;
  const countryInfoResponse = await request.get(countryInfoUrl);
  const countryName = countryInfoResponse.commonName;

  const populationUrl = process.env.COUNTRIES_NOW_POPULATION_URL;
  const response = await request.post(populationUrl, {
    country: countryName,
  });

  return response.data || [];
}

async function getFlagUrl(countryCode: string) {
  const countryInfoUrl = `${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`;
  const countryInfoResponse = await request.get(countryInfoUrl);
  const countryName = countryInfoResponse.commonName;

  const flagUrl = process.env.COUNTRIES_NOW_FLAG_URL;
  const response = await request.post(flagUrl, {
    country: countryName,
  });

  return response.data.flag || '';
}

const countriesRepository = {
  getCountries,
  getBorderCountries,
  getPopulationData,
  getFlagUrl,
};

export default countriesRepository;
