export type AgencyCard = {
  id: number;
  title: string;
  icon: string;
  href: string;
  description: string;
};

export type AgencySelectionProps = {
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    agencyCards: AgencyCard[];
  };