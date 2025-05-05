import { Outlet } from "react-router-dom";
import Header from "../Header";
import TopBanner from "../TopBanner";
import Footer from "../Footer";

export default function Layout(){

    return(
        <div>
            <>
                <TopBanner />
                <Header />
            </>

            <main>
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}