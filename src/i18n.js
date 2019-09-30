import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
	en: {
		theme: {
			dark: 'Dark'
		},
		home: {
			guest: {
				welcome: 'Чтобы пользоваться приложением, войдите с аккаунтом Desire Access',
				description: 'Explore the brand new way to create amazing screenplays',
				claim: 'Claim Access'
			}
		},
		projects: {
			create: 'Create project',
			import: 'Import project'
		}
	},
	ru: {
		theme: {
			dark: 'Тёмная'
		},
		home: {
			guest: {
				welcome: 'Чтобы пользоваться приложением, войдите с аккаунтом Desire Access',
				description: 'Исследуйте новый способ писать потрясающие сценарии',
				claim: 'Получить доступ'
			}
		},
		projects: {
			create: 'Новый проект',
			import: 'Импортировать проект'
		}
	}
}

export default new VueI18n({
	locale: 'en',
	messages
})