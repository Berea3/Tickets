import { Component } from '@angular/core';
import {AlertComponent} from "../library/alerts/alert/alert.component";

@Component({
  selector: 'app-test',
  standalone: true,
    imports: [
        AlertComponent
    ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
