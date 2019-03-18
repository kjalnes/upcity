import { magazine, subscriber } from './models';
import { magazineData, subscriberData } from '../data';

export default function seed({ magazineCollection, subscriberCollection }) {
    const magazines = magazineData.map(mag => magazine(mag));
    const subscribers = subscriberData.map(sub => subscriber(sub));

    magazines.forEach(magazine => magazineCollection.add(magazine));
    subscribers.forEach(subscriber => subscriberCollection.add(subscriber));
}
