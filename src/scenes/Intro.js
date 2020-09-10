import React, { Component } from "react";
import { Helmet } from "react-helmet";

import PageIntro from "components/PageIntro";

import MapBoxIntro from "components/Intro";

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageIntro>
        <Helmet>
          <meta property="og:type" content="article" />
        </Helmet>
        <MapBoxIntro className="content">

        </MapBoxIntro>
      </PageIntro>
    );
  }
}


export default (Intro);