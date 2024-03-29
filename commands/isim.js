
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.member.roles.cache.some(r => r.name === "Kamp Kılavuzu") || message.member.roles.cache.some(r => r.name === "Rol Denetmeni") || message.member.hasPermission(["MANAGE_NICKNAMES", "ADMINISTRATOR"])){

        var user = message.mentions.users.first();
        if(!user) return message.reply({embed: {color: "RED", description: "Böyle bir kullanıcı yok."}});



        args.shift();
        let nickname = args.join(" ");
        if(!nickname) return message.reply({embed: {color: "RED", description: "Bir kullanıcı adı girmeniz gerek!"}});

        let member = message.guild.members.cache.get(user.id);
        try{
            member = await message.guild.members.fetch(user);
        }catch{
            member = null;
        }
        if(member.hasPermission(["ADMINISTRATOR"])) return message.reply({embed: {color: "RED", description: "İsmini değiştirmeye çalıştığın kişi bir admin. Bunu sen yapamazsın"}})

        member.setNickname(nickname);
        return message.reply({embed: {color: "GREEN", description: `Başarılı bir şekilde **${user.tag}**ın kullanıcı adı **${nickname}** olarak değiştirildi.`}});
            
      
    }
    else{
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }
        

};


exports.help = {
    name: 'isim',
    aliases: ['isim'],
    description: 'isim',

  }