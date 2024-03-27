import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: purple;
    padding: 30px 0;
    text-align: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1000px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    margin-top: 50px;
`;

export const HourlyWatherList = styled.ul`
    list-style: none;
    width: 250px;
    li {
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #d3d3d3
    }
`;

export const DailyWatherList = styled.ul`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 100px;
    justify-content: center;
    span {
        font-size: 40px;
    }

`;

export const DailyWatherItem = styled.li`
        border: 1px solid #d3d3d3;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        box-shadow: ${props=>props.selected ? '1px 1px 7px grey' : 'none'};
        &:hover {
            box-shadow: 1px 1px 7px grey;
        }
`;

export const CurrentWeatherWrapper = styled.div`
        img {
            height: 100px;
            width: 100px
        }
`