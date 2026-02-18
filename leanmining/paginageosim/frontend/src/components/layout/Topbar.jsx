import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const Topbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language?.startsWith('en') ? 'en' : 'es';

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <div className="bg-[#123B70] hidden sm:block">
      <Container>
        <div className="flex items-center justify-end h-14">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => changeLanguage('es')}
              className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                currentLanguage === 'es'
                  ? 'text-white bg-white/25 ring-1 ring-white/30'
                  : 'text-white/60 hover:text-white hover:bg-white/15'
              }`}
              aria-label={t('language.spanish')}
            >
              ES
            </button>
            <span className="text-white/20 text-sm select-none font-light">|</span>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                currentLanguage === 'en'
                  ? 'text-white bg-white/25 ring-1 ring-white/30'
                  : 'text-white/60 hover:text-white hover:bg-white/15'
              }`}
              aria-label={t('language.english')}
            >
              EN
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
