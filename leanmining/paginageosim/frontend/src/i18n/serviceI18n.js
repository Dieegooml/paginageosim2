export const SERVICE_I18N_KEY_BY_ID = {
  'mine-design': 'mineDesign',
  'cost-analysis': 'costAnalysis',
  'kpi-implementation': 'kpiImplementation',
  'mine-planning': 'minePlanning',
};

export const getServiceTranslationKey = (serviceId) => SERVICE_I18N_KEY_BY_ID[serviceId];

export const localizeService = (t, service, language) => {
  const isEnglish = language?.startsWith('en');
  if (!isEnglish) return service;

  const translationKey = getServiceTranslationKey(service.id);
  if (!translationKey) return service;

  const i18nBase = `servicesPage.services.${translationKey}`;

  return {
    ...service,
    title: t(`${i18nBase}.title`, { defaultValue: service.title }),
    shortDescription: t(`${i18nBase}.shortDescription`, {
      defaultValue: service.shortDescription,
    }),
    description: t(`${i18nBase}.description`, { defaultValue: service.description }),
    features: service.features.map((feature, index) =>
      t(`${i18nBase}.feature${index + 1}`, { defaultValue: feature })
    ),
  };
};
