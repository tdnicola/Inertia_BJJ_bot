module.exports = {
    name: "Terms",
    async execute(message) {
        await message.author.send(`Some common terms in Jiu Jitsu` +
            `\nCommon Terms used in class:` +
            `\nFeed” being a good training partner, mindful to the structure, strategies, or tactics being taught so your partner can feel the move. ` +
            `\nProgressive drilling or positional work: This works on a scale where specific positions are practiced. We work from a very light or little resistance gradually increasing the difficulty level.` +
            `\nUke: This is the student whom which the given move is demonstrated on.` +
            `\nJiu Jitsu Chess/ Flow rolling: This is where move by move techniques are performed in an “I go, you go” fashion. This is done smoothly and slowly. Pace can be picked up into a flow once skill acquisition and movement awareness is achieved.`
        );
    },
};
