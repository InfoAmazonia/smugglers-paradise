import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

const styles = css`
  text-align: right;
  margin-top: 0;
  margin-bottom: 0;
  span {
    display: block;
    max-width: 900px;
    margin: 0 auto;
  }
  ${media.phone`
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 2rem;
  margin-right: 1rem;
  margin-left: .3rem;
`}
  ${media.phablet`
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: 2rem;
    margin-right: 1rem;
    margin-left: .3rem;
  `}
`

export default ({ as, children }) => {
  as = as || 'h6';
  const Wrapper = styled[as]([styles]);
  return (
    <Wrapper as={as}>
      <span>{children}</span>
    </Wrapper>
  )
}
