import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { CreateParty } from './Interface/party';
import { parsePacket } from '../utils/parse-packet';
import ServiceModel from './service';

const PartyModel = {
  async getPartyWithId(Id: number) {
    const [data] = await db.promise().query(
      `
      Select * from ${DB_TABLE.PARTIES} where ${DB_COLUMN.PARTIES.ID}=? As P
      Inner join ${DB_TABLE.SERVICES} As S
      On P.${DB_COLUMN.PARTIES.SERVICEID} = S.${DB_COLUMN.SERVICES.ID}
        `,
      [Id],
    );

    return parsePacket(data[0]);
  },

  async getPartyListWithUserId(Id: number) {
    const [data] = await db.promise().query(
      `Select * 
        from ${DB_TABLE.USERPARTIES} where ${DB_COLUMN.USERPARTIES.USERID}=? Order by partyId
        Left outer join ${DB_TABLE.PARTIES}
        On ${DB_TABLE.USERPARTIES}.partyId = ${DB_TABLE.PARTIES}.id`[Id],
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
