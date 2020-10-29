import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textDir: string = "C:/";
  dirInp: string = " ";
  dirArray: string[] = ["C:/"];
  cArray: string[] = ["C:/"];
  title = 'angular-demo';

  constructor() { }


  onValueChange(event) {
    const value = event.target.value;
    const cmds = value.split(" ");
    if (cmds[1].includes("mkdir")) {
      this.dirArray.push(cmds[2]);
    }
    else if (cmds[1].includes("cd") && cmds[2] === "..") {
      const lastDir = this.cArray.pop();
      console.log(lastDir)
      this.textDir = this.removeWS(this.textDir) + "/" + lastDir;
    }
    else if (cmds[1].includes("cd")) {
        this.cArray.push(cmds[2]);
        this.textDir = this.textDir + "/" + cmds[2] + " ";
      
    }
    this.dirInp = " ";
  }
  removeWS(string) {
    return string.split(" ").join();
  }

}
