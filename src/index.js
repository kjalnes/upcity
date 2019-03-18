import {
    Magazine,
    Subscriber,
    Magazines,
    Subscribers
} from './models';
import seed from './seed';

const MagazineCollection = new Magazines();
const SubscriberCollection = new Subscribers();

seed({ MagazineCollection, SubscriberCollection });

/*
 * Steps:
 * 1) Modeling the data
 * 2) Instantiating the collections
 * 3) Seeding the collections
 * 4) Interacting with the collections
 */

/*
 * We have two independent collections, Magazines and Subscribers, that are not depedent on each other.
 * This ensures that there is no coupling between the collections, and no state dependencies.
 */

// 1)​ ​Write​ ​a​ ​function​ ​that​ ​adds​ ​a​ ​new​ ​subscriber​ ​with​ ​his​ ​Interests​ ​and​ ​returns​ ​the​ ​magazines​ ​he would​ ​want​ ​to​ ​subscribe​ ​to.

function addSubscriber(subscriber) {
    SubscriberCollection.add(subscriber);

    return MagazineCollection.getMagazinesBySubscriber(subscriber);
}

// 2)​ ​Write​ ​a​ ​function​ ​that​ ​modifies​ ​the​ ​Qualities​ ​of​ ​a​ ​magazine​ ​and​ ​returns​ ​only​ ​subscribers​ ​whose subscription​ ​decision​ ​would​ ​be​ ​affected​ ​by​ ​that​ ​change.

function modifyMagazine(magazine, newQualities) {
    const previousSubscribers = SubscriberCollection.getSubscribersByMagazine(magazine);

    magazine.modifyQualities(newQualities);

    const newSubscribers = SubscriberCollection.getSubscribersByMagazine(magazine);
    const unique1 = previousSubscribers.filter(subscriber => newSubscribers.indexOf(subscriber) === -1);
    const unique2 = newSubscribers.filter(subscriber => previousSubscribers.indexOf(subscriber) === -1);
    const unique = unique1.concat(unique2);

    return unique;
}

// Testing Task 1
const Alex = new Subscriber({
    name: 'Alex',
    interests: ['News', 'French Language']
});
const alexMagazines = addSubscriber(Alex);
console.log('Magazines Alex is subscribed to: Funny French and Le Monde', alexMagazines);

// Testing Task 2
const TheOnion = new Magazine({
    name: 'The Onion',
    qualities: ['News', 'Humor']
});
MagazineCollection.add(TheOnion);
const affectedSubscribers = modifyMagazine(TheOnion, ['News', 'Weekly']);
console.log('Subscribers affected by modifying a magazine: Sam and Bob', affectedSubscribers);
