import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import { Button } from '@/components/Button';
import { ContactForm } from './ContactForm';
import styles from './styles.module.css';

export function Section5() {
  return (
    <section className={styles.Section5} id="develop">
      <Container>
        <div className={styles.content}>

          <div className={styles.info}> 
            <TagTitle style={{ width: 162, marginBottom: 22 }}>Contact Us</TagTitle>
            <h2 className={styles.title}>Get Started Today</h2>
            <p className={styles.text}>Ready to elevate your advertising game? Join the hundreds of businesses already driving
            success with <strong>VRUME’s targeted advertising solutions.</strong> Whether you’re focused on
            <strong>email ads, Instagram ads,</strong> or <strong>affiliate marketing,</strong> we’ve got the
            expertise and resources to help you succeed.</p>
            <Button style={{ letterSpacing: -0.8 }}>APPLY TO BECOME AN ADVERTISER!</Button>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}