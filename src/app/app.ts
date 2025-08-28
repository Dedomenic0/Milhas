import { Component, signal } from '@angular/core';;
import { Header } from "./components/header/header";
import { Banner } from "./components/banner/banner";
import { Forms } from "./components/forms/forms";

@Component({
  selector: 'app-root',
  imports: [Header, Banner, Forms],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
