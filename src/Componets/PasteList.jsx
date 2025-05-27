import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromPaste } from '../Redux/PasteSlice'
import toast from 'react-hot-toast';
import { EmailShareButton, FacebookShareCount, LinkedinShareButton } from 'react-share';
import { Link } from 'react-router-dom';

export const PasteList = () => {
  const paste = useSelector((state) => state.paste.pastes)
  console.log(paste)
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useDispatch();
  const filteredData = paste.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.content.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log("items", filteredData.length);

  function DeletePaste(item) {
    dispatch(RemoveFromPaste(item));
  }
  function HandleShare(item) {
    toast('Share functionality is not implemented yet');
    // You can implement share functionality here, e.g., using react-share or any other library
    // For example, you can use EmailShareButton, FacebookShareButton, etc.
    // Example:
    return (
      <div>
        <EmailShareButton url={item.content} subject={item.title} body={item.content}>
          Share via Email
        </EmailShareButton>
      </div>
    )
  }

  return (
    <div>
      <input type="text"
        className='background-gray-200 border-2 border-blue-300 rounded-md p-2 m-2 w-full min-w-[600px]'
        placeholder='Search Pastes...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {
          filteredData.length > 0 && filteredData.map((item) => {
            return (
              <div key={item.PasteId}>
                <div className='border-2 border-blue-300 rounded-md p-4 m-2'>
                  <h2 className='text-xl font-bold'>{item.title}</h2>
                  <p className='text-white-900'>{item.content && item.content.length > 100 ? item.content.slice(0, 80) + "..." : item.content}</p>
                  <div className='flex flex-row gap-2 mt-2 justify-around'>
                    <button>
                      <Link to={`/?PasteId=${item?.PasteId}`}>Edit</Link>


                    </button>
                    <button>
                      <Link to={`/pasteItem/${item?.PasteId}`} >View</Link>
                    </button>
                    <button onClick={() => DeletePaste(item)}>Delete</button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(item?.content)
                        toast.success('Paste removed successfully');
                      }}

                    >Copy</button>
                    <button onClick={(item) => HandleShare(item)}>Share</button>
                  </div>
                  <p className='text-sm text-gray-500'>Created At: {new Date(item.CreatedAt).toLocaleString()}</p>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
