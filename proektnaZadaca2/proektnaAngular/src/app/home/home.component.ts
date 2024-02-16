import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: { [key: string]: string }) => {
        if(params.searchTerm)
          this.foods = this.foodService.getALL().filter(food => 
        food.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
  else 
    this.foods = this.foodService.getALL();
})
  }
}
