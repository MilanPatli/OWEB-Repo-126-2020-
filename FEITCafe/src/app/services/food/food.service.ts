import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 16 },
      { name: 'FastFood', count: 6 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 6 },
      { name: 'SlowFood', count: 3 },
      { name: 'Hamburger', count: 2 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
      { name: 'Drink', count: 7 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-15',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 12,
        cookTime: '20-25',
        favorite: true,
        origins: ['Sweden'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 12,
        cookTime: '10-15',
        favorite: false,
        origins: ['USA'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 5,
        cookTime: '10',
        favorite: true,
        origins: ['Dutch'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 10,
        cookTime: '15-20',
        favorite: false,
        origins: ['Balkan'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 25,
        cookTime: '10-15',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Spaghetti Bolognese',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 8,
        name: 'Chicken Breast',
        price: 12,
        cookTime: '10-15',
        favorite: false,
        origins: ['Romania'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 9,
        name: 'Toast',
        price: 10,
        cookTime: '8-10',
        favorite: false,
        origins: ['France'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['FastFood', 'Lunch', 'Hamburger'],
      },
      {
        id: 10,
        name: 'Water',
        price: 1,
        cookTime: '1-2',
        favorite: true,
        origins: ['Serbia'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags: ['Drink'],
      },
      {
        id: 11,
        name: 'Mateno NES',
        price: 3,
        cookTime: '2-5',
        favorite: true,
        origins: ['Nase e '],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-11.jpg',
        tags: ['Drink'],
      },
      {
        id: 12,
        name: 'Cappuccino',
        price: 3,
        cookTime: '3-5',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-12.jpg',
        tags: ['Drink'],
      },
      {
        id: 13,
        name: 'Espresso',
        price: 2,
        cookTime: '3-5',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-13.jpg',
        tags: ['Drink'],
      },
      {
        id: 14,
        name: 'CocaCola',
        price: 3,
        cookTime: '2-4',
        favorite: true,
        origins: ['America'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-14.jpg',
        tags: ['Drink'],
      },
      {
        id: 15,
        name: 'CocaCola Zero',
        price: 3,
        cookTime: '2-4',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-15.jpg',
        tags: ['Drink'],
      },
      {
        id: 16,
        name: 'Fanta',
        price: 3,
        cookTime: '2-4',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-16.jpg',
        tags: ['Drink'],
      },
    ];
  }
}
