import { Component } from '@angular/core';
import { Employee } from './models/employee'
import { emptyScheduled } from 'rxjs/internal/observable/empty';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    selectedEmployee: Employee = new Employee();

    employeeArray: Employee[] = [
        {
            id: 1,
            name: "QW",
            country: "USA"
        },
        {
            id: 2,
            name: "RE",
            country: "USA"
        },
        {
            id: 3,
            name: "YG",
            country: "USA"
        }
    ];

    addOrEdit() {
        if (this.selectedEmployee.name && this.selectedEmployee.country && this.selectedEmployee.id === 0) {
            this.selectedEmployee.id = this.employeeArray.length + 1;
            this.employeeArray.push(this.selectedEmployee);
        }
        this.selectedEmployee = new Employee();
    }

    openEdit(e: Employee) {
        this.selectedEmployee = e;
    }

    delete() {
        if (confirm("Are you sure?")) {
            //Search for the employee and left the array without the selected
            this.employeeArray = this.employeeArray.filter(
                x => x != this.selectedEmployee
            );
            //Clean the selected employee with a new one
            this.selectedEmployee = new Employee();
        }
    }

}
