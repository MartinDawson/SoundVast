import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import ErrorHandledRoute from './ErrorHandledRoute';
import SocialLoginConfirmation from '../../account/login/socialLogin/socialLoginConfirmation';
import Profile from '../../user/profile/userProfileContainer';
import Upload, { query as uploadQuery } from '../../upload/upload';
import { routeConfig as confirmEmailContainerRouteConfig } from '../../account/confirmEmail/confirmEmailContainer';
import { routeConfig as resetPasswordContainerRouteConfig } from '../../account/resetPassword/resetPasswordContainer';
import { routeConfig as songsContainerRouteConfig } from '../../songs/songsContainer';
import { routeConfig as primaryLayoutContainerRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import Error from '../../error/error';

export default makeRouteConfig(
  <Route path="/">
    <Route {...primaryLayoutContainerRouteConfig}>
      <Route {...songsContainerRouteConfig} />
      <Route path="songs" {...songsContainerRouteConfig} />
      <Route path="account">
        <Route path="externalLoginConfirmation" Component={SocialLoginConfirmation} />
        <Route path="resetPassword" {...resetPasswordContainerRouteConfig} />
        <ErrorHandledRoute path="confirmEmail/:userId/:token" {...confirmEmailContainerRouteConfig} />
      </Route>
      <Route path="upload" Component={Upload} query={uploadQuery} />
      <Route path="profile" Component={Profile} />
      <Route path="error" Component={Error} />
    </Route>
  </Route>,
);
