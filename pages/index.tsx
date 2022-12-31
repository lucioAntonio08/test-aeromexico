import {Inter} from '@next/font/google'
import BannerAeroMexico from "../components/banner";
import HeaderInfo from "../components/header-info";
import News from "../components/news";
import DirectAccess from "../components/seccion-icons";
import Welcome from "../components/welcome";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <BannerAeroMexico/>
            <HeaderInfo/>
            <News/>
            <DirectAccess/>
            <Welcome/>
        </>
    )
}
