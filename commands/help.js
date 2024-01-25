
module.exports = {
    name: "Help",
    async execute(message) {
        await message.author.send(
            `Hello there! I'm a bot that Inertia BJJ made to help answer some questions. Feel free to interact with me.` +
            `\nI look for certain words and will reply with info if any of those words match.`+
            `\nIf nothing matches I'll send back a message advising nothing matched.`+
            `\nFeel free to send me direct messages to get back the commands and read through them.` +
            `\nFeel free to offer suggestions by sending the word suggestions and the suggestion ex: suggestion can we make this bot tell jokes?`
         ) 

       
    },
};
