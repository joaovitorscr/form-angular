import { Component } from '@angular/core'

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
})
export class formComponent {
  onSubmit() {
    alert('ENVIEI!')
  }
}
