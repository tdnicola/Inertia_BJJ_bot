module.exports = {
    name: "Equipment",
    async execute(message) {
        await message.author.send(
            `Where to get a Gi or No Gi gear? 

            Retail shops:
            Dojo Outfitters 
            Bridge City Fight Shop 
            
            Some Online Suggestions:
            wartribe gear 
            Kingz 
            Maeda 
            Fuji
            93 Brand 
            Inverted Gear
            bjjhq.com sells random daily gear at discount.
            
            Any Judo or BJJ GI can do the job
            Be aware that if you plan on travelling or competing Some schools/competitions may have Color requirements on gis (for example: only wear black/blue/white gis).
            At InertiaBJJ we do not have any such requirement, any color gi/no equipment is suitable.
            
            `
            );
    },
};
