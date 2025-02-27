'use client';

import { use, useEffect, useState } from 'react';
import Header from './components/Header';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';
import NoteViewer from './components/NoteViewer';
import EmptyNote from './components/EmptyNote';
import { supabase } from '@/ utils/supabase';

const notes = [
  { id: 1, title: '노트1', content: '노트내용1' },
  { id: 2, title: '노트2', content: '노트내용2' },
];

export default function UI() {
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    supabase.from('note').select('*').then(console.log);
  }, []);

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <SideBar
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          setIsCreating={setIsCreating}
          notes={notes}
        />
        {isCreating ? (
          <NewNote setIsCreating={setIsCreating} />
        ) : activeNoteId ? (
          <NoteViewer note={notes.find((note) => note.id === activeNoteId)} />
        ) : (
          <EmptyNote />
        )}
      </div>
    </main>
  );
}
