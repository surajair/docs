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
						{ label: 'What is Chai Builder?', link: '/guides/example/' },
						{ label: 'Quick start', link: '/guides/nextjs-app/' },
						{ label: 'Packages', link: '/guides/nextjs-app/' },
						{ label: 'Changelogs', link: '/guides/nextjs-app/' },
					],
				},
				{
					label: 'Core concepts',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What are chai blocks?', link: '/guides/s/' },
						{ label: 'Default blocks', link: '/guides/nextjs-app/' },
						{ label: 'Registering custom blocks', link: '/guides/nextjs-app/' },
						{ label: 'What are chai data providers?', link: '/guides/nextjs-app/' },
						{ label: 'Registering data providers', link: '/guides/nextjs-app/' },
					],
				},
				{
					label: 'Next JS Apps',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CLI', link: '/guides/s/' },
						{ label: 'Manual setup', link: '/guides/nextjs-app/' },
						{ label: 'Join community', link: '/guides/nextjs-app/' },
						{ label: 'Changelogs', link: '/guides/nextjs-app/' },
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
