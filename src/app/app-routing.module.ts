import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import { DetailsProductComponent } from './details-product/details-product.component';
import { TodoListComponent } from './todoList/todoList.component';
const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'addProduct',component:FormProductComponent},

  {path:'product/:id',component: DetailsProductComponent},
  {path:'Todoroot',component: TodoListComponent},
  {path:'**',component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
