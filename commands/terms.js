module.exports = {
    name: "Terms",
    async execute(message) {


        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Help Info',
            url: 'https://www.inertiabjj.com/',
            author: {
                name: 'Inertia BJJ bot',
                icon_url: 'https://images.squarespace-cdn.com/content/v1/5c0629cef2e6b13c0ba6b0df/c46c99fc-751c-4970-90a4-f7a46485ee97/Inertia+Brazilian+Jiu+Jitsu_U1.png?format=1500w',
            },
            fields: [
                {
                    name: 'Some common terms in Jiu Jitsu:',
                    value: `\nFeed:being a good training partner, mindful to the structure, strategies, or tactics being taught so your partner can feel the move. 
                    \nProgressive drilling or positional work: This works on a scale where specific positions are practiced. We work from a very light or little resistance gradually increasing the difficulty level.
                    \nUke: This is the student whom which the given move is demonstrated on.
                    \nJiu Jitsu Chess/ Flow rolling: This is where move by move techniques are performed in an “I go, you go” fashion. This is done smoothly and slowly. Pace can be picked up into a flow once skill acquisition and movement awareness is achieved.`,
                },
              
               
            ],
            timestamp: new Date().toISOString(),
           
        };
        await message.author.send({ embeds: [exampleEmbed] });
    },
};
