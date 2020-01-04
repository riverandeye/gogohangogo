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

  async getPartyListWithUserId(Id: number) {
    const [data] = await db.promise().query(
      `Select * 
        from (select * from ${DB_TABLE.USERPARTIES} where ${DB_COLUMN.USERPARTIES.USERID}=? Order by partyId) UP
        Left outer join ${DB_TABLE.PARTIES} P
        On UP.partyId = P.id`,
      [Id],
    );

    return parsePacket(data);
  },

  async createParty(party: CreateParty) {
    const {
      status,
      title,
      personnel,
      capacity,
      account,
      authKey,
      isAccountValid,
      serviceId,
    } = party;

    await db.promise().query(
      `
        Insert Into ${DB_TABLE.PARTIES} (status, title, personnel, capacity, account, authKey, isAccountValid, serviceId)
         Value(?,?,?,?,?,?,?,?)`,
      [
        status,
        title,
        personnel,
        capacity,
        account,
        authKey,
        isAccountValid,
        serviceId,
      ],
    );
  },
};

export default PartyModel;
