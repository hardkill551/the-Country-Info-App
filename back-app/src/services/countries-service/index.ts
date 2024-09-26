import countriesRepository from '../../repositories/countries-repository';

async function getCountries() {
  return await countriesRepository.getCountries();
}

async function getCountryInfo(countryCode: string) {
  const borderCountries =
    await countriesRepository.getBorderCountries(countryCode);
  const populationData =
    await countriesRepository.getPopulationData(countryCode);
  const flagUrl = await countriesRepository.getFlagUrl(countryCode);

  return {
    borderCountries,
    populationData,
    flagUrl,
  };
}

const countriesService = {
  getCountries,
  getCountryInfo,
};

export default countriesService;
