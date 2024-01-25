module.exports = {
    name: "Tips",
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
                    name: 'Top 10 tips:',
                    value: `1. Relax. When you tense up you are sending the wrong message to your training partner (“Im going to go hard”) and you are more likely to be injured by using too much strength.`
                },
                {
                    name: '',
                    value: `2. Tap early, tap often. Tapping out is the ultimate learning tool.` 
                },
                {
                    name: '',
                    value: `3. Nothing matters more than mat time. You have to be on the mat learning and practicing. The best advice I ever got was “just keep showing up”. That was nearly 15 years ago.` 
                },
                {
                    name: '',
                    value: `4. Always be ready to learn. Take nothing for granted. Pay attention to what is being taught. If you do not engage your brain, you will fail to make the mind/body connection needed to succeed.` 
                },
                {
                    name: '',
                    value: `5. Its a marathon, not a sprint. Becoming proficient at BJJ requires years of training. Ignore the natural drive to achieve quick results.` 
                },
                {
                    name: '',
                    value: `6. There are days when you will not want to show up and those are the most important days to show up. You will be smashed and not want to come back. Just come back. Trust me.` 

                },
                {
                    name:   '',
                    value: `7. Try to learn one thing each week as a white belt. Literally one thing per week. If you dont start that way you will quickly become overwhelmed (unless you have prior training in ground-based fighting).` 
                },
                {
                    name:   '',
                    value: `8. Find a higher belt (purple or higher) that will “adopt” you. You are much more likely to stick with BJJ (and learn faster) if you have someone to help you with the mental, physical, and technical aspects. The mental toll can be huge and it helps to have someone to talk to.` 
                },
                {
                    name:   '',
                    value: `9. Ignore the belt system as a sign of progress. Belt promotions are complex decisions that involve skill level, mat time, competition performance, dedication to the art, teaching ability, and dozens of other variables. All you should worry about is getting on the mat as much as possible.` 
                },
                {
                    name:   '',
                    value: `10. Take a shower immediately after training in order to prevent staph/skin infections. When you are sick, you cannot train, which means you cannot learn. Wash yourself and your gi after each training session.`
                },
              
              
               
            ],
            timestamp: new Date().toISOString(),
           
        };
        await message.author.send({ embeds: [exampleEmbed] });
       
    },
};


