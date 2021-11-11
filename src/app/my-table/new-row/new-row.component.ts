import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { CategoriesData, Category, Product, ProductsData } from '../products-service';


@Component({
  selector: 'new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.css'],
  providers:[ProductsData, CategoriesData]
})
export class NewRowComponent{

  newRow:any = {
    id: 0,
    name: "",
    price: 0,
    category: "",
  }

  productsList:Product[]=[];
  categoriesList:Category[]=[];


  constructor(private productsData:ProductsData, private categories:CategoriesData) { 
    this.productsList = this.productsData.getData();
    this.categoriesList = this.categories.getCategories();
  }

  current = this.categoriesList[0];

  @Output()
  click: EventEmitter<any> = new EventEmitter();

addRow(name:string, price:string) {

      this.newRow.id = this.productsList.length + 1;
      this.newRow.name = name;
      this.newRow.price = price,
      this.newRow.category = this.current;

      this.productsList.push(this.newRow);
      this.click.emit(this.newRow);
      console.log(this.productsList.length)
      console.log(this.newRow)
    
  }


  ngOnInit(): void {
  }
  
  ngOnChanges () {
  }

}
