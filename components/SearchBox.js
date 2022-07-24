import React from "react";
import styled from "styled-components";
const Searchbox = styled.div`
  background: #fff;
  display: flex;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 40px;
  margin: 10px auto;
  width: 482px;

  &:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }

  & > div {
    flex: 1;
    display: flex;
    padding: 5px 8px 0 14px;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 13px;
  margin: -2px auto 0;

  & > span {
    color: #9aa0a6;
    height: 20px;
    width: 20px;
    margin-top: -5px;
    display: inline-block;
    fill: currentColor;
    line-height: 24px;
    position: relative;
  }
  & > span svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

const SearchSVG = styled.svg`
  overflow: hidden;
`;

const InputBox = styled.div`
  flex-wrap: wrap;
  background-color: transparent;
  border: none;
  margin-right: 10px;
  padding: 0;
  word-wrap: break-word;
  outline: none;
  display: flex;
  -webkit-tap-highlight-color: transparent;
  line-height: 32px;
  background-size: 20px 20px;
  height: 20px;
  width: 27px;
  margin-top: 0;
  color: transparent;
  flex: 100%;
  white-space: pre;

  & > div {
    color: transparent;
    flex: 100%;
    white-space: pre;
    font: 16px arial, sans-serif;
    line-height: 34px;
    height: 34px !important;
  }

  & > input {
    background-color: transparent;
    border: none;
    margin-top: -35px;
    margin-right: 10px;
    padding: 0;
    color: rgba(0, 0, 0, 0.87);
    word-wrap: break-word;
    outline: none;
    display: flex;
    flex: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`;

const MicroBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  flex: 1 0 auto;
  cursor: pointer;
  align-items: center;
  border: 0;
  outline: none;
  padding: 5px 8px;
  width: 24px;
  margin: 0 -8px;
  background: transparent;
  background-size: 20px 20px;

  & > div {
    flex: 1 0 auto;
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0;
    background: transparent;
    outline: none;
    padding: 5px 8px;
    width: 24px;
    line-height: 44px;
    margin: 5px -12px;
  }

  & > span {
    background: url("images/googlemic_color_24dp.png") 0 0 no-repeat;
    height: 24px;
    width: 24px;
    background-size: 24px;
    vertical-align: middle;
  }
`;
function SearchBox() {
  return (
    <Searchbox>
      <div>
        <SearchIcon>
          <span>
            <SearchSVG
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </SearchSVG>
          </span>
        </SearchIcon>
        <InputBox>
          <div> </div>
          <input
            maxLength="2048"
            name="q"
            type="text"
            aria-autocomplete="both"
            aria-haspopup="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            title="Search"
            aria-label="Search"
          />
        </InputBox>
        <MicroBox>
          <div aria-label="Search by voice" role="button" tabIndex="0">
            <span> </span>
          </div>
        </MicroBox>
      </div>
    </Searchbox>
  );
}

export default SearchBox;
