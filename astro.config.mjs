import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Chai Builder',
			logo: {
				src: './src/assets/logo.png'
			},
			social: {
				github: 'https://github.com/chaibuilder',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Chai Builder?', link: '/start/what-is-chai-builder' },
						{ label: 'Quick start', link: '/start/quick-start' },
						{ label: 'Packages', link: '/start/packages' },
						{ label: 'Starters', link: '/start/starters' },
						{ label: 'Deploy', link: '/start/deploy' },
						{ label: 'Changelog', link: '/start/changelog' },
					],
				},
				{
					label: 'Chai Blocks',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/chai-blocks/overview' },
						{ label: 'Registering custom blocks', link: '/chai-blocks/registering-custom-blocks' },
					],
				},
				{
					label: 'Chai Data Providers',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/start/s/' },
						{ label: 'Registering a data provider', link: '/blocks/registering-data-providers' },
						{ label: 'Data binding', link: '/start/nextjs-app/' },
					],
				},
				{
					label: 'Controls',
					items: [
						{ label: 'Overview', link: '/start/s/' },
						{ label: 'Styles', link: '/start/s/' },
						{ label: 'SingleLineText', link: '/start/nextjs-app/' },
						{ label: 'MultiLineText', link: '/start/nextjs-app/' },
						{ label: 'RichText', link: '/start/nextjs-app/' },
						{ label: 'Numeric', link: '/start/nextjs-app/' },
						{ label: 'SelectOption', link: '/start/nextjs-app/' },
						{ label: 'Slot', link: '/start/nextjs-app/' },
						{ label: 'Model', link: '/start/nextjs-app/' },
						{ label: 'List', link: '/start/nextjs-app/' },
						{ label: 'Color', link: '/start/nextjs-app/' },
						{ label: 'Icon', link: '/start/nextjs-app/' },
						{ label: 'Link', link: '/start/nextjs-app/' },
						{ label: 'Image', link: '/start/nextjs-app/' },
						{ label: 'Checkbox', link: '/start/nextjs-app/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
