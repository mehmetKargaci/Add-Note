import { Component, Input, input } from '@angular/core';
import { Note } from '../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  note = input<Note | null>();
  // @Input() note!: Note | null;

}
