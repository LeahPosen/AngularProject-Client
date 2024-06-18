import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';
import { HttpClientModule } from '@angular/common/http';
import { courseService } from './services/course.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { userService } from './services/user.service';
import { lecturerService } from './services/lecturer.service';
import { MatTabNav } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { StudyIconPipe } from './study-icon.pipe';
import { CategoryService } from './services/category.service';
@NgModule({
  declarations: [ AppComponent, StudyIconPipe ],
  imports: [BrowserModule, AppRoutingModule, UserModule, CourseModule, HttpClientModule, MatTabsModule, MatToolbarModule, MatToolbarModule, MatListModule, MatButtonModule, MatBottomSheetModule],
  providers: [courseService, userService, lecturerService, CategoryService ,provideAnimationsAsync(), MatTabNav],
  bootstrap: [ AppComponent]
})
export class AppModule { }
