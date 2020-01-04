import ServiceModel from '../model/service';
import { Request, Response, NextFunction } from 'express';

const ServiceController = {
  async getAllService(req: Request, res: Response, next: NextFunction) {
    const allService = await ServiceModel.getAllService();
    res.json(allService);
  },
};

export default ServiceController;
