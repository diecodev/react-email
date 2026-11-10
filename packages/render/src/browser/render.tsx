import type { Options } from '../shared/options';
import { pretty } from '../shared/utils/pretty';
import { render as renderCore } from './render-core';

export const render = async (node: React.ReactNode, options?: Options) => {
  const result = await renderCore(node, options);

  if (options?.pretty && !options.plainText) {
    return pretty(result);
  }

  return result;
};
