const Discord = require("discord.js");
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

module.exports.run = async (client, message, args) => {
        const slotOne = slots[Math.floor(Math.random() * slots.length)];
        const slotTwo = slots[Math.floor(Math.random() * slots.length)];
        const slotThree = slots[Math.floor(Math.random() * slots.length)];
        if (slotOne === slotTwo && slotOne === slotThree) {
            return message.reply(stripIndents`
                ${slotOne}|${slotTwo}|${slotThree}
                Wow! You won! Great job... er... luck!
            `);
        }
        return message.reply(stripIndents`
            ${slotOne}|${slotTwo}|${slotThree}
            Aww... You lost... Guess it's just bad luck, huh?
        `);
    }
    
module.exports.help = {
    name: "luck"
}