import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'; // Assuming the path is correct
import Link from "./Link"; // Assuming Link component is correctly exported
import { Selectedpage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopofPage:boolean;
    selectedPage: Selectedpage;
    setselectedPage: (value:Selectedpage) => void;
};

const Navbar = ({ isTopofPage,selectedPage, setselectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const [MenuToggle, setMenuToggle] = useState<boolean>(false);
    const navbarBackground=isTopofPage ? "":"bg-primary-100 drop-shadow"

    return (
        <nav>
            <div className={` ${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side Navbar */}
                        <img src={Logo} alt="logo" />
                        {/* right side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setselectedPage={setselectedPage}
                                    />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setselectedPage={setselectedPage}
                                    />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setselectedPage={setselectedPage}
                                    />
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setselectedPage={setselectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setselectedPage={setselectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setMenuToggle(!MenuToggle)}>
                                <Bars3Icon className="h-6 w-6" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* 
            mobile screen */}
            {!isAboveMediumScreens && MenuToggle && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* close icons */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setMenuToggle(!MenuToggle)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/* menu items */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setselectedPage={setselectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setselectedPage={setselectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setselectedPage={setselectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setselectedPage={setselectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
