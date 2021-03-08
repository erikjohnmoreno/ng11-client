import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/utils';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public ENDPOINT: string;

  constructor(
    public http: HttpService,
    public url: string
  ) { 
    this.ENDPOINT = url;
  }

  query(query) {
    return this.http.get(`${this.ENDPOINT}?${this.buildParams(query)}`);
  }

  get(id) {
    return this.http.get(`${this.ENDPOINT}/${id}`);
  }

  create(payload) {
    return this.http.post(this.ENDPOINT, { resource: payload });
  }

  update(id, payload) {
    return this.http.patch(`${this.ENDPOINT}/${id}`, { resource: payload });
  }

  destroy(id) {
    return this.http.delete(`${this.ENDPOINT}/${id}`);
  }

  buildParams(params: any, prefix=null): any {
    const query = Object.keys(params).map((key) => {
      const value = params[key];

      if (params.constructor === Array)
        key = `${prefix}[]`;
      else if (params.constructor === Object)
        key = (prefix ? `${prefix}[${key}]` : key);

      if (typeof value === 'object')
        return this.buildParams(value, key);
      else if (value != '')
        return `${key}=${encodeURIComponent(value)}`;
    });

    return [].concat.apply([], query.filter(q => q)).join('&');
  }


}
