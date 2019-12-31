import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';

const PartyModel = {
  async getPartyWithId(Id: number) {
    const [
      data,
    ] = await db
      .promise()
      .query(
        `Select * from ${DB_TABLE.PARTIES} where ${DB_COLUMN.PARTIES.ID}=?`,
        [Id],
      );

    return data;
  },
};

export default PartyModel;
