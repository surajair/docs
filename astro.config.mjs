import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.chaibuilder.com',
	integrations: [
		starlight({
			title: 'Chai Builder',
			description: 'Low-code tool for visually building content driven websites.',
			logo: {
				src: './src/assets/logo.png'
			},
			social: {
				github: 'https://github.com/chaibuilder',
				discord: 'https://discord.gg/33QEAv4h',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Chai Builder?', link: '/start/what-is-chai-builder' },
						{ label: 'Quick start (NextJS)', link: '/start/quick-start' },
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
						{ label: 'Overview', link: '/blocks/overview' },
						{ label: 'Registering custom blocks', link: '/blocks/registering-custom-blocks' },
					],
				},
				{
					label: 'Chai Data Providers',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/data-provider/overview' },
						{ label: 'Registering a data provider', link: '/data-provider/registering-data-provider' },
						// { label: 'Data binding', link: '/data-provider/data-binding' },
					],
				},
				{
					label: 'Controls',
					items: [
						{ label: 'Overview', link: '/controls/controls-overview' },
						{ label: 'Styles', link: '/controls/styles' },
						{ label: 'SingleLineText', link: '/controls/single-line-text' },
						{ label: 'MultiLineText', link: '/controls/multi-line-text' },
						{ label: 'RichText', link: '/controls/rich-text' },
						{ label: 'Numeric', link: '/controls/numeric' },
						{ label: 'SelectOption', link: '/controls/select-option' },
						{ label: 'Slot', link: '/controls/slot' },
						{ label: 'Model', link: '/controls/model' },
						{ label: 'List', link: '/controls/list' },
						{ label: 'Color', link: '/controls/color' },
						{ label: 'Icon', link: '/controls/icon' },
						{ label: 'Link', link: '/controls/link' },
						{ label: 'Image', link: '/controls/image' },
						{ label: 'Checkbox', link: '/controls/checkbox' },
					],
				}
			],
			components: {
				Footer: './src/components/Footer.astro',
			}
		}),
	],
});
