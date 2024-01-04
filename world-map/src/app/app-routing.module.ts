import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapWorldComponent } from './map-world/map-world.component';

const routes: Routes = [
  { path: '', component: MapWorldComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
