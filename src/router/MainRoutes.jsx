import { Routes, Route } from "react-router-dom";
import { Home, About, Galery, Contact } from "../views/index";
import Layout from "../layout/Layout";
export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Layout><Home /></Layout >} />
            <Route path='/about' element={<Layout><About /></Layout>} />
            <Route path='/galery' element={<Layout><Galery /></Layout>} />
            <Route path='/contact' element={<Layout><Contact /></Layout>} />
        </Routes>
    )
}
