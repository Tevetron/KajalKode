module.exports = {
    name: 'newsletter',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('http://www.kajalkapoor.com/');
    }
}