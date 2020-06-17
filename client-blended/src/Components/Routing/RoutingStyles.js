import styled from "styled-components";

export const Navigation = styled.div`
    order: 1;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`;

export const NavLink = styled.li`
    display: inline;
    padding: 10px;
    font-size: larger;
`;

export const NavA = styled.div`
    display: inline;
    a {
        text-decoration: none;
        color: #fff;
        padding: 5px;
        :hover {
            border-bottom: solid 1px white;
        }
    }
`;
