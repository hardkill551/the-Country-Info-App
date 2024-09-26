import countriesService from '../services/countries-service';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export async function getCountries(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const countries = await countriesService.getCountries();
    return res.status(httpStatus.OK).send(countries);
  } catch (error) {
    next(error);
  }
}

export async function getCountryInfo(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { countryCode } = req.params;

  try {
    const countryInfo = await countriesService.getCountryInfo(countryCode);
    return res.status(httpStatus.OK).send(countryInfo);
  } catch (error) {
    next(error);
  }
}
