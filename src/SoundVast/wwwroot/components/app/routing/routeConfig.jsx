import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import Profile from '../../user/profile/userProfileContainer';
import Error from '../../error/error';
import { routeConfig as uploadRouteConfig } from '../../upload/uploadContainer';
import { routeConfig as socialLoginCallbackRouteConfig } from '../../account/login/socialLogin//socialLoginCallbackContainer';
import { routeConfig as confirmEmailRouteConfig } from '../../account/confirmEmail/confirmEmailContainer';
import { routeConfig as resetPasswordRouteConfig } from '../../account/resetPassword/resetPasswordContainer';
import { routeConfig as songsRouteConfig } from '../../songs/songsContainer';
import { routeConfig as radiosRouteConfig } from '../../radios/radiosContainer';
import { routeConfig as primaryLayoutRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import { routeConfig as genresRouteConfig } from '../../genres/genresContainer';

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...songsRouteConfig} />
    <Route path="songs" {...songsRouteConfig} />
    <Route path="radios/:genre?" {...radiosRouteConfig} />
    <Route path="upload" {...uploadRouteConfig} />
    <Route path="profile" Component={Profile} />
    <Route path="genres/:type" {...genresRouteConfig} />
    <Route path="error" Component={Error} />
    <Route path="account">
      <Route path="externalLoginCallback/:returnUrl" {...socialLoginCallbackRouteConfig} />
      <Route path="resetPassword" {...resetPasswordRouteConfig} />
      <Route path="confirmEmail/:userId/:token" {...confirmEmailRouteConfig} />
    </Route>
  </Route>,
);