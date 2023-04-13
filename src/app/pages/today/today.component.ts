import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/services';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
  preserveWhitespaces: true
})
export class TodayComponent
implements OnInit {
  todayList: any[] = [];
  totalFat: number = 0;
  totalCarbohydrate: number = 0;
  totalProtein: number = 0;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.todayList = this.foodService.gettodayitem();



    this.calculateTotals();
  }

  // removeItemFromTodayList(index: number) {
  //   this.foodService.removeItemFromTodayList(index);
  //   this.todayList = this.foodService.getTodayList();
  //   this.calculateTotals();
  // }

  calculateTotals() {
    this.totalFat = 0;
    this.totalCarbohydrate = 0;
    this.totalProtein = 0;

    for (let foodItem of this.todayList) {
      this.totalFat += foodItem.fat;
      this.totalCarbohydrate += foodItem.carbohydrate;
      this.totalProtein += foodItem.protein;
    }
  }


  remove(foodItem: any){
console.log(foodItem.id);

let id = foodItem.id
this.foodService.removeFromTodayList(id)
  }
}
