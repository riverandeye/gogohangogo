import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';

const UserModel = {
  async getUserWithId(Id: number) {
    const [
      data,
    ] = await db
      .promise()
      .query(`Select * from ${DB_TABLE.USERS} where ${DB_COLUMN.USERS.ID}=?`, [
        Id,
      ]);

    return data;
  },
};

export default UserModel;
