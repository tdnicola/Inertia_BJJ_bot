module.exports = {
    name: "Welcome",
    async execute(message) {
        await message.author.send(
            'Hello there and welcome to the Inertia BJJ Discord\'s server!'+
            '\n\nThis is a welcome message with some general details about BJJ. I also have some responses to commands. Send me the word help for more info.'+
            '\n\nIf you\'re experienced with BJJ these tips most likely are already known.' +

            `\n\n**Mat Rules:**` +
                `\n* No shoes on the mats at any time.` +
                `\n* All band aids, wraps, knee pads, mouth guards, tape, must be cleaned up by the individual before leaving the mat area.`+

            `\n\n**Hygiene:**` +
                `\n* Gi and No Gi equipment should be washed after each and every practice session.` +
                `\n* Shower before/after each practice. It is a solo sport but we do practice together.` +
                `\n* Finger nails and toe nails should be trimmed (Nobody likes to be clawed from a cat)`+
                `\n* No open wounds exposed (please cover or wear necessary bandages to cover any superficial injuries).`+
                `\n* If you're feeling unwell please stay home and rest. Jiu Jitsu will always be there.`+
        
                `\n\n**Equipment:**`+
                `\n* At Inertia BJJ we do not have any color or type gi requirement, any color gi/no equipment is suitable. Send me the word equipment for some suggestions on gear if needed.`
            
        );

    },
};
