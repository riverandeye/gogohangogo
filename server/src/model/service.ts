import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { parsePacket } from '../utils/parse-packet';

const ServiceModel = {
  async getServiceWithId(name: string) {
    const [data] = await db.promise().query(
      `
      Select * from ${DB_TABLE.SERVICES} where ${DB_COLUMN.SERVICES.NAME}=?
        `,
      [name],
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
