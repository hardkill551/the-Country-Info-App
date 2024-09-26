import supertest from 'supertest';
import app from '../../src/app'; // Certifique-se de que está exportando o app corretamente
import countriesRepository from '../../src/repositories/countries-repository';

jest.mock('../../src/repositories/countries-repository'); // Mockando o repositório

const request = supertest(app);

describe('Countries Routes - Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /countries', () => {
    it('should return a list of countries', async () => {
      const mockCountries = [{ name: 'Brazil' }, { name: 'Argentina' }];
      (countriesRepository.getCountries as jest.Mock).mockResolvedValue(mockCountries);

      const response = await request.get('/countries');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCountries);
      expect(countriesRepository.getCountries).toHaveBeenCalledTimes(1);
    });

    it('should return 500 if there is a repository error', async () => {
      (countriesRepository.getCountries as jest.Mock).mockRejectedValue(new Error('Repository error'));

      const response = await request.get('/countries');

      expect(response.status).toBe(500);
      // Verificamos o status 500, sem precisar verificar o corpo da resposta
      expect(countriesRepository.getCountries).toHaveBeenCalledTimes(1);
    });
  });

  describe('GET /countries/:countryCode', () => {
    const countryCode = 'BR'; // Código de país simulado

    it('should return detailed country information', async () => {
      const mockCountryInfo = {
        borderCountries: ['Argentina', 'Paraguay'],  // Ajustado para 'borderCountries'
        populationData: [{ year: 2021, value: 213317639 }], // Ajustado para 'populationData'
        flagUrl: 'https://countriesnow.space/images/flags/brazil.png',
      };
      (countriesRepository.getBorderCountries as jest.Mock).mockResolvedValue(mockCountryInfo.borderCountries);
      (countriesRepository.getPopulationData as jest.Mock).mockResolvedValue(mockCountryInfo.populationData);
      (countriesRepository.getFlagUrl as jest.Mock).mockResolvedValue(mockCountryInfo.flagUrl);

      const response = await request.get(`/countries/${countryCode}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCountryInfo);
      expect(countriesRepository.getBorderCountries).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getPopulationData).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getFlagUrl).toHaveBeenCalledWith(countryCode);
    });

    it('should return 500 if there is an error fetching border countries', async () => {
      (countriesRepository.getBorderCountries as jest.Mock).mockRejectedValue(new Error('Repository error'));

      const response = await request.get(`/countries/${countryCode}`);

      expect(response.status).toBe(500);
      expect(countriesRepository.getBorderCountries).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getBorderCountries).toHaveBeenCalledTimes(1);
    });

    it('should return 500 if there is an error fetching population data', async () => {
      (countriesRepository.getBorderCountries as jest.Mock).mockResolvedValue(['Argentina']);
      (countriesRepository.getPopulationData as jest.Mock).mockRejectedValue(new Error('Repository error'));

      const response = await request.get(`/countries/${countryCode}`);

      expect(response.status).toBe(500);
      expect(countriesRepository.getPopulationData).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getPopulationData).toHaveBeenCalledTimes(1);
    });

    it('should return 500 if there is an error fetching flag URL', async () => {
      (countriesRepository.getBorderCountries as jest.Mock).mockResolvedValue(['Argentina']);
      (countriesRepository.getPopulationData as jest.Mock).mockResolvedValue([{ year: 2021, value: 213317639 }]);
      (countriesRepository.getFlagUrl as jest.Mock).mockRejectedValue(new Error('Repository error'));

      const response = await request.get(`/countries/${countryCode}`);

      expect(response.status).toBe(500);
      expect(countriesRepository.getFlagUrl).toHaveBeenCalledWith(countryCode);
      expect(countriesRepository.getFlagUrl).toHaveBeenCalledTimes(1);
    });
  });
});
