/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from '../pages/last/Nav3';
import Footer0 from '../pages/last/Footer0';

import {
    Nav30DataSource,
    Footer00DataSource,
} from '../pages/last/data.source';
import '../pages/last/less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;


export default function Index(props) {
    return (
        <>
            <Nav3
                id="Nav3_0"
                key="Nav3_0"
                dataSource={Nav30DataSource}
                isMobile={isMobile}
            />
            { props.children }
            <Footer0
                id="Footer0_0"
                key="Footer0_0"
                dataSource={Footer00DataSource}
                isMobile={isMobile}
            />
        </>
    )
}


