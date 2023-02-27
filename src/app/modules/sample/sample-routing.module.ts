import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'homer', pathMatch: 'full' },
  { path: 'homer', component: SampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
