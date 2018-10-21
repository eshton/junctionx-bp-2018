const EventEmitter = require('events');

const defaultTimeout = 100;

class Poller extends EventEmitter {
    constructor(timeout = defaultTimeout) {
        super();
        this.timeout = timeout;
    }
    poll() { 
        setTimeout(() => this.emit('poll'), this.timeout);
    }
    onPoll(cb) { 
        this.on('poll', cb); 
    }
}

module.exports = Poller;