import { Selectedpage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: Selectedpage;
    setselectedPage: (value: Selectedpage) => void;
};

const Link = ({ page, selectedPage, setselectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as Selectedpage;

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setselectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
}

export default Link;
