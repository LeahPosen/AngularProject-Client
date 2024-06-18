import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { courseService } from '../../../services/course.service';
import { Course, Study } from '../../../models/course';
import { CategoryService } from '../../../services/category.service';
import { lecturerService } from '../../../services/lecturer.service';
import { Lecturer } from '../../../models/lecturer';
import Swal from 'sweetalert2';

//

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  hide = true;
  courseForm!: FormGroup;
  studyEnumValues = Object.values(Study);
  lecturers: Lecturer[] = [{ id: 1, name: "111", password: "" }];
  studyTypes = [
    { value: Study.Online, viewValue: 'Online' },
    { value: Study.Offline, viewValue: 'Offline' },
    { value: Study.Hybrid, viewValue: 'Hybrid' }
  ];
  constructor(private _courseService: courseService, private _router: Router,
    private _snackBar: MatSnackBar, private _categoryService: CategoryService, private _lectureService: lecturerService) {
  }
  ngOnInit(): void {
    this.courseForm = new FormGroup({
      "id": new FormControl(),//
      "lecturer": new FormControl(),//
      "name": new FormControl(null, [Validators.minLength(3), Validators.required]),//
      "category": new FormControl(),//
      "countOfLessons": new FormControl(),//
      "start": new FormControl(),//
      "syllabus": new FormControl(),
      "study": new FormControl(null, Validators.required),//
      "image": new FormControl()//
    });
  }
  onSubmit(): void {
    if (this.courseForm.valid) {
      const courseData: Course = {
        id: this.courseForm.get('id')?.value,
        name: this.courseForm.get('name')?.value,
        category: this.courseForm.get('category')?.value,
        countOfLessons: this.courseForm.get('countOfLessons')?.value,
        start: this.courseForm.get('start')?.value,
        syllabus: this.courseForm.get('syllabus')?.value,
        study: this.courseForm.get('study')?.value,
        image: this.courseForm.get('image')?.value,
      };
      this._lectureService.geLecturerById(this.courseForm.get('lecturer')!.value).subscribe(data=>{
            courseData.lecturer=data
      })

      if (this._courseService.checkCourse(this.courseForm.get('name')?.value,
        this.courseForm.get('lecture')?.value) == undefined) {
        this._courseService.postCourse(courseData).subscribe(() => {
          Swal.fire('Success', 'Course added successfully!', 'success').then(() => {
            this._router.navigate(['/all-courses']);
          });
        });
        // this._router.navigate(['/all-courses']);
      }
      else {
        this._snackBar.open("The course is exist", "close", {
          duration: 3000,
        });
        this.courseForm.get('name')!.setValue('');
        this.courseForm.get('lecture')!.setValue('');
      }
    }
    else {
      this._snackBar.open("Please fill all required fields", "close", {
        duration: 3000,
      });
    }
  }
  getCategories() {
    return this._categoryService.getCategory();
  }
  getLectures() {
    this._lectureService.getLecturer().subscribe(data => {
      this.lecturers = data;
    });
  }
}
//npm install sweetalert2
//npm list --depth=0
//npm install sweetalert2@10.0.0
