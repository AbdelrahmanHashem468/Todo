import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedTodosComponent } from './components/deleted-todos/deleted-todos.component';
import { LoginComponent } from './components/login/login.component';
import { MyTodoComponent } from './components/my-todos/my-todos.component';
import { FavouriteTodosComponent } from './components/favourite-todos/favourite-todos.component';
import { AuthGuard } from './guards/auth.guard';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';

const routes: Routes = [
  {path:'todos',component:MyTodoComponent,canActivate:[AuthGuard]},
  {path:'deletedTodo',component:DeletedTodosComponent,canActivate:[AuthGuard]},
  {path:'favouriteTodo',component:FavouriteTodosComponent,canActivate:[AuthGuard]},
  {path:'completedTodo',component:CompletedTodosComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
