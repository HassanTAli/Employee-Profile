import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCookie } from "cookies-next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAuth = getCookie("access_token");
