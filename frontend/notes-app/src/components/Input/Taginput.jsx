import React, { useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';

const Taginput = ({ tags, setTags }) => {
    //  Keep only the local state for the input value.
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNewTag = () => {
        // You can now safely use the `tags` and `setTags` from props.
        if (inputValue.trim() !== "" && !tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        // You can now safely use the `setTags` from props.
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div>
            {/* The conditional rendering for tags is correct */}
            {tags?.length > 0 && (
                <div className='flex items-center gap-2 flex-wrap mb-4'>
                    {tags.map((tag, index) => (
                        <div key={index} className='bg-slate-100 text-slate-900 px-3 py-1 rounded-full flex items-center gap-2'>
                            <span className='text-sm'>{tag}</span>
                            <button onClick={() => handleRemoveTag(tag)} className='flex items-center justify-center text-sm text-slate-500 hover:text-red-500'>
                                <MdClose />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            
            <div className='flex items-center gap-4 mt-3'>
                <input
                    type="text"
                    value={inputValue}
                    className='text-sm bg-transparent border px-3 py-2 rounded-md outline-none focus:border-blue-500 w-full'
                    placeholder='Add tags'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className='w-8 h-8 flex items-center justify-center rounded-md border border-blue-700 hover:bg-blue-700 transition-colors'
                    onClick={addNewTag}
                >
                    <MdAdd className="text-2xl text-blue-700 hover:text-white" />
                </button>
            </div>
        </div>
    );
};

export default Taginput;