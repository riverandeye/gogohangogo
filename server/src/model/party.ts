import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { CreateParty } from './Interface/party';
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
      Select P.title, P.introduction, P.personnel, P.capacity, P.createdAt, P.adminUserId, S.name as ottName, S.avatar as ottImage from
      (Select title, introduction, personnel, capacity, createdAt, adminUserId, serviceId from ${DB_TABLE.PARTIES} where status=1) P
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

  async createParty(party: CreateParty) {
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

  async leaveParty(partyId, userId) {
    await db
      .promise()
      .query(
        `delete from ${DB_TABLE.USERPARTIES} where ${DB_COLUMN.USERPARTIES.USERID}=? and ${DB_COLUMN.USERPARTIES.PARTYID}=?`,
        [userId, partyId],
      );
  },
};

export default PartyModel;
