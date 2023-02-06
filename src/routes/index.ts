import { Router } from 'express';
import { condominiumRoutes } from './condominium';

const routes = Router();

routes.use('/condominium', condominiumRoutes);

export { routes };
