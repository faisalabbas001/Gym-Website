import AnchorLink from "react-anchor-link-smooth-scroll";
import { Selectedpage } from "./types";

interface Props {
    children: React.ReactNode;
    setSelectedpage: (value: Selectedpage) => void;
}

const ActionButton = ({ children, setSelectedpage }: Props) => {
    return (
        <AnchorLink className="rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500 hover:text-white" onClick={() => setSelectedpage(Selectedpage.Contact)} href={`#${Selectedpage.Contact}`}>
            {children}
        </AnchorLink>
    );
};

export default ActionButton;
