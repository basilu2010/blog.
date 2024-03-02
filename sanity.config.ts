import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemas } from './schemaTypes';
import { deskTool } from 'sanity/desk';
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import { structureTool } from 'sanity/structure';
import { NewspaperIcon } from '@heroicons/react/20/solid';

const config = defineConfig({
	name: 'BLOG',
	title: 'Blog. Studio',
	basePath: '/studio',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	icon: NewspaperIcon,
	studio: {
		components: {
			navbar: StudioNavbar,
		},
	},
	plugins: [structureTool(), visionTool()],
	theme: myTheme,
	schema: {
		types: schemas,
	},
});
export default config;
