'use client';

import Header from './components/Header';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';

const notes = [
  { id: 1, title: '노트1', content: '노트내용1' },
  { id: 2, title: '노트2', content: '노트내용2' },
];

export default function UI() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <SideBar notes={notes} />
        <NewNote />
        {/* Note Viewer (Edit or View) */}
        {/* Empty Note */}
      </div>
    </main>
  );
}
