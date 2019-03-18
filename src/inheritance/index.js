import {
    Magazine,
    Subscriber,
    Magazines,
    Subscribers
} from './models';
import seed from './seed';

/*
 * Steps:
 * 1) Modeling the data
 * 2) Instantiating the collections
 * 3) Seeding the collections with mock data
 * 4) Testing the task's functions
 */

const MagazineCollection = new Magazines();
const SubscriberCollection = new Subscribers();

seed({ MagazineCollection, SubscriberCollection });

/*
 * We have two independent collections, MagazineCollection and SubscriberCollection, that are not
 * depedent on each other. This ensures that there is no coupling and no state dependencies between
 * the collections.
 */

/*
 * Task 1)
 * ​Write​ ​a​ ​function​ ​that​ ​adds​ ​a​ ​new​ ​subscriber​ ​with​ ​his​ ​interests​ ​and​ ​returns​ ​the​ ​magazines​
 * ​he would​ ​want​ ​to​ ​subscribe​ ​to.
 */

function addSubscriber(subscriber) {
    SubscriberCollection.add(subscriber);
    return MagazineCollection.getMagazinesBySubscriber(subscriber);
}

/*
 * Task 2)​
 * ​Write​ ​a​ ​function​ ​that​ ​modifies​ ​the​ ​qualities​ ​of​ ​a​ ​magazine​ ​and​ ​returns​ ​only​ ​subscribers​
 * ​whose subscription​ ​decision​ ​would​ ​be​ ​affected​ ​by​ ​that​ ​change.
 */

function modifyMagazine(magazine, newQualities) {
    const previousSubscribers = SubscriberCollection.getSubscribersByMagazine(magazine);

    magazine.modifyQualities(newQualities);

    const newSubscribers = SubscriberCollection.getSubscribersByMagazine(magazine);
    const uniquePrevious = previousSubscribers.filter(subscriber => !newSubscribers.includes(subscriber));
    const uniqueNew = newSubscribers.filter(subscriber => !previousSubscribers.includes(subscriber));
    const affectedSubscribers = uniquePrevious.concat(uniqueNew);

    return affectedSubscribers;
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
