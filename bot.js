const {
    Client,
    Events,
    GatewayIntentBits,
    Partials,
    Collection,
    ActivityType
} = require("discord.js");
const { token } = require("./config.js");

const fs = require("node:fs");
const path = require("node:path");
const foldersPath = path.join(__dirname, "commands");
const commandPath = fs.readdirSync(foldersPath);


// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
});

client.commands = new Collection();
let commandArray = [];


for (const file of commandPath) {
    const filePath = path.join(foldersPath, file);
    const command = require(filePath);

    // Set a new item in the Collection with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
    commandArray.push(command.name);

}

let commandString = commandArray.join(", ");

const ADMIN_IDS = ['254838552960040960', '839161115359314020'];
const adminUserCache = new Map();

const getAdminUser = async (adminId) => {
    if (!adminUserCache.has(adminId)) {
        adminUserCache.set(adminId, await client.users.fetch(adminId));
    }
    return adminUserCache.get(adminId);
};

const sendAdminDM = async (adminId, text) => {
    try {
        const adminUser = await getAdminUser(adminId);
        await adminUser.send(text);
    } catch (error) {
        console.error(`Error sending to admin ${adminId}: ${error}`);
    }
};

const sendToAdmin = (chatMessage) => {
    ADMIN_IDS.forEach((adminId) =>
        sendAdminDM(adminId, `\nUser: ${chatMessage.author.username} sent the discord bot: "${chatMessage.content}"`)
    );
};

const notifyAdminsOfError = async (context, error) => {
    console.error(`${context}: ${error}`);
    await Promise.all(ADMIN_IDS.map((adminId) => sendAdminDM(adminId, `${context}: ${error}`)));
};

const matchAndExecute = async (msg, replyTarget) => {
    const content = msg.content.toLowerCase();
    const matchedCommand = client.commands.find((cmd) => content.includes(cmd.name.toLowerCase()));
    if (matchedCommand) {
        await matchedCommand.execute(msg);
    } else {
        await replyTarget.send(`I'm sorry I didn't find a match of my commands. \nPlease try sending me one of the following commands: ${commandString}`);
    }
};

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    readyClient.user.setActivity({
        name: 'you roll',
        type: ActivityType.Watching
    })

});


client.on(Events.GuildMemberAdd, async (member) => {
    if (member.user.bot) return;

    try {
        const welcome = client.commands.get('Welcome');
        await welcome.sendWelcomeMessage(member.user);
        client.channels.cache
            .get("839353404065316874")
            .send(`${member.user.username} has joined the server!`);
        await sendAdminDM('254838552960040960', `${member.user.username} (${member.user.id}) just joined the server.`);
    } catch (error) {
        await notifyAdminsOfError('Error in welcome message', error);
    }
});

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;

    //Normal Commands
    try {
        if (!msg.guild) {
            matchAndExecute(msg, msg.author);
            sendToAdmin(msg);
        }

    } catch (error) {
        await notifyAdminsOfError('Error in private message command', error);
    }

    //new student channels
    try {
        if (msg.channelId == 1203057635994112030) {
            matchAndExecute(msg, msg.channel);
            sendToAdmin(msg);
        }
    } catch (error) {
        await notifyAdminsOfError('Error in new student message command', error);
    }

});

client.login(token);
