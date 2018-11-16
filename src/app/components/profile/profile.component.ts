import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [QuestionService]
})
export class ProfileComponent implements OnInit {

  questions: any[];
  ImageUpload: File;
  imageTemp: string;

  constructor ( service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

  uploadImage(imgFile: File) {

    this.ImageUpload = imgFile;
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.onloadend = () => {
      this.imageTemp = reader.result.toString();

    };
  }

}
