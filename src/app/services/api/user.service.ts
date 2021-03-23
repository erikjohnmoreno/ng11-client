import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/utils';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';

const ENDPOINT = `${environment.API_URL}/api/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(
    public http: HttpService
  ) { 
    super(http, ENDPOINT);
  }

  create(payload) {
    return this.http.post(`${this.ENDPOINT}`, payload, false) as Observable<User>;
  }
}
