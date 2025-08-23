import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const  ANIMATING_HEADING_GRADIENTS = `text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 via-orange-500 via-yellow-300 via-green-600 via-blue-400 to-purple-500 animate-gradient`;