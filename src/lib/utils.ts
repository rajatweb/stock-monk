import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as crypto from 'crypto';
import { IUser } from "@/types/user";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getHash = (input: string) =>
  crypto.createHash('sha256').update(input).digest('hex');

interface ISetAppLocalStorageProps {
  name: string;
  payload: IUser;
}

export const setAppLocalStorage = ({
  name,
  payload
}: ISetAppLocalStorageProps) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, JSON.stringify(payload));
  } else {
    return;
  }
}