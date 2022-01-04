module.exports = async (client) =>{
    const config = require('../config.json');
    const guild = client.guilds.cache.get(config.serverid);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(config.channelid);
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}