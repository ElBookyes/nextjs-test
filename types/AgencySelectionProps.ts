import { AgencyCard } from "./AgencyCard";

export type AgencySelectionProps = {
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    agencyCards: AgencyCard[];
  };