import {Injectable} from '@angular/core';
import {FeatureBModel} from '../models/feature-b.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureBApiService {

  constructor(private httpClient: HttpClient) {}

  getFeatureBModel(): Observable<FeatureBModel> {
    return this.httpClient.get<FeatureBModel>(environment.appAUrl + '/assets/response-mockup/feature-b.json');
  }
}
