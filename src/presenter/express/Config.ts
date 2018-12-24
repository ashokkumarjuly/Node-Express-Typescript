
// import Service from '../../service/Service';
import Translator from '../../translator/Translator';

export default interface Config {
  readonly morganLogFormat: string,
  readonly morganDirectory: string,
  readonly service: any,
  readonly logger: any;
  readonly translator: Translator;
}
