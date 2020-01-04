import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { UpdatedUser, CreatedUser } from './Interface/user';
import { parsePacket } from '../utils/parse-packet';
import { PushSubscription } from 'web-push';

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

  async getUserListWithPartyId(partyId: number) {
    const [data] = await db.promise().query(
      `
        Select * from  ${DB_TABLE.USERS} U
        Inner join (Select * from ${DB_TABLE.USERPARTIES} where ${DB_COLUMN.USERPARTIES.PARTYID}=?) UP
        On U.${DB_COLUMN.USERS.ID} = UP.${DB_COLUMN.USERPARTIES.USERID}
         `,
      [partyId],
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
    const {
      name,
      introduction,
      email,
      avatar,
      password,
      authKey,
      agreeAlarm,
      alarmSubscription,
      status,
    } = user;
    await db
      .promise()
      .query(
        `Insert Into ${DB_TABLE.USERS} Value(NULL, ?, ?, ?, ?, ?, ?, ?, ?, NULL, NULL, ?)`,
        [
          name,
          introduction,
          email,
          avatar,
          password,
          authKey,
          agreeAlarm,
          JSON.stringify(alarmSubscription),
          status,
        ],
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

  async updateUserSubscription(Id: number, subscription: PushSubscription) {
    await db
      .promise()
      .query(`UPDATE Users SET alarmSubscription=?, agreeAlarm=1 WHERE id=?`, [
        JSON.stringify(subscription),
        Id,
      ]);

    return await this.getUserWithId(Id);
  },

  async deleteUserSubscription(Id: number) {
    await db
      .promise()
      .query(
        `UPDATE Users SET alarmSubscription=NULL, agreeAlarm=0 WHERE id=?`,
        [Id],
      );

    return await this.getUserWithId(Id);
  },
};

export default UserModel;
