export const VARCHAR_FIELD_LENGTH: number = 255;
export const TEXT_FIELD_LENGTH: number = 21844;

export const USER_MODEL_VISIBLE_PROPERTIES = ['id','firstname', 'lastname', 'bio', 'email','password','created_at', 'updated_at'];
export const POST_MODEL_VISIBLE_PROPERTIES = ['id','title', 'body', 'user_id', 'created_at', 'updated_at'];
export const COMMENT_MODEL_VISIBLE_PROPERTIES = ['id', 'body', 'user_id', 'post_id', 'created_at', 'updated_at'];
export const ROLE_MODEL_VISIBLE_PROPERTIES = ['id','name', 'description','created_at', 'updated_at'];
export const PERMISSION_MODEL_VISIBLE_PROPERTIES = ['id','name', 'label', 'description','created_at', 'updated_at'];

