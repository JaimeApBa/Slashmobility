import { QuestionBase } from './question-base';


export class RadioForm extends QuestionBase<string> {
  controlType = 'radio';
  values: {label: string, value: string}[] = [];
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.values = options['values'] || [];
    this.type = options['type'] || '';
  }
}
