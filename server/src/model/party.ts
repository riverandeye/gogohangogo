import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { CreatedParty, UpdatedParty } from './Interface/party';
import { parsePacket } from '../utils/parse-packet';

const PartyModel = {
  async getPartyWithId(Id: number) {
    const [data] = await db.promise().query(
      `
      Select * from 
      (Select * from ${DB_TABLE.PARTIES} where ${DB_COLUMN.PARTIES.ID}=?) P
      Inner join 
      ${DB_TABLE.SERVICES} S
      On P.${DB_COLUMN.PARTIES.SERVICEID} = S.${DB_COLUMN.SERVICES.ID}
        `,
      [Id],
    );

    return parsePacket(data[0]);
  },

  async getPartyList() {
    const [data] = await db.promise().query(`
      Select P.title, P.introduction, P.personnel, P.createdAt, P.adminUserId, P.priority, S.name as ottName, S.avatar as ottImage from
      (Select title, introduction, personnel, priority, createdAt, adminUserId, serviceId from ${DB_TABLE.PARTIES} where status=1) P
      Left outer join ${DB_TABLE.SERVICES} S
      On P.serviceId=S.id
      `);
    return parsePacket(data);
  },

  async getPartyListWithUserId(Id: number) {
    const [data] = await db.promise().query(
      `
      Select P.title, P.introduction, P.personnel, P.capacity, P.createdAt, P.account, P.adminUserId, P.status, S.name as ottName, S.avatar as ottImage from
      (Select * 
        from (select userId, partyId from ${DB_TABLE.USERPARTIES} where ${DB_COLUMN.USERPARTIES.USERID}=? Order by partyId) UP
        Left outer join ${DB_TABLE.PARTIES} PP
        On UP.partyId = PP.id) P
        Left outer join ${DB_TABLE.SERVICES} S
        On P.serviceId=S.id
        `,
      [Id],
    );

    return parsePacket(data);
  },

  async createParty(party: CreatedParty) {
    const {
      status,
      title,
      personnel,
      introduction,
      capacity,
      account,
      authKey,
      adminUserId,
      isAccountValid,
      serviceId,
    } = party;

    await db.promise().query(
      `
        Insert Into ${DB_TABLE.PARTIES} (status, title, personnel, introduction, capacity, account, authKey, isAccountValid, serviceId, adminUserId, createdAt, updatedAt)
         Value(?,?,?,?,?,?,?,?,?,?, NOW(), NOW())`,
      [
        status,
        title,
        personnel,
        introduction,
        capacity,
        account,
        authKey,
        isAccountValid,
        serviceId,
        adminUserId,
      ],
    );

    const [
      createdParty,
    ] = await db
      .promise()
      .query(`select * from Parties where authKey=?`, [authKey]);

    return createdParty[0];
  },

  async updateParty(partyId: number, updatedParty: UpdatedParty) {
    const updatedPartyColumn = Object.keys(updatedParty);
    const queryColumns = updatedPartyColumn
      .map(key => `${DB_COLUMN.PARTIES[key.toUpperCase()]}=?`)
      .join(',');
    await db
      .promise()
      .query(
        `Update ${DB_TABLE.PARTIES} Set ${queryColumns} Where ${DB_COLUMN.PARTIES.ID}=?`,
        updatedPartyColumn.map(key => updatedParty[key]).concat(partyId),
      );
  },

  async leaveParty(partyId: number, userId: number) {
    await db
      .promise()
      .query(
        `delete from ${DB_TABLE.USERPARTIES} where ${DB_COLUMN.USERPARTIES.USERID}=? and ${DB_COLUMN.USERPARTIES.PARTYID}=?`,
        [userId, partyId],
      );
  },
};

export default PartyModel;
