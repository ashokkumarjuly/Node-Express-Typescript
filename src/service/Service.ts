
import {GetPostByIdSignature, GetPostsSignature } from './../repo/interface/posts';
import CommonServiceSignature from './utils/CommonServiceSignature';

export default interface Service {

  readonly getPostById: GetPostByIdSignature;
  readonly getPosts: GetPostsSignature;

  readonly clearService: CommonServiceSignature;
  readonly migrate: CommonServiceSignature;
  readonly rollback: CommonServiceSignature;
}
