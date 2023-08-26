import { Component } from '@angular/core';
import { Expense } from '../shared/expense.model'; // Assuming you have an Expense model

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'] // Link to your Sass file
})
export class DashboardComponent {
    expense: { amount: number; description: string } = { amount: 0, description: '' };

    submitExpenseForm() {
        // Send the expense data to your API using the API service
    }
}
