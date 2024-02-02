module.exports = {
    name: "Schedule",
    async execute(message) {

        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Schedule',
            url: 'https://www.inertiabjj.com/',
            author: {
                name: 'Inertia BJJ bot',
                icon_url: 'https://images.squarespace-cdn.com/content/v1/5c0629cef2e6b13c0ba6b0df/c46c99fc-751c-4970-90a4-f7a46485ee97/Inertia+Brazilian+Jiu+Jitsu_U1.png?format=1500w',
            },
            description: 'Schedule is subject to change. Please confirm with Coach Justin if there are any questions.' +
                        '\nThere is also a "new-gym-schedule" chat that contains schedule information.' +
                        '\nPlease send me the word classes to get a breakdown of what the class types are.',

            fields: [
                {
                    name: 'Monday',
                    value: `\n* BJJ 101: 6:30pm-7:30pm`+
                    `\n* OpenMat 7:30pm-8:30pm` 
                }, 
                {
                    name: 'Tuesday',
                    value: `\n* Morning BJJ: 9:00am-10:00am`+
                    `\n* BJJ 101: 6:30pm-7:30pm`+
                    `\n* OpenMat | Competition: 7:30pm-8:30pm` 
                },
                {
                    name: 'Wednesday',
                    value:  `\n* BJJ 101: 6:30pm-7:30pm`+
                    `\n* OpenMat | No gi: 7:30pm-8:30pm` 
                },
                {
                    name: 'Thursday',
                    value:  `\n* Morning BJJ: 9:00am-10:00am`+
                    `\n* BJJ 101: 6:30pm-7:30pm`+
                    `\n* OpenMat | Competition: 7:30pm-8:30pm` 
                },
                {
                    name: 'Friday',
                    value: `\n* Morning BJJ: 9:00am-10:00am`+
                    `\n* BJJ 101: 6:30pm-7:30pm`+
                    `\n* OpenMat: 7:30pm-8:30pm` 
                },
                {
                    name: 'Saturday',
                    value:  `\n* OpenMat: 10:00am-12:30pm`+
                    `\n* OpenMat | Competition: 12:30pm-1:30pm` 
                },
                {
                    name: 'Sunday',
                    value: `* Closed`
                },
                
              
              
            ],
            timestamp: new Date().toISOString(),





        // await message.author.send(
        //     `**Monday:**`+ 
        //         `\n* BJJ 101: 6:30pm-7:30pm`+
        //         `\n* OpenMat 7:30pm-8:30pm` +
        //    `\n**Tuesday:**`+
        //         `\n* Morning BJJ: 9:00am-10:00am`+
        //         `\n* BJJ 101: 6:30pm-7:30pm`+
        //         `\n* OpenMat/Competition: 7:30pm-8:30pm` +
        //     `\n**Wednesday:**` + 
        //         `\n* BJJ 101: 6:30pm-7:30pm`+
        //         `\n* OpenMat 7:30pm-8:30pm` +
        //     `\n**Thursday:**`+
        //         `\n* Morning BJJ: 9:00am-10:00am`+
        //         `\n* BJJ 101: 6:30pm-7:30pm`+
        //         `\n* OpenMat 7:30pm-8:30pm` +
        //         `\n* OpenMat/Competition: 7:30pm-8:30pm` +
        //     `\n**Friday:**`+
        //         `\n* Morning BJJ: 9:00am-10:00am`+
        //         `\n* BJJ 101: 6:30pm-7:30pm`+
        //         `\n* OpenMat 7:30pm-8:30pm` +
        //     `\n**Saturday:**`+
        //      `\n* OpenMat: 10:00am-12:30pm`+
        //      `\n* OpenMat/Competition: 12:30pm-1:30pm` +
        //     `\n**Sunday:**`+
        //         `\n* Closed` 
        // )
        }
        await message.author.send({ embeds: [exampleEmbed] });

    },
};
