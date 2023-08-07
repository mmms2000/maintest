import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../page/MainPage"
import MainWrite from "../page/MainWrite"

const Router = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/write" element={<MainWrite/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router