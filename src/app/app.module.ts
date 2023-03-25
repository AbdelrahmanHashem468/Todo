import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTodoComponent } from './components/my-todos/my-todos.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { DeletedTodosComponent } from './components/deleted-todos/deleted-todos.component';
import { FavouriteTodosComponent } from './components/favourite-todos/favourite-todos.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTodoComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    TodoComponent,
    DeletedTodosComponent,
    FavouriteTodosComponent,
    CompletedTodosComponent,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
