import countriesService from '../../src/services/countries-service';
import countriesRepository from '../../src/repositories/countries-repository';

jest.mock('../../src/repositories/countries-repository');

describe('Countries Service - Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCountries()', () => {
    it('should return a list of countries', async () => {
      const mockCountries = [{ name: 'Brazil' }, { name: 'Argentina' }];
      (countriesRepository.getCountries as jest.Mock).mockResolvedValue(mockCountries);

      const result = await countriesService.getCountries();
      expect(result).toEqual(mockCountries);
      expect(countriesRepository.getCountries).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if repository fails', async () => {
      (countriesRepository.getCountries as jest.Mock).mockRejectedValue(new Error('Repository error'));

      await expect(countriesService.getCountries()).rejects.toThrow('Repository error');
      expect(countriesRepository.getCountries).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCountryInfo()', () => {
    const countryCode = 'BR';

    it('should return detailed country information', async () => {
      const mockBorders = ['Argentina', 'Paraguay'];
      const mockPopulationData = [{ year: 2021, value: 213317639 }];
      const mockFlagUrl = 'https://countriesnow.space/images/flags/brazil.png';

      (countriesRepository.getBorderCountries as jest.Mock).mockResolvedValue(mockBorders);
      (countriesRepository.getPopulationData as jest.Mock).mockResolvedValue(mockPopulationData);
      (countriesRepository.getFlagUrl as jest.Mock).mockResolvedValue(mockFlagUrl);

      const result = await countriesService.getCountryInfo(countryCode);

      expect(result).toEqual({
        borderCountries: mockBorders,
        populationData: mockPopulationData,
        flagUrl: mockFlagUrl,
      });

      expect(countriesRepository.getBorderCountries).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getPopulationData).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getFlagUrl).toHaveBeenCalledWith(countryCode);
    });

    it('should throw an error if any repository call fails', async () => {
      (countriesRepository.getBorderCountries as jest.Mock).mockRejectedValue(new Error('Repository error'));

      await expect(countriesService.getCountryInfo(countryCode)).rejects.toThrow('Repository error');
      expect(countriesRepository.getBorderCountries).toHaveBeenCalledWith(countryCode);
    });
  });
});
