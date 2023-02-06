import { Request, Response, Router } from 'express';

const condominiumRoutes = Router();

condominiumRoutes.get('/', (_: Request, response: Response) => {
  return response.json({
    test: 'ok',
  });
});

export { condominiumRoutes };
