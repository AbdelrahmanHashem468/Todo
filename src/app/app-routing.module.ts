import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedTodosComponent } from './components/deleted-todos/deleted-todos.component';
import { LoginComponent } from './components/login/login.component';
import { MyTodoComponent } from './components/my-todos/my-todos.component';
import { FavouriteTodosComponent } from './components/favourite-todos/favourite-todos.component';
import { AuthGuard } from './guards/auth.guard';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:MyTodoComponent,canActivate:[AuthGuard]},
  {path:'todos',component:MyTodoComponent,canActivate:[AuthGuard]},
  {path:'deletedTodo',component:DeletedTodosComponent,canActivate:[AuthGuard]},
  {path:'favouriteTodo',component:FavouriteTodosComponent,canActivate:[AuthGuard]},
  {path:'completedTodo',component:CompletedTodosComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
