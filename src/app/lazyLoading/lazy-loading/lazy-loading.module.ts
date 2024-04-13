import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DietComponent } from '../../diet/diet.component';
import { DietDetailComponent } from '../../diet/diet-detail/diet-detail.component';

const routes: Routes = [

  { path: '', component: DietComponent },
  { path: 'diet-detail/:id', component: DietDetailComponent }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadingModule {
}
