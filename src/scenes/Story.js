import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Redirect, Route, Link, Switch } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";

import { expandMedia } from "actions/media";

import swipe from "utils/swipe";

import Page from "components/Page";

import Media from "components/Media";
import Story from "components/Story";
import Modal from "components/Modal";

import Chapter1 from "./articles/1-GoldMines";
import Chapter2 from "./articles/2-Refugees";
import Chapter3 from "./articles/3-JungleFever";
import Chapter4 from "./articles/4-CaribbeanCrossroads";
import Chapter5 from "./articles/5-AroundTheWorld";

const articles = [
  "/story",
  "/story/refugees",
  "/story/jungle-fever",
  "/story/caribbean-crossroads",
  "/story/around-the-world"
];

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      entering: false
    };
    this.nextArticle = this.nextArticle.bind(this);
    this.onStoryEnter = this.onStoryEnter.bind(this);
    this.onStoryEntered = this.onStoryEntered.bind(this);
    this.unexpand = this.unexpand.bind(this);
  }
  componentDidMount() {
    this.removeSwipeListeners = swipe(findDOMNode(this), direction => {
      this.nextArticle(direction);
    });
    if (twttr) twttr.widgets.load();
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (
      (!prevProps.location.pathname ||
        location.pathname !== prevProps.location.pathname) &&
      twttr
    ) {
      twttr.widgets.load();
    }
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
    }
  }
  componentWillUnmount() {
    if (this.removeSwipeListeners) {
      this.removeSwipeListeners();
      this.removeSwipeListeners = undefined;
    }
  }
  isLastArticle() {
    const { location } = this.props;
    const idx = articles.findIndex(article => {
      return location.pathname == article;
    });
    if (idx == articles.length - 1) return true;
    return false;
  }
  nextArticle(direction) {
    direction = direction || "left";
    const { location } = this.props;
    const idx = articles.findIndex(article => {
      return location.pathname == article;
    });
    if (direction == "left" && idx < articles.length - 1) {
      this.setState({
        redirect: articles[idx + 1]
      });
    } else if (direction == "right" && idx > 0) {
      this.setState({
        redirect: articles[idx - 1]
      });
    }
  }
  onStoryEnter() {
    this.setState({
      entering: true
    });
  }
  onStoryEntered() {
    this.setState({
      entering: false
    });
  }
  unexpand() {
    this.props.expandMedia(false);
  }
  render() {
    const { redirect, entering } = this.state;
    const { location, match, media } = this.props;
    return (
      <Page>
        <Helmet>
          <meta property="og:type" content="article" />
        </Helmet>
        <Story className="content">
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="pages-transition"
              timeout={600}
              onEnter={this.onStoryEnter}
              onEntered={this.onStoryEntered}
            >
              <Switch location={location}>
                <Route exact path={`${match.url}`} component={Chapter1} />
                <Route path={`${match.url}/refugees`}component={Chapter2} />
                <Route path={`${match.url}/jungle-fever`} component={Chapter3} />
                <Route path={`${match.url}/caribbean-crossroads`} component={Chapter4} />
                <Route path={`${match.url}/around-the-world`} component={Chapter5} />
                <Route
                  render={() => (
                    <Helmet>
                      <meta name="prerender-status-code" content="404" />
                    </Helmet>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          {!entering ? (
            <footer>
              <Container>
                {!this.isLastArticle() ? (
                  <Paragraph>
                    <a
                      className="continue"
                      onClick={() => this.nextArticle()}
                      href="javascript:void(0);"
                    >
                      <FormattedMessage
                        id="story.continueReading"
                        defaultMessage="Continue reading"
                      />
                      <span className="fa fa-chevron-right" />
                    </a>
                  </Paragraph>
                ) : null}
              </Container>
            </footer>
          ) : null}
          {redirect &&
            redirect !== location.pathname && <Redirect to={redirect} />}
        </Story>
        <Media media={media} preview={true} />
        {media.expanded && (
          <Modal close={this.unexpand}>
            <Media media={media} />
          </Modal>
        )}
      </Page>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    media: state.media
  };
};

const mapDispatchToProps = {
  expandMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
