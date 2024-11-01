import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 16px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Institution = styled.h3`
    font-size: 1.2rem;
    margin: 0;
`;

const Degree = styled.p`
    font-size: 1rem;
    margin: 4px 0;
    color: #555;
`;

const Year = styled.span`
    font-size: 0.9rem;
    color: #777;
`;

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Logo src={education.logo} alt={`${education.institution} logo`} />
            <Info>
                <Institution>{education.institution}</Institution>
                <Degree>{education.degree}</Degree>
                <Year>{education.year}</Year>
            </Info>
        </Card>
    );
};

export default EducationCard;
