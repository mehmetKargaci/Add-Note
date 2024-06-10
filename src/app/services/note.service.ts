import { Injectable } from '@angular/core';


export interface Note {
  id: number;
  title: string;  
}

export interface SubNote {
  id: number;
  subtitle: string;
}

@Injectable({providedIn: 'root'})
export class NoteService {
  notes : Note[] = [];


  getNotes(): Note[] {  
    return this.notes;
  }

  addNote(title: string): void {    
    const newNote: Note = { 
      id: Date.now(),
      title,      
    };
    this.notes.push(newNote);
    console.log(newNote);     
  }

  deleteNote(id:number){
    this.notes = this.notes.filter((note)=> note.id !==id);
  }

}
