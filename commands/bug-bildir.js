const Discord = require('discord.js');

module.exports = {
    run: (client, message, args, db) => {
  let lang = client.locale(client[`serverData_${message.guild.id}`].language)['bugbildir'];
  const bug = args.slice(0).join(" ");
  if(!bug) return message.channel.error(lang['belirt']);
  const hook = new Discord.WebhookClient("1192111032383057960", "JIk5nU29mcZNpEZ5eHEQCkS-mc7nHZPBcgE2l-a6WO3QQEeMYyqJLzFPfRkW74oHO9ii");
  hook.send(new Discord.MessageEmbed().setTitle("Bug tespit edildi...").setColor("#F4F4F4").setDescription(`
  > **Bug bulan**: ${message.author.tag} \`(${message.author.id})\`
  > **Sunucu**: ${message.guild.name} \`(${message.guild.id})\`
  
  __**Bug: ${bug}**__
  `)
  );
  return message.channel.success(lang['bildirdi']);
    },
    config: {
        name: 'bug-bildir',
        aliases: ["bug-report"],
        desc: 'açıklama',
        perms: [],
        enabled: true
    }
};
