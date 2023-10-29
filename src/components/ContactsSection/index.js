import styles from "./ContactsSection.module.css";
import contactInstaImg from "../../assets/contacts/insta.svg";
import contactWhatsappImg from "../../assets/contacts/whatsapp.svg";
import LocationMap from "../LocationMap";

const ContactsSection = () => {
  return (
    <div className="wrapper">
      <div className={styles.contacts}>
        <div className={styles.contacts_info}>
          <h3>Contact</h3>
          <span>+49 999 999 99 99</span>
          <div className={styles.contacts_icon}>
            <div className={styles.insta_icon}>
              <img src={contactInstaImg} />
              <span>instagram</span>
            </div>
            <div className={styles.whatsapp_icon}>
              <img src={contactWhatsappImg} />
              <span>Whatsapp</span>
            </div>
          </div>
        </div>
        <div className={styles.address_info}>
          <h3>Address</h3>
          <span>
            Linkstraße 2, 8 OG, 10785,
            <br /> Berlin, Deutschland
          </span>
          <div>
            <span>
              Work hours: <br /> <b>24 hours a day</b>
            </span>
          </div>
        </div>
      </div>
      <LocationMap/>
    </div>
  );
};

export default ContactsSection;
