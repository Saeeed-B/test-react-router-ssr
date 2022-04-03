import { renderWithSSR } from "meteor/communitypackages:react-router-ssr";
import React from "react";
import {Main} from '../imports/ui/Main';
renderWithSSR(<Main />, {
    renderTarget: 'react-target',
  });


