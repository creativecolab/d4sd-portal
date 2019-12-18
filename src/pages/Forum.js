/* eslint-disable */

import React from 'react';
import { InView } from 'react-intersection-observer';

const Forum = (inView, entry) => (
  <div>
    <div style={{ height: '2000px' }}>hi</div>
    <InView>
      {({ ref }) => (
        <div ref={ref}>
          <h2>{`Header inside viewport ${!inView}.`}</h2>
        </div>
      )}
    </InView>
  </div>
);

export default Forum;
