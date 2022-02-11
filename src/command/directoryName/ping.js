if (message.author.bot) return;

        const SayMessage = message.content.slice(4).trim();

        message.channel.send("**" + SayMessage + "**")

        message.channel.send("- " + `**${message.author}**`)

    }

});
