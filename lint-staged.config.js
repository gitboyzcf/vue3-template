export default {
  '**/*.{html,vue,ts,cjs,json,md}': ['prettier --write'],
  '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue,astro,svelte}': ['oxlint && eslint --fix']
}
