export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      completed_workouts: {
        Row: {
          id: number
          metcon_time: unknown | null
          reps_completed: number | null
          run_distance: number | null
          run_pace: unknown | null
          sets_completed: number | null
          user_id: string | null
          weight_lifted: number | null
          workout_date: string | null
          workout_id: number | null
          workout_name: string | null
          workout_type: Database["public"]["Enums"]["workout_type"] | null
        }
        Insert: {
          id?: number
          metcon_time?: unknown | null
          reps_completed?: number | null
          run_distance?: number | null
          run_pace?: unknown | null
          sets_completed?: number | null
          user_id?: string | null
          weight_lifted?: number | null
          workout_date?: string | null
          workout_id?: number | null
          workout_name?: string | null
          workout_type?: Database["public"]["Enums"]["workout_type"] | null
        }
        Update: {
          id?: number
          metcon_time?: unknown | null
          reps_completed?: number | null
          run_distance?: number | null
          run_pace?: unknown | null
          sets_completed?: number | null
          user_id?: string | null
          weight_lifted?: number | null
          workout_date?: string | null
          workout_id?: number | null
          workout_name?: string | null
          workout_type?: Database["public"]["Enums"]["workout_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "completed_workouts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "completed_workouts_workout_id_fkey"
            columns: ["workout_id"]
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          }
        ]
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      programs: {
        Row: {
          created_at: string | null
          id: number
          program_description: string | null
          program_name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          program_description?: string | null
          program_name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          program_description?: string | null
          program_name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_training: {
        Row: {
          active_program: number | null
          completed_workouts: number | null
          created_at: string | null
          id: string
          next_workout: string | null
          updated_at: string | null
        }
        Insert: {
          active_program?: number | null
          completed_workouts?: number | null
          created_at?: string | null
          id: string
          next_workout?: string | null
          updated_at?: string | null
        }
        Update: {
          active_program?: number | null
          completed_workouts?: number | null
          created_at?: string | null
          id?: string
          next_workout?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_training_active_program_fkey"
            columns: ["active_program"]
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_training_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          current_program: string | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          current_program?: string | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          current_program?: string | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      wods: {
        Row: {
          created_at: string | null
          date: string | null
          description: string | null
          id: number
          notes: string | null
          title: string | null
          workout: Json | null
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          description?: string | null
          id?: number
          notes?: string | null
          title?: string | null
          workout?: Json | null
        }
        Update: {
          created_at?: string | null
          date?: string | null
          description?: string | null
          id?: number
          notes?: string | null
          title?: string | null
          workout?: Json | null
        }
        Relationships: []
      }
      workouts: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          program_id: number | null
          training: Json | null
          training_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          program_id?: number | null
          training?: Json | null
          training_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          program_id?: number | null
          training?: Json | null
          training_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_program_id_fkey"
            columns: ["program_id"]
            referencedRelation: "programs"
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
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
      workout_type: "weights" | "runs" | "metcons"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
