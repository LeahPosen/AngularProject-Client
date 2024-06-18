import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddCourseComponent } from "./add-course/add-course.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDetailsComponent } from "./edit-details/edit-details.component";
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { StudyIconPipe } from './study-icon.pipe';
import { MatButton } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [AddCourseComponent, AllCoursesComponent, CourseDetailsComponent, EditDetailsComponent, StudyIconPipe],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatDialogModule, MatButton, MatTabsModule, MatToolbarModule,
    MatListModule, MatBottomSheetModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  exports: [AddCourseComponent, AllCoursesComponent]
})
export class CourseModule {

}
