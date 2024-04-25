const Instagram = require("instagram-web-api");
const username = "abdulloevcompany",
  password = "928663323taj";

const client = new Instagram({ username, password });

(async () => {
  await client.login();
  const profile = await client.getProfile();
    console.log('data from instagram')
  console.log(profile);
})();
