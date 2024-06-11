import { Component, OnInit,Output,EventEmitter, Input ,inject, signal, computed} from '@angular/core';
import { NoteService, Note } from '../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {

  @Input() note?: Note[];
  @Output() noteSelected = new EventEmitter<Note>();
  noteService = inject(NoteService);
  @Input() subNote?: Note;



}
