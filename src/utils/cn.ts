import cx, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export default function cn(...inputs: ArgumentArray) {
  return twMerge(cx(inputs));
}
