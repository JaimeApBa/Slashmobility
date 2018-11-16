import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../models/question-base';


@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required && question.key === 'username'
                                  ? new FormControl(question.value || '', Validators.required)
                            : question.required && question.key === 'email'
                                  ? new FormControl(question.value || '', [Validators.required,
                                              Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
                            : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
