import ar from '~/locales/ar'
import en from '~/locales/en'

export type LocaleKey = 'ar' | 'en'
export type Translations = typeof ar

export const useLocale = () => {
  const route = useRoute()

  const locale = computed<LocaleKey>(() =>
    route.path.startsWith('/en') ? 'en' : 'ar',
  )

  const t = computed<Translations>(() => (locale.value === 'en' ? en : ar))

  return { locale, t }
}
