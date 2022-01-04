module.exports = {
    name: 'youtube',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('https://www.youtube.com/channel/UC3R2GTBtftwKr0Jq5fA8dvw/featured');
    }
}