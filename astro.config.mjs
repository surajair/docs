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
					label: 'Overview',
					items: [
						{ label: 'What is Chai Builder?', link: '/start/what-is-chai-builder' },
					],
				},
				{
					label: "ChaiBuilderEditor",
					items: [
						{ label: 'Installation', link: '/start/manual-installation' },
					]
				},
				{
					label: "ChaiBuilderStudio",
					items: []
				},
				{
					label: "ChaiBuilderEmail",
					items: []
				},
				{
					label: 'Blocks',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/blocks/overview' },
						{ label: 'Registering custom blocks', link: '/blocks/registering-custom-blocks' },
					],
				},
				{
					label: 'Data Providers',
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
