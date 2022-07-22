import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe','Test Description Recipe','https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg')
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
