import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/question-base';
import { TexboxForm } from '../models/question-textbox';
import { TexareaForm } from '../models/question-textarea';
import { RadioForm } from '../models/question-radio';


@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new TexboxForm({
        key: 'username',
        label: 'Username',
        value: '',
        type: 'name',
        pattern: '',
        required: true,
        order: 1
      }),

      new TexboxForm({
        key: 'email',
        label: 'Email',
        type: 'email',
        value: '',
        pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        required: true,
        order: 2
      }),
      new RadioForm({
        key: 'gender',
        label: 'Gender',
        type: 'radio',
        value: ['Male', 'Female'],
        order: 3
      }),
      new TexareaForm({
        key: 'bio',
        label: 'Bio',
        value: '',
        order: 4
      })
    ];

    return questions;
  }
}
