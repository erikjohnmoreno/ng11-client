import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public httpError = '';

  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private http: HttpClient,
    private swal: SwalService
  ) { }

  authHeader(): any {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Auth: ${this.storage.get('accessToken')}`
    }
  }

  createAuthorizationHeader(skipAuth?: boolean): any {
    let headerParams = {};
    if (!skipAuth) {
      headerParams = this.authHeader();
    }
    return headerParams;
  }

  get(url: string, data: any, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.post(url, data, {
      headers
    }).pipe(
      catchError(
        res => {
          return this.commonErrorHandler(res);
        }
      )
    )
  }

  post(url: string, data: any, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.post(url, data, {
      headers
    }).pipe(
      catchError(
        res => {
          return this.commonErrorHandler(res);
        }
      )
    )
  }

  patch(url: string, data: any, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.patch(url, data, {
      headers
    }).pipe(
      catchError(
        res => {
          return this.commonErrorHandler(res);
        }
      )
    )
  }

  delete(url: string, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.delete(url, {
      headers
    }).pipe(
      catchError(
        res => {
          return this.commonErrorHandler(res);
        }
      )
    )
  }

  private commonErrorHandler(res: any) {
    const body = res.error;

    if (res.status === 401) {
      this.storage.clear();
      this.swal.toastr('unauthorized request');
      this.router.navigate(['/']);
    }

    if (body.errors) {
      body.errors.forEach((err: any) => {
        this.displayError(err);
      })
    } else {
      const err = body.error || JSON.stringify(body);
      this.displayError(err);
    }
    return throwError(res);
  }

  private displayError(error: any) {
    this.swal.toastr(error, 'error');
  }

}
