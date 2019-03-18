import { Magazine, Subscriber } from './models';
import { magazineData, subscriberData } from './data';

export default function seed({ MagazineCollection, SubscriberCollection }) {
    const magazines = magazineData.map(magazine => new Magazine(magazine));
    const subscribers = subscriberData.map(subscriber => new Subscriber(subscriber));

    magazines.forEach(magazine => MagazineCollection.add(magazine));
    subscribers.forEach(subscriber => SubscriberCollection.add(subscriber));
}
