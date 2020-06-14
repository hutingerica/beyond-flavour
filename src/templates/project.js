import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Project extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="inner outer">
              <article className="post post-full">
                <header className="post-header inner-sm-left">
                  <h1 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                </header>
                <div className="recipe-brief inner-sm">
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <p className="post-subtitle">
                      {_.get(this.props, 'pageContext.frontmatter.subtitle')}</p>
                  }

                  {_.get(this.props, 'pageContext.frontmatter.image') && 
                      <div className="post-heroimage">
                        <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.image'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                      </div>
                  }
                </div>
                
                <div className="post-content inner-sm">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
              </article>
            </div>
            </Layout>
        );
    }
}
