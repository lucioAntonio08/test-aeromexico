import { Inter } from '@next/font/google'
import BannerAeroMexico from "../components/banner";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <BannerAeroMexico/>
    </>
  )
}
