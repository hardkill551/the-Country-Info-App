import { request } from '../../src/utils/request';
import axios from 'axios';

jest.mock('axios');

describe('Request Utils - Unit Tests', () => {
  describe('get()', () => {
    it('should fetch data successfully with GET request', async () => {
      const mockData = { data: 'test data' };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await request.get('https://example.com');
      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith('https://example.com');
    });

    it('should throw an error if GET request fails', async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error('GET request failed'));

      await expect(request.get('https://example.com')).rejects.toThrow('GET request failed');
      expect(axios.get).toHaveBeenCalledWith('https://example.com');
    });
  });

  describe('post()', () => {
    it('should post data successfully', async () => {
      const mockData = { data: 'posted data' };
      const postData = { someKey: 'someValue' };
      (axios.post as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await request.post('https://example.com', postData);
      expect(result).toEqual(mockData);
      expect(axios.post).toHaveBeenCalledWith('https://example.com', postData);
    });

    it('should throw an error if POST request fails', async () => {
      const postData = { someKey: 'someValue' };
      (axios.post as jest.Mock).mockRejectedValue(new Error('POST request failed'));

      await expect(request.post('https://example.com', postData)).rejects.toThrow('POST request failed');
      expect(axios.post).toHaveBeenCalledWith('https://example.com', postData);
    });
  });
});
