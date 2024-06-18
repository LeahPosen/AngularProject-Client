import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { courseService } from '../../../services/course.service'

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor(private _courseService: courseService) { }
  ngOnInit(): void {
    this._courseService.getCourse().subscribe(data => {
      this.courses = data;
    })
  }

  isLecturerOfCourse(course: Course) {
     const lecturer = sessionStorage.getItem('lecturer');
     return course.lecturer?.name === lecturer;
  }

}

