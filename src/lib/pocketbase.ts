import PocketBase from 'pocketbase';
import { TypedPocketBase } from '@/types/pocketbase-types';

export const pb = new PocketBase(process.env.PB_TYPEGEN_URL) as TypedPocketBase;
