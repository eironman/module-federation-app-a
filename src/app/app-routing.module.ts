import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app-a', pathMatch: 'full' },
  {
    path: 'app-a',
    loadChildren: () => import('./federated/federated.module').then(m => m.FederatedModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
