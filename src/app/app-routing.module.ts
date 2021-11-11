import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTableModule } from './my-table/my-table.module';
import { MyTableComponent } from './my-table/my-table/my-table.component';
import { MyTableHostComponent } from './my-table/my-table/my-table-host.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"my-table-host", component: MyTableHostComponent},
    {path: "", redirectTo: "my-table-host", pathMatch: "full"}
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
