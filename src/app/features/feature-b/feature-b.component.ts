import {Component, OnInit} from '@angular/core';
import {FeatureBApiService} from './services/feature-b-api.service';
import {FeatureBModel} from './models/feature-b.model';

@Component({
  selector: 'app-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss']
})
export class FeatureBComponent implements OnInit {
  featureBModel: FeatureBModel = undefined;

  constructor(private featureBApiService: FeatureBApiService) { }

  ngOnInit(): void {
    this.featureBApiService.getFeatureBModel().subscribe((model: FeatureBModel) => this.featureBModel = model);
  }
}
