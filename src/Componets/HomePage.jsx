import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AddToPaste, updateToPaste } from '../Redux/PasteSlice';


export const HomePage = () => {
  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState('');
  const [searchParams,setParams]=useSearchParams();
  const PasteId=searchParams.get("PasteId");
  const dispatch=useDispatch();

  const createPaste=()=>{
    const pasteContent={
      title:title,
      content:value,
      PasteId:PasteId || Date.now().toString(34),
      CreatedAt:new Date().toISOString()
    }
    if(PasteId){
      // Update existing paste
      dispatch(updateToPaste(pasteContent));
    }else{
      // Creating a new paste
      dispatch(AddToPaste(pasteContent));
    }

    // Resetting the input fields
    setTitle('');
    setValue('');
    setParams({}); // Clear the search params
  }
  useEffect(()=>{
    const pasteList = JSON.parse(localStorage.getItem("pastes")) || [];
    if(PasteId){
      const pasteCurrItem=pasteList.find((item)=>item.PasteId===PasteId);
      if(pasteCurrItem){
        setTitle(pasteCurrItem.title);
        setValue(pasteCurrItem.content);
    }
  }
  },[PasteId])
  return (

    <div className='w-screen'>
        <div className='flex flex-row justify-around w-[800px] '>
      <input type="text"
      placeholder='Enter Title Here'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className='ml-3 m-2 justify-content-center bg-blue-400 text-white rounded-md p-5 hover:bg-blue-600' 
      />
      <button 
      onClick={createPaste}
      className='ml-3 m-2 justify-content-center bg-blue-500 text-white rounded-md p-5 hover:bg-blue-600'>
        {PasteId ? "Update Paste":"Create Paste"}
      </button>
    </div>

    <div>
      <textarea className='w-full h-96 m-2 p-2 rounded-md border-2 border-blue-300 max-w-[800px]'
        placeholder='Enter your paste content here...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
    </div>
  )
}
