import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";

import {observer} from "mobx-react-lite";

const App= observer(() =>{

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>

        </Routes>
    </BrowserRouter>
)
})

export default App