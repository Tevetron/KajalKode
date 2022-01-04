module.exports = {
    name: 'help',
    description: "this is a list command",
    async execute(client, message, args, Discord) {
        message.channel.send('Available Commands:\nFacebook, Instagram, LinkedIn, Newsletter, Notion, Twitter, Youtube');
    }
}