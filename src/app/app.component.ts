import { Component } from "@angular/core";

import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  title = "ngdryjokes";
  // tslint:disable-next-line: no-inferrable-types
  timeLeft: number = 10;
  interval;
  isShow = true;
  noShow = false;
  showJoke = true;
  joke;
  setup;
  punchline;

  fetchJoke() {
    this.setup = " ";
    this.punchline = " ";

    this.joke = this.dataService.getJokes().subscribe(data => {
      this.joke = data[0];
      this.setup = this.joke.setup;
      setTimeout(() => {
        this.punchline = this.joke.punchline;
      }, 4000);
    });
  }
  changeJoke() {
    this.interval = setInterval(() => {
      this.setup = " ";
      this.punchline = " ";
      this.joke = this.dataService.getJokes().subscribe(data => {
        this.joke = data[0];
        this.setup = this.joke.setup;
        setTimeout(() => {
          this.punchline = this.joke.punchline;
        }, 4000);
      });
    }, 10000);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 1) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;
      }
    }, 1000);
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
    this.noShow = !this.noShow;
    this.showJoke = !this.showJoke;
  }
  clicked() {
    this.startTimer();
    this.toggleDisplay();
    this.fetchJoke();
    this.changeJoke();
  }
}
