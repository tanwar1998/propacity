

import styled from "styled-components";
import React, {useState, useEffect} from "react";

export const InputContainer = styled.div`
  text-align: center;

    .savedSearches{
        width: 100%;
        float: left;
        min-height: 43px;
        max-width: 300px;
    }
    div.dropdown {
    display: inline-block;
    position: relative;
    button {
        padding: 1em 4em 1em 2em;
        background: #ececec;
        border: 0px;
        border-radius: 2px;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        cursor: pointer;
        &:before,
        &:after {
            display: block;
            content: '';
            width: 1px;
            height: 8px;
            background: #282828;
            position: absolute;
            top: 14px;
        }
        &:before {
            right: 21px;
            transform: rotate(-45deg);
        }
        &:after {
            right: 16px;
            transform: rotate(45deg);
        }
    }
    ul {
        display: none;
        max-height: 350px;
        overflow-y: auto;    
        position: absolute;
        background: #fff;
        list-style: none;
        border: 1px solid #f0f0f0;
        line-height: 1em;
        top: 0px;
        left: 0px;
        box-shadow: 0px 0px 3px 1px #ccc;
        padding: 0;
        width: 100%;
        margin: 0;
        z-index: 1;
        li {
            padding: 0.8em;
            cursor: pointer;
            transition: background 250ms;
            &:hover {
                background: #f0f0f0;
            }
            &.searchInput {
                padding: 0.5em;
                position: absolute;
                width: 100%;
                box-sizing: border-box;    
                position: sticky;
                top: 0;
                background: #fff;

                input {
                    width: 100%;
                    border: 0px;
                    border: 1px solid #ccc;
                    padding: 1em;
                    box-sizing: border-box;
                }
            }
        }
    }
    }

    .searchContainer .savedSearches {
        margin: 0.8em 0;
    }
`;

const SearchInput = ({options, defaultValue, onChange}) => {
    const [currentComponent, setCurrentComponent] = useState('button')
    const [input, setInput] = useState(defaultValue?.label || '')
    const [optionList, setOptionList] = useState(options)

    useEffect(()=>{
        const handleOnWindowclick = (event) => {
            if(currentComponent == 'input'){
                let ele = document.getElementById('ul-list')
                if (!ele.contains(event.target)) {
                    setCurrentComponent('button')
                }
            }
        }
        window.addEventListener('click', (event) => handleOnWindowclick(event));

        return () => window.removeEventListener("click", ()=>{});
    }, [currentComponent])

    const handleOptionSelect = (value, label) => {
        onChange(value);
        setInput(label)
        setCurrentComponent('button')

    }
    const handleInputChange = (e) => {
        e.stopPropagation();
        let value = e.target.value;
        const list = options.filter((item)=>{
            return item.value.toLowerCase().includes(value.trim().toLowerCase()) 
        })
        setOptionList(list)
    }

    const handleButtonClick = (e) => {
        e.stopPropagation()
        setCurrentComponent('input')
    }


    return (
        <InputContainer className='hor-row'>
            
            <div className="dropdown savedSearches"><button className="btn1" onClick={handleButtonClick}
            style={{display: currentComponent == 'button' ? 'block':'none'}} >
                {input}
            </button>
                <ul id="ul-list" style={{display: currentComponent != 'button' ? 'block':'none'}}>
                    <li className="searchInput">
                        <input type="text" className="dropdownsearch" 
                        // defaultValue={input}
                        onKeyUp={(e)=>{handleInputChange(e)}}
                        /></li>
                    {optionList?.map((option, i)=>(
                        <li key={"option" + i} onClick={ () => handleOptionSelect(option.value, option.label) }>
                            {option.label}
                        </li>
                    ))}
                    {optionList?.length == 0 && <li><span>No Result Found</span></li>}
                </ul>
            </div>
        </InputContainer>
    );
};

export default SearchInput;
