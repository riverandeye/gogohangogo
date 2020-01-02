import webpush, { PushSubscription } from 'web-push';
import { AlarmMessage } from './interface/alarm-message';

webpush.setGCMAPIKey(process.env.GOOGLE_API_KEY);
webpush.setVapidDetails(
  'mailto:nbbang04@gmail.com',
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY,
);

const pushAlarmService = {
  sendPushAlarmOnce(
    subscription: PushSubscription,
    alarmMessage: AlarmMessage,
  ) {
    const message = this.createAlarmMessage(alarmMessage);
    webpush.sendNotification(subscription, message).catch(e => {
      return false;
    });

    return true;
  },

  createAlarmMessage(alarmMessage: AlarmMessage) {
    return JSON.stringify(alarmMessage);
  },
};

export default pushAlarmService;
