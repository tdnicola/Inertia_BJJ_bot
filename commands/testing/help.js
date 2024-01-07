module.exports = {
    name: "Help",
    async execute(message) {
        await message.author.send("Help Message!");
    },
};
