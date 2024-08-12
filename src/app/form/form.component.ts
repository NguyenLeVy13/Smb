import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
})
export class FormComponent {
  onDrop = false;
  toggleDrop() {
    this.onDrop = !this.onDrop
  }


}
