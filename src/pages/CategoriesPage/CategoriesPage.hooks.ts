import { useMutation, useQuery } from '@tanstack/react-query';
import { pb } from '@lib/pocketbase';
import { Collections, GtCategoriesResponse } from '@/types/pocketbase-types';

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

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: ['createCategory'],
    mutationFn: async (data: any) => {
      await pb.collection(Collections.GtOwnUserCategories).create(data);
    },
  });
};
