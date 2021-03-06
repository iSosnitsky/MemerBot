require('dotenv').config();

exports.run = (bot, msg, args, rawArgs) => {
  bot.generateInvite(321600).then(invite => {
    msg.channel.send(`Invite the bot to your server:\n${invite}`)
    .catch(err => {
      msg.channel.send(`Error: ${err.message}`);
    });
  });

};

exports.help = {
  name: 'invite',
  cooldown: 3,
  usage: 'invite',
  description: 'Invite the bot to your server'
};
