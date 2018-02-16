const CircleDisc = require('circledisc');

const hook = new CircleDisc(process.env.WEBHOOK_URL, process.env.PORT);

hook.startListening();

hook.on('ready', () => console.log('Ready!'));

hook.on('request', body => console.log(Buffer.concat(body).toString()));

hook.on('build', (service, body) => {
    switch (service) {
    case 'travis': {
        console.log(body);
        break;
    }
    default: {
        console.log(`Build complete on ${service}!`);
    }
    }
});

