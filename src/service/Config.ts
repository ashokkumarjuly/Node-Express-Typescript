import Repo from '../repo/Repo';


export default interface Config {
  readonly repo: Repo,
  readonly logger: any
}
