import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledSection = styled((props) => <SectionContainer {...props} />)`
    display: flex;
    flex-direction: column;
    margin-block: 5em;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
    text-align: center;
`;

export const StyledSubTitle = styled((props) => <SectionSubheading {...props} />)`
    margin: 0;
    text-align: center;
`;

export const StyledContentContainer = styled.div`
    --max-width: 1110px;
    --container-padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 3em;
    align-items: center;
    background-image: url("/img/background.png");
    width: min(var(--max-width), 100% - (var(--container-padding) * 2));  
    margin-inline: auto;
    margin-block: 3em;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 5em;
        background-image: none;
    }
`; 

export const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    background-image: url("/img/background.png");
    background-size: cover;
    background-position: center;
`;

export const StyledImage = styled.div`
    max-width: 25rem;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1024px) {
        margin: 0 auto;
    }
`;

export const StyledCardsContainer = styled.div`
    display: grid;
    justify-items: center;
    gap: 2em;
    max-width: 35rem;
`;
