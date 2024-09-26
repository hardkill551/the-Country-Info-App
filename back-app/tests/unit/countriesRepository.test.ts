import countriesRepository from '../../src/repositories/countries-repository';
import { request } from '../../src/utils/request';

jest.mock('../../src/utils/request'); // Mockando o request

describe('Countries Repository - Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks antes de cada teste
  });

  describe('getCountries()', () => {
    it('should fetch a list of countries from the external API', async () => {
      const mockCountries = [{ name: 'Brazil' }, { name: 'Argentina' }];
      (request.get as jest.Mock).mockResolvedValue(mockCountries);

      const result = await countriesRepository.getCountries();
      expect(result).toEqual(mockCountries);
      expect(request.get).toHaveBeenCalledWith(process.env.NAGER_AVAILABLE_COUNTRIES_URL);
      expect(request.get).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if the external API fails', async () => {
      (request.get as jest.Mock).mockRejectedValue(new Error('API error'));

      await expect(countriesRepository.getCountries()).rejects.toThrow('API error');
      expect(request.get).toHaveBeenCalledWith(process.env.NAGER_AVAILABLE_COUNTRIES_URL);
    });
  });

  describe('getBorderCountries()', () => {
    it('should fetch border countries for a given country from the external API', async () => {
      const countryCode = 'BR';
      const mockBorders = ['Argentina', 'Paraguay'];
      (request.get as jest.Mock).mockResolvedValue({ borders: mockBorders });

      const result = await countriesRepository.getBorderCountries(countryCode);
      expect(result).toEqual(mockBorders);
      expect(request.get).toHaveBeenCalledWith(`${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`);
    });

    it('should return an empty array if no borders are returned', async () => {
      const countryCode = 'BR';
      (request.get as jest.Mock).mockResolvedValue({});

      const result = await countriesRepository.getBorderCountries(countryCode);
      expect(result).toEqual([]);
      expect(request.get).toHaveBeenCalledWith(`${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`);
    });

    it('should throw an error if the external API fails', async () => {
      const countryCode = 'BR';
      (request.get as jest.Mock).mockRejectedValue(new Error('API error'));

      await expect(countriesRepository.getBorderCountries(countryCode)).rejects.toThrow('API error');
      expect(request.get).toHaveBeenCalledWith(`${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`);
    });
  });

  describe('getPopulationData()', () => {
    it('should fetch population data for a country', async () => {
      const countryCode = 'BR';
      const mockCountryName = 'Brazil';
      const mockPopulationData = [{ year: 2021, value: 213317639 }];
      (request.get as jest.Mock).mockResolvedValue({ commonName: mockCountryName });
      (request.post as jest.Mock).mockResolvedValue({ data: mockPopulationData });

      const result = await countriesRepository.getPopulationData(countryCode);
      expect(result).toEqual(mockPopulationData);
      expect(request.get).toHaveBeenCalledWith(`${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`);
      expect(request.post).toHaveBeenCalledWith(process.env.COUNTRIES_NOW_POPULATION_URL, { country: mockCountryName });
    });

    it('should throw an error if the external API fails', async () => {
      const countryCode = 'BR';
      (request.get as jest.Mock).mockRejectedValue(new Error('API error'));

      await expect(countriesRepository.getPopulationData(countryCode)).rejects.toThrow('API error');
    });
  });

  describe('getFlagUrl()', () => {
    it('should fetch the flag URL for a country', async () => {
      const countryCode = 'BR';
      const mockCountryName = 'Brazil';
      const mockFlagUrl = 'https://countriesnow.space/images/flags/brazil.png';
      (request.get as jest.Mock).mockResolvedValue({ commonName: mockCountryName });
      (request.post as jest.Mock).mockResolvedValue({ data: { flag: mockFlagUrl } });

      const result = await countriesRepository.getFlagUrl(countryCode);
      expect(result).toEqual(mockFlagUrl);
      expect(request.get).toHaveBeenCalledWith(`${process.env.NAGER_COUNTRY_INFO_URL}/${countryCode}`);
      expect(request.post).toHaveBeenCalledWith(process.env.COUNTRIES_NOW_FLAG_URL, { country: mockCountryName });
    });

    it('should throw an error if the external API fails', async () => {
      const countryCode = 'BR';
      (request.get as jest.Mock).mockRejectedValue(new Error('API error'));

      await expect(countriesRepository.getFlagUrl(countryCode)).rejects.toThrow('API error');
    });
  });
});
