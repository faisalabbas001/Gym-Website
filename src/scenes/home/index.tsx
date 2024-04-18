import { Selectedpage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import HomePageText from "@/assets/HomePageText.png";
import HomepageGraphic from "@/assets/homeset.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFurtune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: Selectedpage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-20 md:h-full">
      {/* image and main-header */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"   onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* main-header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] before:-left-20 md:before:content-evolvetext">
                <img src={HomePageText} alt="homepage-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World
              Classes Studios to get the body shapes. That You Dream of.. Get
              your Dream Body now
            </p>
          </motion.div>
          {/* action Button */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <ActionButton setSelectedpage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline"
              onClick={() => setSelectedPage(Selectedpage.Contact)}
              href={`#${Selectedpage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image-header */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomepageGraphic} alt="homepage-graphic" />
        </div>
      </motion.div>

      {/* sponsor */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="sponsorRedBull" />
              <img src={SponsorForbes} alt="sponsorForbes" />
              <img src={SponsorFurtune} alt="sponsorFortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
