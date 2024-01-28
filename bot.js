const {
    Client,
    Events,
    GatewayIntentBits,
    Partials,
    Collection,
} = require("discord.js");
const { token } = require("./config.json");
const fs = require("node:fs");
const path = require("node:path");
const foldersPath = path.join(__dirname, "commands");
const commandPath = fs.readdirSync(foldersPath);
const welcome = require(`./welcome.js`);


// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
});

client.commands = new Collection();

for (const file of commandPath) {
    const filePath = path.join(foldersPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    welcome(client)
});

let commandArray = [];
client.commands.forEach((command) => {
    commandArray.push(command.name);
});
let commandString = commandArray.join(", ");

const sendToAdmin = (admin, chatMessage) => {
    try {
        client.users.send(
            admin,
            `\nUser: ${chatMessage.author.username} sent the discord bot: "${chatMessage}"`
        );
    } catch (error) {
        console.log(`Error sending to admin: ${error}`);
    }
};


client.on("messageCreate", (msg) => {
    if (msg.author.bot) return;

    let isWelcomeMessage = msg.type === 7; //Welcome
    if (isWelcomeMessage) {
        let welcome = client.commands.find((file) => file.name == 'Welcome').execute
        welcome(msg)
        msg.author.send(`Welcome to the server, ${msg.author.username}!`);
        client.channels.cache
            .get("513160441187270661") //IphoneGrabbies channel
            // .get("969519390951366676") //InertiaBJJ channel
            .send(`${msg.author.username} has joined the server!`);
    }
    if (msg.content.startsWith('!poll') ) {
        let poll = client.commands.find((file) => file.name == 'Poll').execute
        poll(msg)
    }
    if (!msg.guild) {
        let wordsMatch = client.commands.size;
        let noMatch = 0;

        client.commands.forEach((file) => {
            if (msg.content.toLowerCase().includes(file.name.toLowerCase())) {
                file.execute(msg);
            } else {
                noMatch += 1;
            }
        });
        if (noMatch == wordsMatch) {
            msg.author.send(`I'm sorry I didn't find a match of my commands. \nPlease try sending me one of the following commands: ${commandString}`);
        }
        sendToAdmin('254838552960040960',msg);
        // sendToAdmin('839161115359314020',msg);

    }
});

// Testing for DM only
// Log in to Discord with your client's token
client.login(token);
