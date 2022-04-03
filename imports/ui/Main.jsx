import React from 'react';
import { Loadable } from 'meteor/npdev:react-loadable';
import { Switch , Route  } from "react-router-dom";


import  Layout from './Layout'
import  Index from './Index'
import  SSRWork from './SSRWork'
import { Loading } from './Loading';
const SSRNotWork = Loadable({
    loader: () => import('./SSRNotWork'),
    loading: Loading,
    meteor: () => [require.resolve('./SSRNotWork')]
});



const AppRoute = ({component : Component , layout : Layout , ...rest})=>(
    <Route {...rest} render={props=>(
        <Layout>
            <Component {...props} ></Component>
        </Layout>
    )}>
    </Route>
);

export function Main(props) {
    return(
            <Switch>
                <AppRoute layout={Layout} path='/'   component={Index} exact ></AppRoute>
                <AppRoute layout={Layout} path='/ssr-work'   component={SSRWork} exact ></AppRoute>
                <AppRoute layout={Layout} path='/ssr-not-work'   component={SSRNotWork} exact ></AppRoute>
        </Switch>
    )
}