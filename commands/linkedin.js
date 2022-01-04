module.exports = {
    name: 'linkedin',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('https://www.linkedin.com/in/kajalkapoor/');
    }
}