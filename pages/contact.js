import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  Container,
  Heading,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  Spinner,
  Box,
  Text,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FaEnvelope } from 'react-icons/fa';
import Section from '../components/section';
import Layout from '../components/layouts/article';

const Contact = () => {
  const { t } = useTranslation('common');
  // States for contact form fields
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [formStatus, setFormStatus] = useState('send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setFormStatus('sending');
      const res = await fetch('/api/contact', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setFormStatus('send');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setFormStatus('send');
      setFullname('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t('contact.hireMe')}
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1]} gap={6}>
            <form action="/api/contact" method="post" onSubmit={handleSubmit}>
              <GridItem>
                <FormControl isRequired isInvalid={errors?.fullname}>
                  <FormLabel>{t('contact.fullname')}</FormLabel>
                  <Input
                    id="fullname"
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                  />
                  <FormErrorMessage>Name cannot be empty.</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired isInvalid={errors?.email}>
                  <FormLabel>{t('contact.email')}</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <FormHelperText>
                    {t('contact.neverShareYourEmail')}.
                  </FormHelperText>
                  <FormErrorMessage>E-mail cannot be empty.</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired isInvalid={errors?.subject}>
                  <FormLabel>{t('contact.subject')}</FormLabel>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    value={subject}
                    required
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  <FormErrorMessage>Subject cannot be empty.</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired isInvalid={errors?.message}>
                  <FormLabel>{t('contact.message')}</FormLabel>
                  <Textarea
                    id="message"
                    placeholder={t('contact.writeMessage')}
                    name="message"
                    value={message}
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <FormErrorMessage>
                    Message body cannot be empty.
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <Button
                  type="submit"
                  leftIcon={
                    formStatus === 'send' ? <FaEnvelope /> : <Spinner />
                  }
                  colorScheme="teal"
                  variant="solid"
                  mt={2}
                >
                  {formStatus === 'send'
                    ? t('contact.send')
                    : t('contact.sending')}
                </Button>
                <Box mt="2" textAlign="left" fontWeight="semibold">
                  {showSuccessMessage && (
                    <Text color="green.500">{t('contact.successMessage')}</Text>
                  )}
                  {showFailureMessage && (
                    <Text color="red.500">{t('contact.failureMessage')}</Text>
                  )}
                </Box>
              </GridItem>
            </form>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Contact;
