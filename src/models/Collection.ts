import { Eventing } from './Eventing';
import Axios, { AxiosResponse } from 'axios';

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Collection<T, K> {
  models: T[] = [];
  events: Events = new Eventing();

  constructor(private prefix: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.prefix).then((response: AxiosResponse): void => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.events.trigger('change');
    });
  }
}
