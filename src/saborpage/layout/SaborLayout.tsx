import Navbar from "@/saborpage/page/landingPage/component/Navbar";
import { Outlet } from "react-router";
import Footer from "../page/landingPage/component/Footer";

const SaborLayout = () => {
    return (
        <div className="min-h-screen ">
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    )
}

export default SaborLayout
