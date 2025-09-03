import React, { useState } from 'react'; // Added `useState` import
import TagInput from '../../components/Input/Taginput';
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); // Corrected from array to string
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);




    const addNewNote = async() =>{};

    const editNote  = async() =>{}; 




    const handleAddNote = () => {
        if (!title) {
            setError("Please enter the title");
            return;
        }

        if (!content) {
            setError("Please enter the content");
            return;
        }

        setError("");

        if (type === "edit") {
            // Placeholder for your edit note logic
            // editNote();
        } else {
            // Placeholder for your add new note logic
            // addNewNote();
        }
    }; // ⬅️ The missing closing brace for `handleAddNote` was added here.

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
                <MdClose className="text-xl text-slate-400" />
            </button>
            
            {/* Title Section */}
            <div className="flex flex-col gap-2 mb-6">
                <label className='text-xs text-slate-600 font-medium'>TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-900 outline-none w-full font-semibold border-b border-gray-300 focus:border-blue-500 transition-colors duration-200'
                    placeholder='Go to Gym at 5'
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>

            {/* Content Section */}
            <div className='flex flex-col gap-2 mb-6'>
                <label className='text-xs text-slate-600 font-medium'>CONTENT</label>
                <textarea
                    className='text-sm text-slate-900 outline-none bg-slate-50 p-4 rounded-md border border-gray-200 focus:border-blue-500 transition-colors duration-200 resize-y'
                    placeholder='Type your note content here...'
                    rows={10}
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>

            {/* Tags Section */}
            <div className='flex flex-col gap-2 mb-6'>
                <label className='text-xs text-slate-600 font-medium'>TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

            {/* Action Button */}
            <button
                className='w-full bg-blue-600 text-white font-medium p-3 rounded-md hover:bg-blue-700 transition-colors duration-200'
                onClick={handleAddNote}
            >
                ADD
            </button>
        </div>
    );
};

export default AddEditNotes; 