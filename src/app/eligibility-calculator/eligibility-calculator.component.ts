import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {

  incomeMin = 100000;
  incomeMax = 300000;
  actualIncome: number | null = 250000;

  expenceMin = 10000;
  expenceMax = 80000;
  monthlyExpense: number | null = 50000;

  emiAmount = 10000;

  constructor() { }

  ngOnInit(): void {
  }

}
