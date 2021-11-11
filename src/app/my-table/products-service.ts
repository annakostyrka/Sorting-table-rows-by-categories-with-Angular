import { Injectable } from "@angular/core";

export interface Product {
    id: number;
    name: string;
    price: number;
    category:string;
    categoryId:number[];
    isRed?:boolean;
  }

  export interface Category {
    id: number;
    title: string;
  }

@Injectable()
export class ProductsData {
    items:Product[] = [];

    getData() {
        
        this.items = [
            { id: 1, name: "product 1", price: 100, category:"Category 1", categoryId: [1] },
            { id: 2, name: "product 2", price: 200, category:"Category 2", categoryId: [2] },
            { id: 3, name: "product 3", price: 300, category:"Category 3", categoryId: [3] },
            { id: 4, name: "product 4", price: 400, category:"Category 2", categoryId: [2] },
            { id: 5, name: "product 5", price: 500, category:"Category 1", categoryId: [1] },
            { id: 6, name: "product 6", price: 600, category:"Category 3", categoryId: [3] },
            { id: 7, name: "product 7", price: 700, category:"Category 1", categoryId: [1] },
            { id: 8, name: "product 8", price: 800, category:"Category 3", categoryId: [3] },
            { id: 9, name: "product 9", price: 900, category:"Category 2", categoryId: [2] },
            { id: 10, name: "product 10", price: 1000, category:"Category 1", categoryId: [1]}
        ];

        return this.items
    }
    
}

@Injectable()
export class CategoriesData {

    categories:Category[] = []

    getCategories() {
        this.categories = [
            {
                id:0,
                title: "Show All",
              },
              {
                id:1,
                title: "Category 1",
              },
              {
                id:2,
                title: "Category 2",
              },
              {
                id:3,
                title: "Category 3"
              }
        ]

        return this.categories;
    
    }
}