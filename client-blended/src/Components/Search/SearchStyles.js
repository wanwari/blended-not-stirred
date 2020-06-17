import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    margin-top: 150px;
`;

export const Title = styled.h1`
    color: #fff;
    margin: 20px 0 20px 0;
    font-size: 4em;
`;

export const SearchBox = styled.div`
    margin-bottom: 20px;
    width: 80%;
    text-align: center;
`;

export const SearchBoxInput = styled.input`
    height: 50px;
    width: 49%;
    border: none;
    border-radius: 50px 0px 0px 50px;
    padding-left: 20px;
    font-size: medium;
    color: #ff5f6d;
`;

export const SearchBoxButton = styled.input`
    height: 50px;
    width: 100px;
    border: 2px solid white;
    color: white;
    border-radius: 0px 50px 50px 0px;
    background-color: transparent;
    font-size: medium;
    :hover {
        cursor: pointer;
        font-weight: bold;
    }
`;

export const Categories = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const CategoryButton = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid white;
    cursor: pointer;
    display: inline;
    font-size: small;
    :hover {
        color: #ff5f6d;
        background-color: white;
    }
    color: ${(props) => (!props.selectedCategories.includes(props.id) ? "white" : "#ff5f6d")};
    background-color: ${(props) => (!props.selectedCategories.includes(props.id) ? "transparent" : "white")};
    margin: 0px 5px 0px 5px;
`;

/*
export const SearchText = styled.input`
    height: 50px;
    width:
    border: none;
    border-radius: 50px 0px 0px 50px;
    padding-left: 20px;
`;

export const SearchButton = styled.input`
    height: 50px;
    width: 100px;
    border: 2px solid white;
    color: white;
    border-radius: 0px 50px 50px 0px;
    background-color: transparent;
    font-weight: bold;
    :hover {
        color: #ff5f6d;
        background-color: white;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.div`
    width: 50%;
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


*/
