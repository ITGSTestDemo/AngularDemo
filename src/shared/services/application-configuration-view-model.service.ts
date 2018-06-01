import { Injectable } from '@angular/core';

import { ConfigurationModel } from '../../shared/models/configuration.model';

/**
 * Central configuration view, used to interact with passive configuration model class from other services.
 * Actually, you should not have a reason to use it directly, use ConfigurationService instead!
 *
 * TODO: We should have some initial config for not logged in users and some more profound config options for logged in
 */
@Injectable()
export class ApplicationConfigurationViewModelService {

  /**
   * Store of main app configuration
   */
  private configPrivate: ConfigurationModel;

  /**
   * Getter for app configuration values
   */
  get application(): ConfigurationModel {
    return this.configPrivate;
  }

  constructor() {
    this.configPrivate = this.requestAppConfiguration();
  }

  /**
   * Fill in configuration from ... for now only stub here
   */
  private requestAppConfiguration(): ConfigurationModel {
    return  this.mockAppConfiguration();
  }

  /**
   * Data for application tests
   */
  private mockAppConfiguration(): ConfigurationModel {

      // fill in default app configuration, just while we do not have back-end source //TODO
      const config = new ConfigurationModel();
      config.loggedInDefaultRoute = '/admin';
      config.logOutDefaultRoute  = '/logout';

      config.nameLengthMin = 2;
      config.passwordLengthMin = 9; // more https://jira.indg.net:8443/browse/GP-57
      config.literalLengthMax = 30;
      config.emailLengthMin = 6;
      config.emailLengthMax = 30;
      config.userPicSizeMax = 1024 * 1024 * 5; // more https://jira.indg.net:8443/projects/GP/issues/GP-121
      config.userPicFormatsAllowed = '.jpg,.jpeg,.png';
      config.defaultUserPicEditImage = '/assets/images/camera-white.svg';
      config.defaultUserPicImage = '/assets/images/userpic-none-gray.svg';
      config.notificationModes = [
        {value: 0, viewValue: 'Notification and email'},
        {value: 1, viewValue: 'Notification'},
        {value: 2, viewValue: 'Email'},
        {value: 3, viewValue: 'No notifications'}
      ];
      config.usersPageSize = 16;
      return config;
  }
}
