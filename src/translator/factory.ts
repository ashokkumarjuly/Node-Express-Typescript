
import { en } from './languages';
import Translator from './Translator';
import appConfig from '../appConfig';

export default (): Translator => {
    switch (appConfig.lang) {
        case 'en':
        default:
            return en;
    }
}
