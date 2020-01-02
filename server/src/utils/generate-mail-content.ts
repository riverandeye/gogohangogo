export const generateMailContent = (authKey: string) => {
  const link = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/users/verify/${authKey}`;
  const mailContent = `<p>안녕하세요. NBread입니다. 아래의 링크를 눌러 이메일을 인증해주세요.</p>
                       <br><br>
                       <a href=${link}>${link}</a>`;
  return mailContent;
};

export default generateMailContent;
