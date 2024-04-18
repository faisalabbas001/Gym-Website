import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { Selectedpage } from "@/shared/types";
import Home from "./scenes/home";
import Benefits from '@/scenes/benefits'
import OurClasses from "./scenes/OurClassses";
import ContactUs from "./scenes/contactUs"
import Footer from "./scenes/footer";
const App = () => {
  const [selectedPage, setselectedPage] = useState<Selectedpage>(Selectedpage.Home);
  const [isTopofPage, setisTopofPage] = useState<boolean>(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY === 0) {
        setisTopofPage(true);
        setselectedPage(Selectedpage.Home);
      } else {
        setisTopofPage(false);
      }
    };

    handlescroll(); // Invoke handlescroll initially

    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, [selectedPage]); // Include selectedPage in dependency array to prevent unnecessary re-renders

  return (
    <>
      <Navbar
        isTopofPage={isTopofPage}
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
      />
      <Home   setselectedPage={setselectedPage}/>
      <Benefits  setselectedPage={setselectedPage}/>
      <OurClasses setselectedPage={setselectedPage}  />
      <ContactUs setselectedPage={setselectedPage}  />
      <Footer setselectedPage={setselectedPage}  />
    </>
  );
};

export default App;
