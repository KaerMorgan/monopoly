import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addHexTransparency = (color: string) => {
  return (percentage: number): string => {
    const decimal = `0${Math.round(255 * (percentage / 100)).toString(16)}`
      .slice(-2)
      .toUpperCase();
    return color + decimal;
  };
};
