import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-forms',
  imports: [MatButtonToggleModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {

}
