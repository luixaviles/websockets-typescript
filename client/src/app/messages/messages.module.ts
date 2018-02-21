import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { MessagesComponent } from './messages.component';
import { SocketService } from '../shared/services/socket.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MessagesComponent],
  providers: [SocketService]
})
export class MessagesModule { }
