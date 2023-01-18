export class Remote {
  onCommands: RemoteCommand[] = [];
  offCommands: RemoteCommand[] = [];

  setCommand(slotIndex: number, onCommand: RemoteCommand, offCommand: RemoteCommand) {
    this.onCommands[slotIndex] = onCommand;
    this.offCommands[slotIndex] = offCommand;
  }

  onButtonPushed(slotIndex: number) {
    this.onCommands[slotIndex].execute();
  }
  offButtonPushed(slotIndex: number) {
    this.offCommands[slotIndex].execute();
  }
}

export interface RemoteCommand {
  execute: () => void;
}

export class GarageDoorOpenCommand implements RemoteCommand {
  garageDoor: GarageDoor = new GarageDoor();

  execute() {
    this.garageDoor.on();
  }
}

export class GarageDoorCloseCommand implements RemoteCommand {
  garageDoor: GarageDoor = new GarageDoor();

  execute() {
    this.garageDoor.off();
  }
}

export class LightOnCommand implements RemoteCommand {
  light: Light = new Light();

  execute(): void {
    this.light.on();
  }
}
export class LightOffCommand implements RemoteCommand {
  light: Light = new Light();

  execute(): void {
    this.light.off();
  }
}

export class Light {
  on() {
    console.log('light is on');
  }

  off() {
    console.log('light is off');
  }
}

export class GarageDoor {
  on() {
    console.log('garage door is open');
  }

  off() {
    console.log('garage door is closed');
  }
}
