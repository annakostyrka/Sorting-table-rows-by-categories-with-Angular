
import { Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import { Product, ProductsData } from '../products-service';


export interface Category {
  id: number;
  title: string;
}


@Component({
  selector: "my-table",
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  providers:[ProductsData]
})

export class MyTableComponent {

products:any = "";
  @Input() rows:number = 0;
  
    constructor(private productsData:ProductsData){
      this.products = this.productsData.getData();
    }

    categories:Category[] = [
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

    newRow:any = {
      id: 0,
      name: "",
      price: 0,
      category: "",
    }
    

    selectedData:Product[] = [...this.products];
    currentCategory = this.categories[0].id;

    
    
      selectCategory(currentCategory:any): any{
        if(this.currentCategory) {
          this.selectedData = this.products.filter((product:Product) => {
            product.categoryId.includes(this.currentCategory);
            return product.categoryId.includes(this.currentCategory);
            })
        } else {
          return this.selectedData = [...this.products];
        }
      
      }


    @Output()
    tick: EventEmitter<number> = new EventEmitter();



   
    limitRows() {
      this.selectedData.length = this.rows;
    }


    
    deleteRow(id:any) {
      for(let i = 0; i < this.selectedData.length; ++i){
        if (this.selectedData[i].id === id) {
          this.tick.emit(this.selectedData[i].id);
          this.selectedData.splice(i, 1);
            
        }
      }
    }

    addRow(name:string, price:string) {
      this.newRow.id = this.selectedData.length + 1;
      this.newRow.name = name;
      this.newRow.price = price,
      this.newRow.category = "Category " + this.currentCategory;

      this.selectedData.push(this.newRow);
      console.log(this.selectedData.length)
      console.log(this.newRow)
      this.addRedClass();
    
  }



    addRedClass():any{
      for(let i = 0; i < this.selectedData.length; i++){
        if (this.selectedData[i].price > 500) {
          this.selectedData[i].isRed = true;
          }  else {
            this.selectedData[i].isRed = false;
          }         
      }
    }

    ngOnInit() {
      this.selectCategory(this.categories[0]);
      this.addRedClass();
      this.limitRows();
      
    }

    
}
