export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      baubles: {
        Row: {
          area: Json
          author: string
          created_at: string
          id: string
          name: string
          palette: Json
        }
        Insert: {
          area: Json
          author?: string
          created_at?: string
          id?: string
          name?: string
          palette?: Json
        }
        Update: {
          area?: Json
          author?: string
          created_at?: string
          id?: string
          name?: string
          palette?: Json
        }
        Relationships: [
          {
            foreignKeyName: "baubles_author_fkey"
            columns: ["author"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name?: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
