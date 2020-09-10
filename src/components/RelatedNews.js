import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from '../styles/utils';

const Wrapper = styled.div`
  max-width: 500px;
  display: block;
  margin: 0 auto;
  background-color:#ffffff;
  margin: 0 4vw 4vh 4vw;
  a {
      color:#434343;
      font-size:1rem;
  }
  .more-content {
    text-align:left;
  }
  img {
      margin:0px;
  }
`

const RelatedNews = ({ title, imageUrl, href }) => {
  return (    
    <Wrapper>
      <div className="more-content">
        <a href={href} target='_blank'>
          <div className="related-content">
            <h3>{title}</h3>
            <img src={imageUrl} />
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

RelatedNews.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default RelatedNews;