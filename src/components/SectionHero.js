import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-hero outer">
              <div className="inner">
                {_.get(section, 'content') && 
                <div className="block-content-index inner">
                  {markdownify(_.get(section, 'content'))}
                </div>
                }
                {_.get(section, 'title') && 
                <div className="block-header inner">
                  <h1 className="block-title">{_.get(section, 'title')}</h1>
                </div>
                }
                {_.get(section, 'actions') && 
                <div className="block-buttons inner">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions')} />
                </div>
                }
              </div>
            </section>
        );
    }
}
