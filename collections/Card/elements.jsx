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
    gap: 1.5rem;
    align-items: center;
    border: 0.125rem solid transparent;
    color: inherit;
    border-radius: 0.625rem;
    text-decoration: none;
    padding-block: 1em;
    padding-inline: 2em;
    transition: border 0.2s;
    min-height: 102px;

    &:first-child {
        max-width: 70%;
        background-color: rgba(240, 240, 240, .4);
    }

    &:nth-child(2) {
       max-width: 75%;
       background-color: rgba(240, 240, 240, .7);
    }

    &:last-child {
        max-width: 80%;
        background-color: rgba(240, 240, 240, 1);
    }

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
        padding-block: 1.5em;
        padding-inline: 3em;
    }
`;

export const CardParagraph = styled((props) => <StyledSectionParagraph {...props} />)`
    margin: 0;
    padding: 0;
`;