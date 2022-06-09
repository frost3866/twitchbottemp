// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// this is just template stuff

var SECRET = process.env.SECRET;

const tmi = require("tmi.js");
const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: "frostynbot",
    password: SECRET,
  },
  channels: ["frost_vlr",""],
});
client.connect().catch(console.error);
client.on("message", (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === "!hello") {
    client.say(channel, `@${tags.username}, heya!`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === "!tdk") {
    client.say(channel, `@${tags.username}, yapım aşamasında!`);
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === "!bot") {
    client.say(channel, `@${tags.username}, fiyatlandırma ve komutlar hakkında bilgi almak için instagram.com/frostynstudios üzerinden iletişime geçiniz.`);
  }
});