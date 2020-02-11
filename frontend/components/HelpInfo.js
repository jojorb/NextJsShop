import Link from 'next/link';
import { contactPhone, contactMail, fbMsg } from '../config';

const HelpInfo = () => (
  <p>
    Vous avez une question ? {contactPhone} du lundi au vendredi de 10h à 20h et
    de 11h à 19h le samedi / E-mail: {contactMail}{' '}
    <Link href={fbMsg}>
      <a target="_blank">
        <i className="fab fa-facebook-messenger" />
      </a>
    </Link>
  </p>
);
export default HelpInfo;
