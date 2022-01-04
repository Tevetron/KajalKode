module.exports = {
    name: 'youtube',
    description: "this is a link command",
    async execute(client, message, args, Discord) {
        message.channel.send('Available Commands:');
        message.channel.send('Facebook, Instagram, LinkedIn, Newsletter, Notion, Twitter, Youtube')
    }
}