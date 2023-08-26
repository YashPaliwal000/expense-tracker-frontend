import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

const expenseRoutes: Routes = [
    { path: 'expenses', component: ExpenseListComponent },
    { path: 'add-expense', component: ExpenseFormComponent },
    // Add more routes as needed
];

@NgModule({
    declarations: [ExpenseListComponent, ExpenseFormComponent],
    imports: [CommonModule, RouterModule.forChild(expenseRoutes)]
})
export class ExpenseModule { }
