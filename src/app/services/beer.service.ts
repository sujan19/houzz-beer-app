import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { APICONSTANTS } from '../constants/api.constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClientService) {}

  fetchBeer(params) {
    return this.http.get(`${APICONSTANTS.BEER}`, params).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
