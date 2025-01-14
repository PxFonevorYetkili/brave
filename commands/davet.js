const Discord = require('discord.js');
const moment = require('moment');
const config = require("../config.js")
module.exports = {
 run: async (client, message, args) => {
  let lang = client.locale(client[`serverData_${message.guild.id}`].language);
        message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("BLURPLE").setImage(config.embed.image)
            .setDescription(`${lang['bot']['davetMesaj'].replace("{author}", message.author.username)}`)
            .addField(`${lang['bot']['links']}`, `**[${lang['bot']['invite']}](https://discord.com/api/oauth2/authorize?client_id=1191768101298110536&permissions=8&scope=bot) | [${lang['bot']['support']}](${config.links.support})**`)
        )
  },
    config: {
        name: 'davet',
        aliases: ['links','invite','link','bağlantılar','bot'],
        desc: 'açıklama',
        perms: [],
        enabled: true
    }
};
