import { useQuery } from '@tanstack/react-query';
import { pb } from '@lib/pocketbase';
import { GtCategoriesResponse } from '@/types/pocketbase-types';

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return await pb
        .collection('gt_categories')
        .getFullList<GtCategoriesResponse>();
    },
  });
};
