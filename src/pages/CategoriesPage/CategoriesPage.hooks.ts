import { useQuery } from '@tanstack/react-query';
import { pb } from '@lib/pocketbase';
import { GtCategoriesResponse } from '@/types/pocketbase-types';

export enum PbCategoryCollections {
  CATEGORIES = 'gt_categories',
  OWN_USER_CATEGORIES = 'gt_own_user_categories',
}

export type PbCategoryCollectionsType =
  | typeof PbCategoryCollections.CATEGORIES
  | PbCategoryCollections.OWN_USER_CATEGORIES;

export const useGetCategories = (
  categoryCollections: PbCategoryCollectionsType
) => {
  return useQuery({
    queryKey: [categoryCollections],
    queryFn: async () =>
      await pb
        .collection(categoryCollections)
        .getFullList<GtCategoriesResponse>(),
  });
};
