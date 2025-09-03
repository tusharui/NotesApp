import React, { useState } from 'react'; // ⬅️ Add useState here
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Cards/NoteCard';
import { MdAdd } from "react-icons/md";
import AddEditNotes from './AddEditNotes';
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEdit] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const notes = [
    {
      id: 1,
      title: "Meeting on 7 April",
      date: "3 April 2025",
      content: "This is a brief note about the meeting scheduled for next week. Don't forget to prepare the presentation slides and agenda points.",
      tags: ["work", "meeting"],
      isPinned: true,
    },
    {
      id: 2,
      title: "Grocery List",
      date: "2 April 2025",
      content: "Need to buy milk, eggs, bread, and some fresh vegetables from the market.",
      tags: ["personal", "shopping"],
      isPinned: false,
    },
    {
      id: 3,
      title: "Book Ideas",
      date: "1 April 2025",
      content: "Initial ideas for a new sci-fi story. The protagonist is a space pirate who discovers a long-lost alien artifact.",
      tags: ["creative"],
      isPinned: true,
    },
    {
      id: 4,
      title: "Project Alpha Progress",
      date: "4 April 2025",
      content: "Reviewed latest sprint, made good progress on frontend integration. Still need to finalize backend APIs.",
      tags: ["work", "project"],
      isPinned: false,
    },
    {
      id: 5,
      title: "Workout Plan",
      date: "5 April 2025",
      content: "Monday: Chest & Triceps. Tuesday: Back & Biceps. Wednesday: Legs & Shoulders. Thursday: Rest. Friday: Full Body.",
      tags: ["health", "fitness"],
      isPinned: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className='container mx-auto p-4 bg-slate-100 min-h-[90vh]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
          {notes.map((note, index) => (
            <NoteCard
              key={note.id}
              title={note.title}
              date={note.date}
              content={note.content}
              tags={note.tags}
              isPinned={note.isPinned}
              onEdit={() => {}}
              onDelete={() => {}}
              onPinNote={() => {}}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <button 
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-500 absolute right-10 bottom-10" 
        onClick={() => { // ⬅️ Corrected syntax and case
          setOpenAddEdit({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className=" text-[32px] text-white"/>
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => setOpenAddEdit({ isShown: false, type: "add", data: null })}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add/Edit Note Modal"
        className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 relative top-1/2 -translate-y-1/2" // ⬅️ Added modal styling
      >
        <AddEditNotes />
      </Modal>
    </>
  );
};

export default Home;