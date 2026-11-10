import type { Options } from '../shared/options';
import { pretty } from '../shared/utils/pretty';
import { render as renderCore } from './render-core';

export const render = async (
  element: React.ReactElement,
  options?: Options,
) => {
  const result = await renderCore(element, options);

  if (options?.pretty && !options.plainText) {
    return pretty(result);
  }

  return result;
};
