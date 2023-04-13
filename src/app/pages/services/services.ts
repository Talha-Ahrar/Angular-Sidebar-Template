import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  todaylist: any[] = [ ]
   foodList = [
    { name: 'Apple', fat: 0.2, carbohydrate: 25.1, protein: 0.5 },
    { name: 'Banana', fat: 0.3, carbohydrate: 27.0, protein: 1.1 },
    { name: 'Chicken Breast', fat: 2.6, carbohydrate: 0.0, protein: 31.0 },
    { name: 'Salmon', fat: 13.6, carbohydrate: 0.0, protein: 20.8 }
  ];
  lastId = 0;
  getTodayList() {
    return this.foodList;
  }

  gettodayitem(){
return this.todaylist;
  }

  addToTodayList(foodItem: any){
    const newId = this.lastId + 1;
    const newItem = { ...foodItem, id: newId };
    this.todaylist.push(newItem);
    this.lastId = newId;
}


removeFromTodayList(id: number) {
  const index = this.todaylist.findIndex(item => item.id === id);
  if (index !== -1) {
    this.todaylist.splice(index, 1);
  }
}


calculateMacroNutrientPercentage(foodList: { name: string, fat: number, carbohydrate: number, protein: number }[]) {
  const result = [];

  // Calculate the total macronutrient values for all foods
  let totalFat = 0;
  let totalCarbohydrate = 0;
  let totalProtein = 0;
  for (const food of foodList) {
    totalFat += food.fat;
    totalCarbohydrate += food.carbohydrate;
    totalProtein += food.protein;
  }

  // Calculate the macronutrient percentage for each food item
  for (const food of foodList) {
    const fatPercentage = (food.fat / totalFat) * 100;
    const carbohydratePercentage = (food.carbohydrate / totalCarbohydrate) * 100;
    const proteinPercentage = (food.protein / totalProtein) * 100;

    result.push({
      name: food.name,
      fatPercentage: fatPercentage,
      carbohydratePercentage: carbohydratePercentage,
      proteinPercentage: proteinPercentage
    });
  }

  return result;
}

}
