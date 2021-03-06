const CircleDisc = require('circledisc');

const hook = new CircleDisc(process.env.WEBHOOK_URL, process.env.PORT);

hook.startListening();

hook.on('ready', () => console.log('Ready!'));

hook.on('build', service => console.log(`Build on ${service} finished!`));

