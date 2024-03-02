import { buildLegacyTheme } from 'sanity';

const props = {
	'--my-white': '#fff',
	'--my-black': '#1a1a1a',
	'--glb-brand': '#ff7878',
	'--my-red': '#db4437',
	'--my-yellow': '#f4b400',
	'--my-green': '#0f9d58',
};

export const myTheme = buildLegacyTheme({
	'--black': props['--my-black'],
	'--white': props['--my-white'],

	'--gray': '#666',
	'--gray-base': '#666',

	'--component-bg': props['--my-black'],
	'--component-text-color': props['--my-white'],

	'--brand-primary': props['--glb-brand'],

	'--default-button-color': '#fff',
	'--default-button-primary-color': props['--glb-brand'],
	'--default-button-success-color': props['--my-green'],
	'--default-button-warning-color': props['--my-yellow'],
	'--default-button-danger-color': props['--my-red'],

	'--main-navigation-color': props['--my-black'],
	'--main-navigation-color--inverted': props['--my-white'],

	'--state-info-color': props['--glb-brand'],
	'--state-success-color': props['--my-green'],
	'--state-warning-color': props['--my-yellow'],
	'--state-danger-color': props['--my-red'],

	'--focus-color': props['--glb-brand'],
});
