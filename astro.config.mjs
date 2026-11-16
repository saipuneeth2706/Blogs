// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [icon({ iconsets: ['lucide'] })],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Google Sans',
			cssVariable: '--font-google-sans',
			options: {
				variants: [
					{
						// Variable font: one file covers every weight 400–700 via the wght axis
						weight: '400 700',
						style: 'normal',
						src: ['./src/assets/fonts/GoogleSans-Variable.ttf'],
					},
					{
						weight: '400 700',
						style: 'italic',
						src: ['./src/assets/fonts/GoogleSans-Italic-Variable.ttf'],
					},
				],
			},
		},
	],
	vite: {
		plugins: [tailwindcss()]
	}
});
