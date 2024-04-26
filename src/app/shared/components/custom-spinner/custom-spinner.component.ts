import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  standalone: true,
  imports: [],
  templateUrl: './custom-spinner.component.html',
  styleUrl: './custom-spinner.component.scss'
})
export class CustomSpinnerComponent {
  @Input() public isLoading: boolean = false;
  @Input() public message: string = '';
}
