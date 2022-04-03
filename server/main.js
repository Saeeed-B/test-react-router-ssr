import { renderWithSSR } from "meteor/communitypackages:react-router-ssr";
import React from "react";
import {Main} from '../imports/ui/Main';
renderWithSSR(<Main />, {
    renderTarget: 'react-target',
  });
  

import '../imports/api/Link'
import '../imports/Publish/LinksPublish'
import '../imports/Method/LinkMethod'

