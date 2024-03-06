/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
  GtCategories = 'gt_categories',
  GtCategoryExercises = 'gt_category_exercises',
  GtOwnUserCategories = 'gt_own_user_categories',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type GtCategoriesRecord = {
  description?: string;
  icon?: string;
  name?: string;
};

export type GtCategoryExercisesRecord = {
  category_id?: RecordIdString;
  name?: string;
};

export type GtOwnUserCategoriesRecord = {
  description?: string;
  icon?: string;
  name?: string;
  user_id?: RecordIdString;
};

export type UsersRecord = {
  avatar?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type GtCategoriesResponse<Texpand = unknown> =
  Required<GtCategoriesRecord> & BaseSystemFields<Texpand>;
export type GtCategoryExercisesResponse<Texpand = unknown> =
  Required<GtCategoryExercisesRecord> & BaseSystemFields<Texpand>;
export type GtOwnUserCategoriesResponse<Texpand = unknown> =
  Required<GtOwnUserCategoriesRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  gt_categories: GtCategoriesRecord;
  gt_category_exercises: GtCategoryExercisesRecord;
  gt_own_user_categories: GtOwnUserCategoriesRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  gt_categories: GtCategoriesResponse;
  gt_category_exercises: GtCategoryExercisesResponse;
  gt_own_user_categories: GtOwnUserCategoriesResponse;
  users: UsersResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'gt_categories'): RecordService<GtCategoriesResponse>;
  collection(
    idOrName: 'gt_category_exercises'
  ): RecordService<GtCategoryExercisesResponse>;
  collection(
    idOrName: 'gt_own_user_categories'
  ): RecordService<GtOwnUserCategoriesResponse>;
  collection(idOrName: 'users'): RecordService<UsersResponse>;
};
