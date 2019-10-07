<template>
	<header>
		<nav>
			<div class="menubar__content">
				<template v-if="isLogged">
					<button>File</button>
				</template>
				<button>Help</button>
			</div>
			<div class="menubar__content--right">
				<button @click="toggleTheme()">{{ $t(`theme.${this.theme}`) }}</button>
				<button @click="toggleLocale()">
					<template v-if="$i18n.locale === 'ru'">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
							<path fill="#fff" d="M0 0h9v3H0z"/>
							<path fill="#d52b1e" d="M0 3h9v3H0z"/>
							<path fill="#0039a6" d="M0 2h9v2H0z"/>
						</svg>
						<span>Русский</span>
					</template>
					<template v-else>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
							<clipPath id="s">
								<path d="M0,0 v30 h60 v-30 z"/>
							</clipPath>
							<clipPath id="t">
								<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
							</clipPath>
							<g clip-path="url(#s)">
								<path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
								<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
								<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
								<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
								<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
							</g>
						</svg>
						<span>English</span>
					</template>
				</button>
				<template v-if="isLogged">
					<button>Username</button>
				</template>
			</div>
		</nav>
	</header>
</template>

<style>
	#app {
		padding-top: 1.5rem;
	}
</style>

<style scoped lang="scss">
	header {
		position: fixed;
		display: flex;
		left: 0;
		top: 0;
		height: 1.5rem;
		width: 100%;
		background: #ddd;
		z-index: 9;
		box-shadow: 0 -1rem 3rem #333;
	}

	[class*=menubar__content] {
		display: inline-block;
		width: 50%;
		white-space: nowrap;
		overflow: auto hidden;
		height: 100%;
	}

	.menubar__content--right {
		text-align: right;
	}

	nav {
		max-width: 80rem;
		width: 100%;
		margin: 0 auto;
		height: 100%;
	}

	button {
		border-radius: 0;
		color: #111;
		height: 100%;
		font-size: .85rem;
		padding: 0 1rem;
		// text-align: center;
		margin: 0;
		border: none;
		position: relative;
		background: transparent;
		transition: background ease .2s;
	}

	button + button::before {
		content: '';
		width: 1px;
		position: absolute;
		top: .25rem;
		bottom: .25rem;
		left: -.5px;
		display: inline-block;
		background: #aaa;
	}

	button:hover, button:focus {
		outline: none;
		background: #eee;
	}

	svg {
		height: .65rem;
		width: 1.3rem;
		margin-right: .25rem;
	}
</style>

<script>
	export default {
		data() {
			return {
				isLogged: false,
				theme: 'light'
			}
		},
		created() {
			if (localStorage.getItem('sc.theme') === 'dark') {
				this.theme = 'dark';
				document.body.classList.add('theme-dark');
			}

			if (localStorage.getItem('sc.language') === 'ru') {
				this.$i18n.locale = 'ru';
			}
		},
		methods: {
			toggleTheme() {
				document.body.classList.toggle('theme-dark');
				this.theme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
				localStorage.setItem('sc.theme', this.theme);
			},
			toggleLocale() {
				this.$i18n.locale = (this.$i18n.locale === 'ru' ? 'en' : 'ru');
				localStorage.setItem('sc.language', this.$i18n.locale);
			}
			// mapGetters( isLogged )
		}
	}
</script>