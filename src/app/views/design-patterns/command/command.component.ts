import { Component } from '@angular/core';
import {
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
  LightOffCommand,
  LightOnCommand,
  Remote
} from './remote';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  remote: Remote;
  constructor() {
    this.remote = new Remote();
    this.remote.setCommand(0, new LightOnCommand(), new LightOffCommand());
    this.remote.setCommand(1, new GarageDoorOpenCommand(), new GarageDoorCloseCommand());
  }

  clickSlot1() {
    this.remote.onButtonPushed(0);
  }

  clickSlot2() {
    this.remote.onButtonPushed(1);
  }
}
