module.exports = (client, Discord) => {
    console.log('KajalCode is Online!');
    const memberCounter = require('./../../counters/memberCounter')
    memberCounter(client);
}