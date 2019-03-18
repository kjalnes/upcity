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
    getMagazinesBySubscriber(subscriber) {
        return this.state.filter(magazine => {
            const { interests } = subscriber;

            // return only the magazines that have all the interests of the subscriber
            return interests.every(interest => magazine.qualities.indexOf(interest) > -1);
        });
    }
}

export class Subscribers extends Collection {
    getSubscribersByMagazine(magazine) {
        return this.state.filter(subscriber => {
            const { interests } = subscriber;

            // return only the magazines that have all the interests of the subscriber
            return interests.every(interest => magazine.qualities.indexOf(interest) > -1);
        });
    }
}

