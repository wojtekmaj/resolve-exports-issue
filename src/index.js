import { min } from '@my-org/utils/math';

// Just to test if import/no-unresolved works correctly
import okayToImport from './okay-to-import';

okayToImport();

export default function main() {
  return min(3, 5, 7); // returns 3
}

console.log(main());
