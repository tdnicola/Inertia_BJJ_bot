module.exports = {
    name: "Suggestion",
    async execute(message) {
        await message.author.send("Suggestion logged, thank you for your time!");
    },
};
