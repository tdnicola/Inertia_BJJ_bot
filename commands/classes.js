
module.exports = {
    name: "Classes",
    async execute(message) {
        await message.author.send(
            `** BJJ 101: What should I expect? **` +
            `\nBJJ 101 class has three phases:`+
            `\n* Introduction `+ 
            `\n* Isolation ` + 
            `\n* Integration ` +
            `\n\nThe introduction phase of class is an instructional portion of the class explaining theory, mechanics, and concepts to the entire group. This will run in parts breaking each part down for roughly 5 minutes for each segment. ` +          
            `\n\nThe isolation phase is where you as the students will break off with a partner practicing the mechanics with zero resistance with one another. The practice time for each segment will vary depending on how quickly the group catches on or what questions arise.` +
            `\n\nThe integration portion will be what we call “positional sparring.” This portion of the class is run on a timer with a variety of scenarios working through the techniques, and tools learned from the class. The training should give each student a challenge with a progressive manner of resistance. Each scenario will have a basic objective. Once the objective is reached within the round the two players will reset and start again in the same position.`+
            `\n\n**OpenMat: What should I expect? **` +
            `\n\nAll inertia students are welcome and encouraged to train at open mat. This training time operates more like an open lab where students are working with one another drilling the concepts, tools, and techniques they have learned throughout the week. Students are also participating in open sparring whole parts of the game as well as smaller more specific sections of positions. The open mat is not lead by any one Coach, rather there are many different levels within the room helping one another to deepen their understanding of BJJ. Each student is free to practice in their own way, this means they are not required to “roll” they can attend to study others sparring, practice solo movements, or just partner work on the mechanics.\n` 
         ) 
         await message.author.send(
            `\n\n**Competition training: **` +
             `\nAn more advanced class. We will do faster paced drills based on an upcoming competition ruleset.`+
             `\nThis is not a class with technique instruction. If you're interested in competing please speak with Coach Justin to chat more about it.`

         )
    },
};
