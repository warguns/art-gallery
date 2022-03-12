const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const art_backend = [
  ...common,
  'tests/apps/art/backend/features/**/*.feature',
  '--require tests/apps/art/backend/features/step_definitions/*.steps.ts'
].join(' ');

const backoffice_backend = [
  ...common,
  'tests/apps/backoffice/backend/features/**/*.feature',
  '--require tests/apps/backoffice/backend/features/step_definitions/*.steps.ts'
].join(' ');
const mooc_backend = [
  ...common,
  'tests/apps/mooc/backend/features/**/*.feature',
  '--require tests/apps/mooc/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  art_backend,
  backoffice_backend,
  mooc_backend
};
