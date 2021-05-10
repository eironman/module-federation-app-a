import {Component, OnInit} from '@angular/core';
import {FeatureAApiService} from './services/feature-a-api.service';
import {FeatureAModel} from './models/feature-a.model';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {
  featureAModel: FeatureAModel = undefined;
  products = [
    {code: '1', name: 'Product 1', quantity: 2},
    {code: '2', name: 'Product 2', quantity: 23},
    {code: '3', name: 'Product 3', quantity: 56},
    {code: '4', name: 'Product 4', quantity: 234}
  ];

  constructor(private featureAApiService: FeatureAApiService) { }

  ngOnInit(): void {
    this.featureAApiService.getFeatureAModel().subscribe((model: FeatureAModel) => this.featureAModel = model);
  }
}
