import { Routes, Route } from "react-router-dom";
import { Home, About, Galery, Contact, NotFound } from "../views/index";
import Layout from "../layout/Layout";
import ScrollToTop from "../utils/ScrollToTop";
export default function MainRoutes() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Layout><Home /></Layout >} />
                <Route path='/about' element={<Layout><About /></Layout>} />
                <Route path='/galery' element={<Layout><Galery /></Layout>} />
                <Route path='/contact' element={<Layout><Contact /></Layout>} />
                <Route path='*' element={<Layout><NotFound /></Layout>} />
            </Routes>
        </>
    )
}
