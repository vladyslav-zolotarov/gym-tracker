/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
  GtCategories = 'gt_categories',
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

export type UsersRecord = {
  avatar?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type GtCategoriesResponse<Texpand = unknown> =
  Required<GtCategoriesRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  gt_categories: GtCategoriesRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  gt_categories: GtCategoriesResponse;
  users: UsersResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'gt_categories'): RecordService<GtCategoriesResponse>;
  collection(idOrName: 'users'): RecordService<UsersResponse>;
};
