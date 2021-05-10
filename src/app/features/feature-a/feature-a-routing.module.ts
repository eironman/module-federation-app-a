import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeatureAComponent} from './feature-a.component';

const routes: Routes = [
  {path: '',  component: FeatureAComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
