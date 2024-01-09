module.exports = {
    name: "Positions",
    async execute(message) {

      const exampleEmbed = {
        color: 0x0099ff,
        title: 'Positions Info',
        url: 'https://www.inertiabjj.com/',
        author: {
            name: 'Inertia BJJ bot',
            icon_url: 'https://images.squarespace-cdn.com/content/v1/5c0629cef2e6b13c0ba6b0df/c46c99fc-751c-4970-90a4-f7a46485ee97/Inertia+Brazilian+Jiu+Jitsu_U1.png?format=1500w',
        },
        fields: [
            {
                name: 'Major positions:',
                value: `Closed Guard
                Half Gauard
                Open Guard
                Turtle
                Mount
                Side Control
                Back`,
            },
          
        ],
        timestamp: new Date().toISOString(),
       
    };
    await message.author.send({ embeds: [exampleEmbed] });
    },
};


