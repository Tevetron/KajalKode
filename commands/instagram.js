module.exports = {
    name: 'instagram',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('https://www.instagram.com/kajalk28/');
    }
}