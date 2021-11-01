import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent  } from './create-account/create-account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
  
const routes: Routes = [
  { path: 'signup', component: RegisterComponent },  
  { path: 'login', component: LoginComponent }, 
  { path: 'accounts', component: AccountListComponent },  
  { path: 'accounts/create', component: CreateAccountComponent },  
  { path: 'transactions', component: TransactionListComponent },  
  { path: 'transactions/create', component: CreateTransactionComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
