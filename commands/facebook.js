module.exports = {
    name: 'facebook',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('https://www.facebook.com/groups/2170678733094690/');
    }
}