
module.exports = {
    name: "poll",
    async execute(message) {
        if (!message.guild) {
            message.channel.send(
                `Used to send polls. Can create on normal guild channels. Please start message with !poll and seperate poll options by + seperators` +
                `\n"!poll question +pollOption1 +pollOption2"` +
                `\nFor example: !poll Which position is your favorite? +mount +sidecontrol +guard`
                )
                return
        }

        const msg =  message.content.toLowerCase()
        separator = "+";
        message.content.toLowerCase()

        let pollOptions = msg.split(separator)
        pollOptions.shift()
      
        if (pollOptions.length > 0) {
            question = msg.split(separator)[0]
            question = question.split(' ')
            question.shift()
            let finalQuestion = question.join(' ')
            const alphabet = [
                "🇦",
                "🇧",
                "🇨",
                "🇩",
                "🇪",
                "🇫",
                "🇬",
                "🇭",
                "🇮",
                "🇯",
                "🇰",
                "🇱",
                "🇲",
                "🇳",
                "🇴",
                "🇵",
                "🇶",
                "🇷",
                "🇸",
                "🇹",
                "🇺",
                "🇻",
                "🇼",
                "🇽",
                "🇾",
                "🇿",
            ];

            if (pollOptions.length > alphabet.length) {
                return message.channel.send(
                    "Too many poll options. Please use less than 26.. My goodness what kind of poll is this?"
                );
            }
            const alphabetIconArray = [];

            let count = 0;
            pollOptions.forEach((option) => {
                alphabetIconArray.push(alphabet[count] + " " + option);
                count++;
            });

            const exampleEmbed = {
                color: 0x0099ff,
                Title: `📊 ${finalQuestion}`,
                // .setAuthor(`${message.author.username}`);
                Description: alphabetIconArray.join("\n\n")
             }
         
            message.channel.send({ embeds: [exampleEmbed] })
            .then((msg) => {
                for (let i = 0; i < pollOptions.length; i++) {
                    msg.react(alphabet[i]);
                }
            });
        } else message.channel.send('What kinda poll has no options? "!poll which is better? +cats +dogs')

    },
};
