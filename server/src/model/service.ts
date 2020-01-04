import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { parsePacket } from '../utils/parse-packet';

const ServiceModel = {
  async getServiceWithId(Id: number) {
    const [data] = await db.promise().query(
      `
      Select * from ${DB_TABLE.SERVICES} where ${DB_COLUMN.SERVICES.ID}=?
        `,
      [Id],
    );

    return parsePacket(data[0]);
  },

  async getAllService() {
    const [data] = await db
      .promise()
      .query(`Select * from ${DB_TABLE.SERVICES}`);

    return parsePacket(data);
  },
};

export default ServiceModel;
