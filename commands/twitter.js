module.exports = {
    name: 'twitter',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('https://twitter.com/real_kajalk');
    }
}