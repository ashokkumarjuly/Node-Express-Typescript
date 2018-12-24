
import {GetPostByIdSignature, GetPostsSignature} from './modelRepo/posts';
// import SendEmailSignature from './mailRepo/sendEmail/Signature';

export interface ModelRepoInterface {

    readonly getPostById: GetPostByIdSignature;
    readonly getPosts: GetPostsSignature;

    readonly clearRepo: () => Promise<void>;
    readonly migrate: () => Promise<void>;
    readonly rollback: () => Promise<void>;
}

export interface MailRepoInterface {
    // readonly sendEmail: SendEmailSignature;
}

export default interface Repo extends ModelRepoInterface, MailRepoInterface {}
