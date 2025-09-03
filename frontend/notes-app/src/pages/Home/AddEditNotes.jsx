import React from 'react';

const AddEditNotes = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            {/* Title Section */}
            <div className="flex flex-col gap-2 mb-6">
                <label className='text-xs text-slate-600 font-medium'>TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-900 outline-none w-full font-semibold border-b border-gray-300 focus:border-blue-500 transition-colors duration-200'
                    placeholder=' Go to Gym at 5'
                />
            </div>

            {/* Content Section */}
            <div className='flex flex-col gap-2 mb-6'>
                <label className='text-xs text-slate-600 font-medium'>CONTENT</label>
                <textarea
                    className='text-sm text-slate-900 outline-none bg-slate-50 p-4 rounded-md border border-gray-200 focus:border-blue-500 transition-colors duration-200 resize-y'
                    placeholder='Type your note content here...'
                    rows={10}
                />
            </div>

            {/* Tags Section */}
            <div className='flex flex-col gap-2 mb-6'>
                <label className='text-xs text-slate-600 font-medium'>TAGS</label>
                {/* Add your tags input component here */}
                <input
                    type="text"
                    className='text-sm text-slate-900 outline-none bg-slate-50 p-2 rounded-md border border-gray-200 focus:border-blue-500 transition-colors duration-200'
                    placeholder='e.g., #work #health'
                />
            </div>

            {/* Action Button */}
            <button
                className='w-full bg-blue-600 text-white font-medium p-3 rounded-md hover:bg-blue-700 transition-colors duration-200'
                onClick={() => {}}
            >
                ADD
            </button>
        </div>
    );
};

export default AddEditNotes;