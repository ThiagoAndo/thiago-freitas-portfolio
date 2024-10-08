// @flow strict
import Social from "./contact-social";
import ContactWithoutCaptcha from "./contact-without-captcha";
import Info from "./contact-info";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";

function ContactSection() {
  return (
    <PageSection id={"contact"}>
      <Title side={true}>CONTACT</Title>
      <div className="grid md:pt-24 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactWithoutCaptcha />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <Info />
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Social />
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default ContactSection;
