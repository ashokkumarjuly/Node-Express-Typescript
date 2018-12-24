export const CAN_GET_USER: string = 'user.show';
export const CAN_GET_USERS: string = 'users.index';
export const CAN_UPDATE_USER: string = 'user.update';
export const CAN_DELETE_USER: string = 'user.delete';
export const CAN_CREATE_USER: string = 'user.create';

export const CAN_GET_ROLE: string = 'role.show';
export const CAN_GET_ROLES: string = 'roles.index';
export const CAN_UPDATE_ROLE: string = 'role.update';
export const CAN_DELETE_ROLE: string = 'role.delete';
export const CAN_CREATE_ROLE: string = 'role.create';
export const CAN_ASSIGN_ROLE: string = 'role.assign';
export const CAN_REVOKE_ROLE: string = 'role.revoke';

export const CAN_GET_PERMISSION: string = 'permission.show';
export const CAN_GET_PERMISSIONS: string = 'permissions.index';
export const CAN_UPDATE_PERMISSION: string = 'permission.update';
export const CAN_DELETE_PERMISSION: string = 'permission.delete';
export const CAN_CREATE_PERMISSION: string = 'permission.create';
export const CAN_ASSIGN_PERMISSION: string = 'permission.assign';
export const CAN_REVOKE_PERMISSION: string = 'permission.revoke';

export const CAN_GET_POST: string = 'post.show';
export const CAN_GET_POSTS: string = 'posts.index';
export const CAN_UPDATE_POST: string = 'post.update';
export const CAN_DELETE_POST: string = 'post.delete';
export const CAN_CREATE_POST: string = 'post.create';

export const CAN_GET_COMMENT: string = 'comment.show';
export const CAN_GET_COMMENTS: string = 'comments.index';
export const CAN_UPDATE_COMMENT: string = 'comment.update';
export const CAN_DELETE_COMMENT: string = 'comment.delete';
export const CAN_CREATE_COMMENT: string = 'comment.create';

export const CAN_ADMINISTER: string = 'administer';

export const DEFAULT_ADMIN_PERMISSIONS: any[] = [
  {
    name: CAN_ADMINISTER,
    label: 'Allows to perform any action'
  },
];

export const DEFAULT_USER_PERMISSIONS: any[] = [
  //USERS
  {
    name: CAN_GET_USERS,
    label: 'Allows to get all users'
  },
  {
    name: CAN_GET_USER,
    label: 'allows to get user for a given id'
  },
  {
    name: CAN_UPDATE_USER,
    label: 'allows to update user for a given id'
  },
  {
    name: CAN_DELETE_USER,
    label: 'allows to get delete for a given id'
  },

  //POSTS
  {
    name: CAN_GET_POSTS,
    label: 'Allows to get all posts'
  },
  {
    name: CAN_GET_POST,
    label: 'Allows to get post for a given id'
  },
  {
    name: CAN_CREATE_POST,
    label: 'Allows to create a new post'
  },
  {
    name: CAN_UPDATE_POST,
    label: 'Allows to update post for a given id'
  },
  {
    name: CAN_DELETE_POST,
    label: 'Soft deletes post by a given id'
  },

   //COMMENTS
  {
    name: CAN_GET_COMMENTS,
    label: 'Allows to get all comments'
  },
  {
    name: CAN_GET_COMMENT,
    label: 'Allows to get comment for a given id'
  },
  {
    name: CAN_CREATE_COMMENT,
    label: 'Allows to create a new comment'
  },
  {
    name: CAN_UPDATE_COMMENT,
    label: 'Allows to update comment for a given id'
  },
  {
    name: CAN_DELETE_COMMENT,
    label: 'Soft deletes comment by a given id'
  },

];

export const DEFAULT_USER_ROLE = {
  name: 'user',
  description: 'default user role',
};

