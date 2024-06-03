// Styled elements for the Card go here

import styled from "styled-components";
import { StyledSectionSubheading } from "../../components/Typography/elements";
import { StyledSectionParagraph } from "../../components/Typography/elements";

export const CardTitle = styled((props) => <StyledSectionSubheading {...props} />)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.black};
    font-weight: 600;
    margin 0;
`

export const CardContainer = styled.a`
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    border: 0.125rem solid transparent;
    color: inherit;
    background-color: ${({ theme }) => theme.grayF0};
    border-radius: 0.625rem;
    text-decoration: none;
    padding-block: 1em;
    padding-inline: 2em;
    transition: border 0.2s;

    &:hover,
    &:active,
    &:focus {
        border: 0.125rem solid ${({ theme }) => theme.main};

        ${CardTitle} {
            color: ${({ theme }) => theme.main};
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 1024px) {
        padding-block: 2em;
        padding-inline: 3em;
    }
`;

export const CardParagraph = styled((props) => <StyledSectionParagraph {...props} />)`
    margin: 0;
`;