import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineComponent } from './offline/offline.component';

const routes: Routes = [
  {
    path: 'offline',
    component: OfflineComponent,
  },
  {
    path: 'lazyer',
    loadChildren: () =>
      import('./modules/sample/sample.module').then((m) => m.SampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
