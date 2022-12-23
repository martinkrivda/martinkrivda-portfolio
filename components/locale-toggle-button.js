import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const LocaleToggleButton = () => {
  const router = useRouter();
  const changeTo = router.locale === 'en' ? 'cs' : 'en';
  const { t, i18n } = useTranslation();
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block', marginLeft: '5px' }}
        key={i18n.language}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          aria-label={t('change-locale', { changeTo })}
          onClick={() => onToggleLanguageClick(changeTo)}
        >
          {i18n.language === 'cs' ? 'en' : 'cs'}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default LocaleToggleButton;
