import styled from 'styled-components';

export const StyledNavList = styled.nav`
  width: 100%;
  
  @media screen and (min-width: 768px) {
    max-width: 470px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 470px;
    flex-grow: 1;
  }

  .navigation_list {
    list-style: none;
  }

  .navigation_list_item {
    margin-bottom: 10px;

    &::last-child {
      margin-bottom: 0px;
    }
  }
  
  .navigation_link {
    font-family: 'Oddval', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    transition: color .3s;

    &:hover,
    &:active,
    &[data-active="true"] {
      color: #f77d07;
    }

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  .navigation_link:hover .navigation_link_icon {
    opacity: 1;
    visibility: visible;
    transform: scale(1.6);
  }

  .navigation_link_icon {
    width: 25px;
    height: 25px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.1);
    transition: opacity .2s, visibility .2s, transform .2s;

    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .navigation_link_text {
    max-width: calc(100% - 25px * 1.6);

    @media screen and (min-width: 768px) {
      max-width: calc(100% - 50px * 1.6);
    }
  }
`;
