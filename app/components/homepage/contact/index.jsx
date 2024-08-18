// @flow strict
import Social from "./contact-social";
import ContactWithoutCaptcha from "./contact-without-captcha";
import Info from "./contact-info";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-0 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
    </div>
  );
}

export default ContactSection;
