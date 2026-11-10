// Resolved through the `#load-prettier` subpath import in package.json.
// Kept as its own module so that consumers can swap it for
// `load-prettier.stub.ts` with the `react-email-no-prettier` condition.

export * as html from 'prettier/plugins/html';
export { format } from 'prettier/standalone';
