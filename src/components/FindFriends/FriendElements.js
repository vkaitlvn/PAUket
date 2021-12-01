import styled from 'styled-components';

export const FriendCard = styled.div`
    
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }    

`;

    
export const H1 = styled.h1`
    font-size: 4rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const H2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #f5ad4b;
`;

export const H3 = styled.h3`
    font-size: 2rem;
    color: #f5ad4b;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const P = styled.p`
    font-size: 0.8rem;
    font-style: italic;
    color: #32a852 ;
`;
