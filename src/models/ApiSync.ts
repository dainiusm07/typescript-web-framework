import Axios, { AxiosPromise } from 'axios';

type HasId = {
  id?: number;
};

export class ApiSync<T extends HasId> {
  constructor(private prefix: string) {}

  fetch(id: number): AxiosPromise {
    return Axios.get(`${this.prefix}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) return Axios.put(`${this.prefix}/${id}`, data);
    else return Axios.post(this.prefix, data);
  }
}
