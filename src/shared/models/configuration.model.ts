
import { environment } from '../../environments/environment';

/**
 * System configuration values
 */
export class ConfigurationModel {

  /**
   * Which route should go user when he open base url
   */
  loggedInDefaultRoute: string;

  /**
   * Link to logout component
   */
  logOutDefaultRoute: string;

  /**
   * Minimal first name / last name length
   */
  nameLengthMin: number;

  /**
   * Minimal email length
   */
  emailLengthMin: number;

  /**
   * Maximal email length
   */
  emailLengthMax: number;

  /**
   * Maximum allowed user pic size in bytes
   */
  userPicSizeMax: number;
  /**
   * Allowed user pic formats - jpg, png, etc
   */
  userPicFormatsAllowed: string;

  /**
   * What to show if user has not yet select its picture and able to edit picture
   */
  defaultUserPicEditImage: string;

  /**
   * What to show if user picture is not presented
   */
  defaultUserPicImage: string;
  /**
   * Minimal password length
   */
  passwordLengthMin: number;

  /**
   * Maximum length for first name, last name, password
   */
  literalLengthMax: number;

  /**
   * Array of possible user notification modes
   */
  notificationModes: object;

  /**
   * Messages for user about problems
   */
  errorMessages: { [key: string]: string };

  /**
   * How many users retrieve per one users find request
   */
  usersPageSize: number;

  /**
   * Application global environment values
   */
  get env() {
    return environment;
  }
}
