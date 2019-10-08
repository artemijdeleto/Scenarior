import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
	en: {
		menubar: {
			file: 'File',
			help: 'Help'
		},
		theme: {
			dark: 'Dark',
			light: 'Light'
		},
		home: {
			guest: {
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
		menubar: {
			file: 'Файл',
			help: 'Помощь'
		},
		theme: {
			dark: 'Тёмная',
			light: 'Светлая'
		},
		home: {
			guest: {
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
	fallbackLocale: 'en',
	messages
})