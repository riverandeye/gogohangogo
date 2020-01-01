import { Request, Response, NextFunction } from 'express';

import UserModel from '../model/user';
import { ID } from '../constants';
import EmailService from '../service/mail';
import { User } from '../model/Interface/user';

const UserController = {
  async getUserWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const user = await UserModel.getUserWithId(Id);
    res.send(user);
  },

  async updateUser(req:Request, res: Response, next: NextFunction){
    const Id = Number(req.params[ID]);
    const updatedUser = req.body; 
    await UserModel.updateUser(Id, updatedUser);
    res.send( await UserModel.getUserWithId(Id));
  },

  async createUser(req: Request, res: Response, next: NextFunction){
    const createdUser = req.body;
    await UserModel.createUser(createdUser);
    res.send( await UserModel.getUserWithEmail(createdUser.email));
  },

  async checkDuplicateUserEmail(req: Request, res: Response, next: NextFunction){
    const email = req.body.email;
    const users = await UserModel.getUserWithEmail(email);
    console.log(users)

    // if(user && user.isValid == 1){
    //   res.status()
    // }
    next();
  },

  async sendVerificationMail(req: Request, res: Response, next: NextFunction){
    const email = req.body.email;
    res.send( await EmailService.sendVerificationMail(email));
  }
};

export default UserController;
