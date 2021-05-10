import {Injectable} from '@angular/core';
import {FeatureAModel} from '../models/feature-a.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureAApiService {

  constructor(private httpClient: HttpClient) {}

  getFeatureAModel(): Observable<FeatureAModel> {
    return this.httpClient.get<FeatureAModel>(environment.appAUrl + '/assets/response-mockup/feature-a.json');
  }
}
