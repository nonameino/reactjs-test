import styled from 'styled-components';

const Button:any = styled.button`
    background: transparent;
    color: white;
    border: 2px solid white;
    width: 300px;
    height: 77px;
    font-size: 21px;
    font-weight: bold;

    :hover {
        border: 2px solid #2699FB;
        background-color: #2699FB;
    }

    @media screen and (max-width: 768px) {
        border: 2px solid #2699FB;;
        color: #2699FB;;
    }
`;

export default Button;