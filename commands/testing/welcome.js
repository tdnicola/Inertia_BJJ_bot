module.exports = {
    name: "Welcome",
    async execute(message) {
        await message.author.send("Hello there and welcome to the Inertia BJJ Discords server!");
    },
};
