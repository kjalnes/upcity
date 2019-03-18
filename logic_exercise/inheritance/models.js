import uuid from 'uuid';

export class Subscriber {
    constructor({ name, interests }) {
        this.id = uuid();
        this.name = name;
        this.interests = interests;
    }
}

export class Magazine {
    constructor({ name, qualities }) {
        this.id = uuid();
        this.name = name;
        this.qualities = qualities;
    }

    modifyQualities(qualities) {
        this.qualities = qualities;
    }
}

class Collection {
    constructor() {
        this.state = [];
    }

    add(model) {
        this.state.push(model);
    }
}

export class Magazines extends Collection {
    // return only the magazines that have all the interests of the subscriber
    getMagazinesBySubscriber(subscriber) {
        return this.state.filter(magazine => isMatch(subscriber, magazine));
    }
}

export class Subscribers extends Collection {
    // return the subscribers of the magazine
    getSubscribersByMagazine(magazine) {
        return this.state.filter(subscriber => isMatch(subscriber, magazine));
    }
}

function isMatch(subscriber, magazine) {
    return subscriber.interests.every(interest => magazine.qualities.includes(interest));
}
