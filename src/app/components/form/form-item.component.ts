import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models/question-base';



@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() formSubmitted: Boolean;

  get isValid() {
      return this.form.controls[this.question.key].valid;


  }

}
