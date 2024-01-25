module.exports = {
    name: "Rules",
    async execute(message) {

      const exampleEmbed = {
        color: 0x0099ff,
        title: 'Inertia Mat rules:',
        url: 'https://www.inertiabjj.com/',
        author: {
            name: 'Inertia BJJ bot',
            icon_url: 'https://images.squarespace-cdn.com/content/v1/5c0629cef2e6b13c0ba6b0df/c46c99fc-751c-4970-90a4-f7a46485ee97/Inertia+Brazilian+Jiu+Jitsu_U1.png?format=1500w',
        },
        fields: [
            {
                name: 'Hygiene:',
                value: `\n*Gi and No Gi equipment should be washed after each and every practice session.` +
                `\n*Shower before/after each practice. It is a solo sport but we do practice together.` +
                `\n*Finger nails and toe nails should be trimmed (Nobody likes to be clawed from a cat)`+
                `\n*No open wounds exposed (please cover or wear necessary bandages to cover any superficial injuries).`+
                `\n*If you're feeling unwell please stay home and rest. Jiu Jitsu will always be there.`
            },
              {
                name: 'Equipment:',
                value: `\n*Rash guard or athletic shirt must be worn during No Gi practices.`+
                `\n*Mouth guard is recommended, not mandatory.`
              },
              {
                name: 'School:',
                value: `\n*Please take all water bottles, drink holders, food containers to the garbage.`+
               `\n*Some schools require bowing on and off the mat. Inertia BJJ does not require that.`

              },
              {
                name: 'Mat Rules:',
                value: `\n*No shoes on the mats at any time.` +
                `\n*All band aids, wraps, knee pads, mouth guards, tape, must be cleaned up by the individual before leaving the mat area.`
              }
        ],
        timestamp: new Date().toISOString(),
       
    };
    await message.author.send({ embeds: [exampleEmbed] });

    },
};



