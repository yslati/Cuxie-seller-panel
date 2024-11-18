import React from "react"
import AppRouter from "./routes/Router"
import { Toaster } from "react-hot-toast"

const App:React.FC = () => {

  return (
    <div className="">
      <Toaster position="top-right" />
      <AppRouter />
    </div>
  )
}

export default App
