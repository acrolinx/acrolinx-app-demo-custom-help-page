/*
 * Copyright 2021-present Acrolinx GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, softwareq
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {initApi, RequiredCommands} from '@acrolinx/app-sdk';
import packageJson from '../package.json';
import './index.css';

const appApi = initApi({
  title: 'Select Ranges',
  version: packageJson.version,

  button: {
    text: 'Extract Text',
    tooltip: 'Extract text and select words in the document'
  },

  requiredEvents: [],
  requiredCommands: [RequiredCommands.openWindow]
});


function startApp() {

  let linkElementsNew = document.querySelectorAll<HTMLLinkElement>('.normal-link')!;
  linkElementsNew.forEach((el) => {
    el.addEventListener(('click'), (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      console.log('Here ' + el.href);
      appApi.commands.openWindow(el.href);
    });
  })

  // let linkElements = document.querySelectorAll('a')!;
  // linkElements.forEach((el) => {
  //   el.addEventListener(('click'), (ev) => {
  //     ev.preventDefault();
  //     ev.stopPropagation();
  //     const urlToOpen = el.getAttribute('data-href') as string;
  //     console.log(urlToOpen);
  //     appApi.commands.openWindow(urlToOpen);
  //   });
  // })

  let linkDivElements = document.querySelectorAll('.href')!;
  linkDivElements.forEach((el) => {
    el.addEventListener(('click'), (ev) => {
      const urlToOpen = el.getAttribute('data-href') as string;
      console.log(urlToOpen);
      appApi.commands.openWindow(urlToOpen);
    });
  })
}

startApp();
