import { Router } from 'express';
import { getCountries, getCountryInfo } from '../controllers';

const countriesRouter = Router();

countriesRouter.get('/', getCountries);
countriesRouter.get('/:countryCode', getCountryInfo);

export { countriesRouter };
