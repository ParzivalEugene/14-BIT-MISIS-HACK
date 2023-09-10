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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      MatchingPool: {
        Row: {
          createdAt: string
          id: number
          possibleFriendId: number
          profileId: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          possibleFriendId: number
          profileId: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          possibleFriendId?: number
          profileId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "MatchingPool_possibleFriendId_fkey"
            columns: ["possibleFriendId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "MatchingPool_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Photo: {
        Row: {
          id: number
          imagePath: string
          profileId: number | null
        }
        Insert: {
          id?: number
          imagePath: string
          profileId?: number | null
        }
        Update: {
          id?: number
          imagePath?: string
          profileId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Photo_profileId_fkey"
            columns: ["profileId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Profile: {
        Row: {
          banned: boolean
          bio: string | null
          course: Database["public"]["Enums"]["CourseEnum"]
          createdAt: string
          deleted: boolean
          firstName: string
          id: number
          lastName: string
          mainFriendId: number | null
          randomMeetingPoolId: number
          sex: Database["public"]["Enums"]["Sex"]
          tags: string[] | null
          university: Database["public"]["Enums"]["universityEnum"]
          updatedAt: string
          userId: number
        }
        Insert: {
          banned?: boolean
          bio?: string | null
          course?: Database["public"]["Enums"]["CourseEnum"]
          createdAt?: string
          deleted?: boolean
          firstName: string
          id?: number
          lastName: string
          mainFriendId?: number | null
          randomMeetingPoolId: number
          sex: Database["public"]["Enums"]["Sex"]
          tags?: string[] | null
          university: Database["public"]["Enums"]["universityEnum"]
          updatedAt: string
          userId: number
        }
        Update: {
          banned?: boolean
          bio?: string | null
          course?: Database["public"]["Enums"]["CourseEnum"]
          createdAt?: string
          deleted?: boolean
          firstName?: string
          id?: number
          lastName?: string
          mainFriendId?: number | null
          randomMeetingPoolId?: number
          sex?: Database["public"]["Enums"]["Sex"]
          tags?: string[] | null
          university?: Database["public"]["Enums"]["universityEnum"]
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Profile_mainFriendId_fkey"
            columns: ["mainFriendId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Profile_randomMeetingPoolId_fkey"
            columns: ["randomMeetingPoolId"]
            referencedRelation: "RandomMeetingPool"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Profile_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      RandomMeetingPool: {
        Row: {
          createdAt: string
          id: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          updatedAt?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          id: number
          password: string
          username: string
        }
        Insert: {
          id?: number
          password: string
          username: string
        }
        Update: {
          id?: number
          password?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      CourseEnum: "Bachelor" | "Master" | "phd"
      Sex: "Man" | "Woman"
      TagsEnum:
        | "IT"
        | "Design"
        | "Linguistics"
        | "Physics"
        | "Hobby"
        | "Music"
        | "Animals"
        | "Programming"
        | "WebDevelopment"
        | "MobileDevelopment"
        | "DataAnalysis"
        | "ArtificialIntelligence"
        | "ProgrammingLanguages"
        | "GraphicDesign"
        | "Photography"
        | "Literature"
        | "Sports"
        | "Travel"
        | "Cooking"
        | "Ecology"
        | "Psychology"
        | "Medicine"
        | "Business"
      universityEnum: "demo"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
