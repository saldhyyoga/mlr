import React from 'react';
import { RedocStandalone } from 'redoc';
import test from '../../../helper/apidocnew.json';

export default function ApiDoc() {
  return (
    <div>
      <RedocStandalone
        spec={test}
        onLoaded={error => {
          if (!error) {
            console.log('Yay!');
          }
        }}
      />
    </div>
  )
}
