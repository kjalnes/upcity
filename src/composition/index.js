import {
    subscriberCollection,
    magazineCollection,
    subscriber,
    magazine
} from './models';
import seed from './seed';

/*
 * Steps:
 * 1) Modeling the data
 * 2) Instantiating the collections
 * 3) Seeding the collections with mock data
 * 4) Testing the task's functions
 */

// seeding with mock data
seed({ magazineCollection, subscriberCollection });

/*
 * Task 1)
 * ​Write​ ​a​ ​function​ ​that​ ​adds​ ​a​ ​new​ ​subscriber​ ​with​ ​his​ ​interests​ ​and​ ​returns​ ​the​ ​magazines​
 * ​he would​ ​want​ ​to​ ​subscribe​ ​to.
 */

function addSubscriber(subscriber) {
    subscriberCollection.add(subscriber);
    return magazineCollection.getMagazinesBySubscriber(subscriber);
}

/*
 * Task 2)​
 * ​Write​ ​a​ ​function​ ​that​ ​modifies​ ​the​ ​qualities​ ​of​ ​a​ ​magazine​ ​and​ ​returns​ ​only​ ​subscribers​
 * ​whose subscription​ ​decision​ ​would​ ​be​ ​affected​ ​by​ ​that​ ​change.
 */

function modifyMagazine(magazine, newState) {
    const previousSubscribers = subscriberCollection.getSubscribersByMagazine(magazine);

    magazine.update(newState);

    const newSubscribers = subscriberCollection.getSubscribersByMagazine(magazine);
    const uniquePrevious = previousSubscribers.filter(subscriber => !newSubscribers.includes(subscriber));
    const uniqueNew = newSubscribers.filter(subscriber => !previousSubscribers.includes(subscriber));
    const affectedSubscribers = uniquePrevious.concat(uniqueNew);

    return affectedSubscribers;
}

// Testing Task 1

const cindy = subscriber({
    name: 'Cindy',
    interests: ['News', 'French Language']
});

const cindysMagazines = addSubscriber(cindy);
console.log('Magazines Cindy is subscribed to: Funny French and Le Monde', cindysMagazines);

// Testing Task 2

const theOnion = magazine({
    name: 'The Onion',
    qualities: ['News', 'Humor']
});

magazineCollection.add(theOnion);
const affectedSubscribers = modifyMagazine(theOnion, { qualities: ['News', 'Weekly'] });
console.log('Subscribers affected by modifying a magazine: Sam and Bob', affectedSubscribers);
