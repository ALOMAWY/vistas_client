import Header from "./Header";
import Discover from "./Discover";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header isDark={true} />
      <section className="map pb-5 min-vh-100">
        <div className="google-map container-75">
          <h1 className="big-title mb-5">{t("contact.findUs")}</h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4318.784709021672!2d29.512193738684303!3d40.05662780655811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2str!4v1740265702622!5m2!1sar!2str"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1740265225273!6m8!1m7!1sI5CNG3ZcR3GCPauXXxIlVA!2m2!1d40.05697798559216!2d29.5100766189763!3f322.72480888434336!4f-11.505736550614387!5f0.7820865974627469"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="contact-form py-5">
        <div className="container-75">
          <div>
            <p className="fs-6 fw-normal opacity-50 show-text-x-50">
              {t("contact.formTitle")}
            </p>
            <h1 className="big-title show-text-y-50">
              {t("contact.emailTitle")}
            </h1>
          </div>

          <form className="d-flex flex-column gap-4" action="">
            <fieldset className="border-bottom border-gray w-50 show-text-x-50">
              <legend>
                <label className="opacity-75 fs-5" htmlFor="full-name">
                  {t("contact.fullName")}
                </label>
              </legend>
              <input className="border-0 w-100" type="text" id="full-name" />
            </fieldset>

            <fieldset className="border-bottom border-gray w-50 show-text-y-50">
              <legend>
                <label className="opacity-75 fs-5" htmlFor="email">
                  {t("contact.email")}
                </label>
              </legend>
              <input className="border-0 w-100" type="email" id="email" />
            </fieldset>

            <fieldset className="border-bottom border-gray w-50 show-text-x-50">
              <legend>
                <label className="opacity-75 fs-5" htmlFor="phone">
                  {t("contact.phone")}
                </label>
              </legend>
              <input
                className="border-gray border w-100"
                type="text"
                id="phone"
              />
            </fieldset>

            <fieldset className="border-bottom border-gray w-50 show-text-y-50">
              <legend>
                <label className="opacity-75 fs-5" htmlFor="object">
                  {t("contact.subject")}
                </label>
              </legend>
              <input className="border-0 w-100" type="text" id="object" />
            </fieldset>

            <fieldset className="border-bottom border-gray w-100 show-text-x-50">
              <legend>
                <label className="opacity-75 fs-5" htmlFor="text-area">
                  {t("contact.message")}
                </label>
              </legend>
              <textarea
                className="border-0 w-100"
                style={{ overflow: "hidden", resize: "none" }}
                id="text-area"
              ></textarea>
            </fieldset>

            <button
              className="p-4 fs-6 ls-2 fw-medium text-uppercase text-black border-0 ms-auto show-text-x-30"
              id="send-message"
              type="submit"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </section>

      <Discover />
      <Footer />
    </>
  );
};

export default Contact;
