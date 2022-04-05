import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MaterialModule} from './material/material.module';
import {MessagesListComponent} from './components/messages-list/messages-list.component';
import {MessageComposeComponent} from './components/message-compose/message-compose.component';
import {NavComponent} from './components/nav/nav.component';
import {MessageAvatarComponent} from './components/message-avatar/message-avatar.component';
import {MessageWrapperComponent} from './components/message-wrapper/message-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RoomComponent } from './components/room/room.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotificationsIconComponent } from './icons/notifications-icon/notifications-icon.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LazyLoadImgDirective } from './directives/lazy-load-img.directive';
import { ImgShadowComponent } from './components/img-shadow/img-shadow.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { CodeSnippetDialogComponent } from './dialogs/code-snippet-dialog/code-snippet-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MessageCompose2Component } from './components/message-compose2/message-compose2.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessageComposeComponent,
    NavComponent,
    MessageAvatarComponent,
    MessageWrapperComponent,
    RoomComponent,
    LoginComponent,
    LayoutComponent,
    NotificationsIconComponent,
    LazyLoadImgDirective,
    ImgShadowComponent,
    CodeSnippetDialogComponent,
    MessageCompose2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    OverlayModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
