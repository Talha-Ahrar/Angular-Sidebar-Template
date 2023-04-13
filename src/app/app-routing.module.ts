import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { FoodListComponent } from './pages/food-list/food-list.component';
import { ChartpageComponent } from './pages/chart/chart.component';
import { TodayComponent } from './pages/today/today.component';

const routes: Routes = [
  { path: 'chart', component: ChartpageComponent },
  { path: 'today', component: TodayComponent },
  { path: 'food-list', component: FoodListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
