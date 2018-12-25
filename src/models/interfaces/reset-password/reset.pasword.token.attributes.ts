export interface ResetPasswordTokenAttributes {
  id?: number,
  user_id: number,
  token: string,
  created_at?: string,
  updated_at?: string,
  deleted_at?: string
}

