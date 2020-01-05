import db from './db';
import { DB_TABLE, DB_COLUMN } from '../constants';
import { CreatedUserParty } from './Interface/userparty';
import { parsePacket } from '../utils/parse-packet';
import { PushSubscription } from 'web-push';

const UserPartyModel = {
  async createUserParty(userparty: CreatedUserParty) {
    const { userId, partyId } = userparty;

    await db
      .promise()
      .query(
        `Insert Into ${DB_TABLE.USERPARTIES} (userId, partyId) Value(?, ?)`,
        [userId, partyId],
      );
  },
};

export default UserPartyModel;
