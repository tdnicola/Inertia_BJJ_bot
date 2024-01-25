const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "Equipment",
    async execute(message) {

        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Equipment Info',
            url: 'https://www.inertiabjj.com/',
            author: {
                name: 'Inertia BJJ bot',
                icon_url: 'https://images.squarespace-cdn.com/content/v1/5c0629cef2e6b13c0ba6b0df/c46c99fc-751c-4970-90a4-f7a46485ee97/Inertia+Brazilian+Jiu+Jitsu_U1.png?format=1500w',
            },
            fields: [
                {
                    name: 'Regular field title',
                    value: `\nWhere to get a Gi or No Gi gear? 

                    \nRetail shops: \nDojo Outfitters\nBridge City Fight Shop 
                    
                    \nSome Online Suggestions:\nwartribe gear \nKingz \nMaeda \nFuji \n93 Brand \nInverted Gear \nbjjhq.com sells random daily gear at discount.
                    
                    \nAny Judo or BJJ GI can do the job
                    \nBe aware that if you plan on travelling or competing Some schools/competitions may have Color requirements on gis (for example: only wear black/blue/white gis).
                    \n At InertiaBJJ we do not have any such requirement, any color gi/no equipment is suitable.`,
                },
              
            ],
            timestamp: new Date().toISOString(),
           
        };
        await message.author.send({ embeds: [exampleEmbed] });

    },
};
