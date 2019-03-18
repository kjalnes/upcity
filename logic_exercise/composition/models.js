import uuid from 'uuid';

// magazine factory function
export const magazine = ({ name, qualities }) => {
    const state = {
        id: uuid(),
        name,
        qualities
    };

    return Object.assign(
        state,
        canUpdate(state)
    );
};

// subscriber factory function
export const subscriber = ({ name, interests }) => {
    const state = {
        id: uuid(),
        name,
        interests
    };

    return Object.assign(
        state,
        canUpdate(state)
    );
};

// magazines factory function
const magazines = () => {
    const state = {
        collection: []
    };

    return Object.assign(
        state,
        canAdd(state),
        canGetMagazinesBySubscriber(state)
    );
};

// subscribers factory function
const subscribers = () => {
    const state = {
        collection: []
    };

    return Object.assign(
        state,
        canAdd(state),
        canGetSubscribersByMagazine(state)
    );
};

/*
 * Composition methods
 * Creates closures to retain access to state
 */

const canUpdate = state => ({
    update: newState => state = Object.assign(state, { ...newState })
});

const canAdd = state => ({
    add: item => Object.assign(state, { collection: state.collection.concat(item) })
});

const canGetMagazinesBySubscriber = state => ({
    getMagazinesBySubscriber: subscriber => {
        return state.collection.filter(magazine => isMatch(subscriber, magazine));
    }
});

const canGetSubscribersByMagazine = state => ({
    getSubscribersByMagazine: magazine => {
        return state.collection.filter(subscriber => isMatch(subscriber, magazine));
    }
});

// helper function
const isMatch = (subscriber, magazine) => {
    return subscriber.interests.every(interest => magazine.qualities.includes(interest));
};

export const magazineCollection = magazines();
export const subscriberCollection = subscribers();
