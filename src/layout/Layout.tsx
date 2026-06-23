import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => (
    <>
    <Navbar />
    <Outlet />
    </>
)

export default Layout;