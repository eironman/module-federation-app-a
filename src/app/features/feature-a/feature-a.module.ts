import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureAComponent} from './feature-a.component';
import {FeatureARoutingModule} from './feature-a-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    FeatureAComponent
  ],
    imports: [
        CommonModule,
        FeatureARoutingModule,
        SharedModule,
        TableModule
    ]
})
export class FeatureAModule { }
