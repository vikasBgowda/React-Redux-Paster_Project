import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PasteItem = () => {
  const { id } = useParams();
  const [CurrItem, setCurrItem] = useState('')
  console.log(id)
  useEffect(() => {
    const pasteList = JSON.parse(localStorage.getItem("pastes")) || [];
    const pasteItem = pasteList.find((item) => item.PasteId === id);
    if (pasteItem) {
      setCurrItem(pasteItem);
    } else {
      console.error("Paste item not found");
    }
  }, [])
  console.log(CurrItem)
  return (
    <div className='h-screen  flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-lvw h-[400px] border-2 p-2 flex flex-col items-center]'>
        <h2 className='text-3xl font-bold p-2'>{CurrItem?.title}</h2>
        <p className='text-xl break-words  whitespace-normal p-2' >{CurrItem?.content}</p>
        <div className='flex flex-col items-center mt-4 space-x-1'>
          <p className='text-sm text-gray-500'>Created At: {new Date(CurrItem.CreatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
