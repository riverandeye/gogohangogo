import { Router } from 'express';
import ServiceController from '../controller/service';

const ServiceRouter = Router();

ServiceRouter.get('/', ServiceController.getAllService);

export default ServiceRouter;
