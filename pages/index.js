import Head from "next/head";
import { Hero } from "../sections";
import { AgencySelection } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  image: { src: "/img/video.png", alt: "", width: 500, height: 798 },
  agencyCards: [
    {
      id: "ac1",
      title: "Brief",
      description:
        "Complete *brief writing or simple guidance* on what to include, we've got you covered.",
      icon: "/icons/list.svg",
      href: "https://goodbrief.io/",
    },
    {
      id: "ac2",
      title: "Search",
      description:
        "In-depth agency search covering; *criteria matching*, door knocking and due-dilligence vetting.",
      icon: "/icons/profits.svg",
      href: "https://www.search.co.uk/",
    },
    {
      id: "ac3",
      title: "Pitch",
      description:
        "Comprehensive *pitch management*, including comms, diary management and pitch hosting.",
      icon: "/icons/meeting.svg",
      href: "https://hbr.org/2020/05/what-makes-a-great-pitch",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Hero {...heroProps} />
        <AgencySelection {...agencyProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
