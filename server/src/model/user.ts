import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { UpdatedUser, CreatedUser } from './Interface/user';

const UserModel = {
  async getUserWithId(Id: number){
    const [
      data,
    ] = await db
      .promise()
      .query(`Select * from ${DB_TABLE.USERS} where ${DB_COLUMN.USERS.ID}=?`, [
        Id,
      ]);

    return data;
  },

  async getUserWithEmail(email: string){
    const [
      data,
    ] = await db
      .promise()
      .query(`Select * from  ${DB_TABLE.USERS} where ${DB_COLUMN.USERS.EMAIL}=?`, [
      email,
    ]);
    console.log(data)
    return data;
  },

  async createUser(user: CreatedUser){
    const { name, email, avatar, agreeAlarm } = user;
    await db
    .promise()
    .query(`Insert Into ${DB_TABLE.USERS} Value(NULL, ?, ?, ?, ?, ?, ?)`, [
      name, email, avatar, agreeAlarm, 0, false
    ])
  },

  async updateUser(Id: number, updatedUser: UpdatedUser){
    const updatedUserColumn = Object.keys(updatedUser);
    const queryColumns = updatedUserColumn.map((key)=>(`${DB_COLUMN.USERS[key.toUpperCase()]}=?`)).join(',');
    await db
    .promise()
    .query(`Update ${DB_TABLE.USERS} Set ${queryColumns} Where ${DB_COLUMN.USERS.ID}=?`, 
      updatedUserColumn.map((key) => updatedUser[key]).concat(Id)
    )
  },
};

export default UserModel;
