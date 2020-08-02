const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "👋🏻입궐방👋🏻";
const byeChannelName = "👋🏻입궐방👋🏻";
const welcomeChannelComment = "안녕하싀긔 노예 서지원이라 하오.";
const byeChannelComment = "꺼지싀긔.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});


client.on('message', (message) => {
  if(message.content === '지원아') {
    message.reply('과자 훔치러 가자~');
  } 
});
client.on('message', (message) => {
  if(message.content === '민수야') {
    message.reply('우리는 최고의 섹파야!');
  } 
});
client.on('message', (message) => {
  if(message.content === '정우야 영고가자') {
    message.reply('싫어 머그랑 마차 갈꺼야');
  } 
});
client.on('message', (message) => {
  if(message.content === '지원아 놀아줘') {
    message.reply('뻐킹 아베다영이랑 놀아');
  } 
});
client.on('message', (message) => {
  if(message.content === '!설줜봇 도움말') {
    message.reply('민수야 . 지원아 . 정우야 영고가자 . 지원아 놀아줘 . 전민준! . 지원아 안녕? . 의형제 말해봐 . 민수야 안녕을 말하세요!');
  } 
});
client.on('message', (message) => {
  if(message.content === '전민준!') {
  message.reply('펑맨펑맨~ 필리핀 가자~');
  } 
});
client.on('message', (message) => {
  if(message.content === '지원아 안녕?') {
  message.reply('내가 좀 인기가 많지~ 훗');
  } 
});
client.on('message', (message) => {
  if(message.content === '민수야 안녕?') {
  message.reply('내가 좀 인기가 많지~ 훗');
  } 
});
client.on('message', (message) => {
  if(message.content === '의형제 말해봐') {
  message.reply('로펑 . 작약 . 머그');
  } 
});
client.login(token);