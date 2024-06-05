import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
  return (
    <div className='flex gap-2 mt-4  border-gray-500 border-2 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] p-3 rounded-xl'>
        <MdSearch/>
        <input 
            type="text" 
            placeholder={placeholder} 
            className=''
        />
    </div>
  )
}

export default Search