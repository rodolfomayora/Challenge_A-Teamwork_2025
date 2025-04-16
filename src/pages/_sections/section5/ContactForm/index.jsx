import { Button } from '@/components/Button';
import styles from './styles.module.css';

import { Input } from './Input';
import { Textarea } from './Textarea';

export function ContactForm() {
  return (
    <form className={styles.ContactForm}>
      <div className={styles.inputs}>
        <div className={styles.textInputs}>
          <Input
            label="First Name"
            placeholder="Enter Your First Name"
          />
          <Input
            label="Last Name"
            placeholder="Enter Your Last Name"
          />
        </div>
        <Input
          type="email"
          label="Email"
          placeholder="Email Address"
        />
        <Textarea
          label="Your Message (optional)"
          placeholder="Write Your Message"
        />
      </div>
      <Button type="Button" className={styles.CustomButton}>Submit</Button>
    </form>
  );
}