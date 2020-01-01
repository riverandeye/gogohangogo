import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { UpdatedUser, CreatedUser } from './Interface/user';
import { parsePacket } from '../utils/parse-packet';

const UserModel = {
  async getUserWithId(Id: number) {
    const [
      data,
    ] = await db
      .promise()
      .query(`Select * from ${DB_TABLE.USERS} where ${DB_COLUMN.USERS.ID}=?`, [
        Id,
      ]);

    return parsePacket(data);
  },

  async getUserWithEmail(email: string) {
    const [
      data,
    ] = await db
      .promise()
      .query(
        `Select * from  ${DB_TABLE.USERS} where ${DB_COLUMN.USERS.EMAIL}=?`,
        [email],
      );

    return parsePacket(data);
  },

  async getUserWithAuthKey(authKey: string) {
    const [
      data,
    ] = await db
      .promise()
      .query(
        `Select * from ${DB_TABLE.USERS} where ${DB_COLUMN.USERS.AUTHKEY}=?`,
        [authKey],
      );

    return parsePacket(data);
  },

  async createUser(user: CreatedUser) {
    const { name, email, avatar, password, authKey, agreeAlarm } = user;
    console.log(name, email);
    await db
      .promise()
      .query(
        `Insert Into ${DB_TABLE.USERS} Value(NULL, ?, ?, ?, ?, ?, ?, 0, 0)`,
        [name, email, avatar, password, authKey, agreeAlarm],
      );
  },

  async updateUser(Id: number, updatedUser: UpdatedUser) {
    const updatedUserColumn = Object.keys(updatedUser);
    const queryColumns = updatedUserColumn
      .map(key => `${DB_COLUMN.USERS[key.toUpperCase()]}=?`)
      .join(',');
    await db
      .promise()
      .query(
        `Update ${DB_TABLE.USERS} Set ${queryColumns} Where ${DB_COLUMN.USERS.ID}=?`,
        updatedUserColumn.map(key => updatedUser[key]).concat(Id),
      );
  },
};

export default UserModel;
