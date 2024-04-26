import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  title: string = '© M.A Company, Inc - Petshop Manager';
  fullYearDate: number = new Date().getFullYear();
}
