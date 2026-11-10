// Resolved instead of `load-prettier.ts` when the consumer enables the
// `react-email-no-prettier` condition, so Prettier never enters their bundle.
export const format = (): never => {
  throw new Error(
    'Prettier is not available because the "react-email-no-prettier" condition is enabled. Remove that condition to use `pretty`.',
  );
};

export const html = {};
