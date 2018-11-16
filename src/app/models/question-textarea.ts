import { QuestionBase } from './question-base';


export class TexareaForm extends QuestionBase<string> {
    controlType = 'textarea';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
