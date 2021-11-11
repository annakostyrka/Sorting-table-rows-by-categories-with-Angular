import { Component} from '@angular/core';
import { ProductsData } from '../products-service';


@Component({
  selector: 'my-table-host',
  templateUrl: './my-table-host.component.html',
  styleUrls: ['./my-table-host.component.css'],
  providers:[ProductsData]
})

export class MyTableHostComponent {

constructor(){
} 


 
ngOnInit () {
}

clickHandler(rowid:any) {
  console.log("Deleted row " + rowid);
}

clickHandler2(value:any) {
  console.log("Click Handler 2 - " + value);
}


}