import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent, MyTableHostComponent} from './index';
import { ProductsData } from './products-service';
import {FormsModule} from "@angular/forms";
import { NewRowComponent } from './new-row/new-row.component';



@NgModule({
  declarations: [
    MyTableComponent,
    MyTableHostComponent,
    NewRowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  providers: [ProductsData]
})
export class MyTableModule { }
