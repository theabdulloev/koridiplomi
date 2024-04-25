import { toast } from "sonner";

const Instagram = require("instagram-web-api");
const username = "abdulloevcompany",
  password = "928663323taj";

const client = new Instagram({ username, password });

(async () => {
  await client.login();
  const profile = await client.getProfile();
  console.log("data from instagram");
  console.log(profile);
  const photo = "https://bekor.vercel.app/open-space-office.jpg";
  await client.uploadPhoto({ photo, caption: "Post from api", post: "feed" });
  toast("Upload Photo to Instagram")
})();
