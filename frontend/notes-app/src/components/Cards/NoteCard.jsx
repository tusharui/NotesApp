import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote,
    className,
    style,
}) => {
    return (
        // Add transform, scale, and transition classes to the main div
        <div 
            className={`
                border rounded-lg p-4 bg-white 
                transform transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-lg ${className || ''}
            `} 
            style={style}
        >
            <div className='flex items-center justify-between mb-2'>
                <div className='flex-1'>
                    <h6 className='text-base font-semibold text-slate-900 line-clamp-1'>{title}</h6>
                    <span className='text-xs text-slate-500'>{date}</span>
                </div>
                <MdOutlinePushPin
                    className={`text-2xl cursor-pointer ml-4 transition-colors duration-300 ease-in-out ${
                        isPinned ? "text-primary" : "text-slate-300"
                    }`}
                    onClick={onPinNote}
                />
            </div>
            
            <p className='text-sm text-slate-600 mb-4 line-clamp-3'>{content}</p>
            
            <div className='flex items-center justify-between'>
                <div className='text-xs text-slate-500 line-clamp-1'>
                    {tags.length > 0 ? tags.map((item) => `#${item} `) : null}
                </div>
                <div className='flex items-center gap-2'>
                    <MdCreate
                        className='text-xl text-slate-400 cursor-pointer hover:text-green-600'
                        onClick={onEdit}
                    />
                    <MdDelete
                        className='text-xl text-slate-400 cursor-pointer hover:text-red-600'
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;