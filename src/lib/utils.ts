import type { ClassValue } from 'clsx';
import type { Abi, AbiFunction } from 'viem';
import type { EFeatureName } from './features';
import type { EModuleName } from './modules';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createPublicClient, http, keccak256, stringToHex } from 'viem';

import { chain } from './dapp-config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function separateCamelCase(input: string): string {
  return input.replaceAll(/([a-z])([A-Z])/g, '$1 $2');
}

export function generateArtifactKey(moduleName: EModuleName, featureNames: EFeatureName[]): string {
  const sortedFeatureNames = featureNames.sort();
  return keccak256(stringToHex(`${moduleName}-${sortedFeatureNames.join('-')}`));
}

export function stringifyResponse(response: unknown): string {
  if (typeof response === 'bigint') {
    return response.toString();
  }

  if (Array.isArray(response)) {
    return JSON.stringify(
      // eslint-disable-next-line unicorn/no-array-reduce
      response.reduce<Record<string, string>>((acc, value, index) => {
        acc[`${index}`] = stringifyResponse(value);
        return acc;
      }, {}),
      null,
      2
    );
  }

  if (typeof response === 'object' && response !== null) {
    return JSON.stringify(
      Object.entries(response)
        .map(([key, value]) => ({
          [key]: stringifyResponse(value)
        }))
        // eslint-disable-next-line unicorn/no-array-reduce
        .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      null,
      2
    );
  }
  return String(response);
}

export default function filterAbiFunction(abi: Abi) {
  const readFunctions: AbiFunction[] = [];
  const writeFunctions: AbiFunction[] = [];

  for (const item of abi) {
    if (item.type === 'function') {
      if (item.stateMutability === 'view' || item.stateMutability === 'pure') {
        readFunctions.push(item);
      } else {
        writeFunctions.push(item);
      }
    }
  }

  return { readFunctions, writeFunctions };
}

export const publicClinet = createPublicClient({
  transport: http(),
  chain,
  batch: {
    multicall: {
      wait: 1
    }
  }
});

/**
 * Function to convert a UTC timestamp to a formatted date string.
 *
 * @param timestamp - The UTC timestamp in seconds from the smart contract.
 * @returns The formatted date string.
 */
export function formatTimestamp(date: Date): string {
  // Smart contract timestamp is usually in seconds
  // Use Intl.DateTimeFormat to format the date in a nice way (customize locale as needed)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  };

  // Format date for a specific locale
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function calculatePrice(raiseTarget: bigint, offeringAmount: bigint) {
  return (raiseTarget * 10n ** 18n) / offeringAmount;
}
