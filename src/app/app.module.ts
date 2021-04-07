import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { VideojsRecordComponent } from './videojs-record/videojs-record.component';
import { VideojsRecord1Component } from './videojs-record/videojs-record1';
import { MyComponentComponent } from './UserProfile/my-component.component';
import { UsserProfileComponent } from './UserProfile/usser-profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideojsRecordComponent,
    VideojsRecord1Component,
    MyComponentComponent,
    UsserProfileComponent,
  ],
  imports: [BrowserModule, FlexLayoutModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
