import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../services/question-control.service';
import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  providers: [ QuestionControlService ]
})
export class QuestionFormComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  formSubmitted = false;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
      this.formSubmitted = true;

  }
}
