import { configureStore } from '@reduxjs/toolkit'
import PasteRedurcer from './PasteSlice'

export const store = configureStore({
  reducer: {
    paste: PasteRedurcer,
  },
})