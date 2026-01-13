import React from "react";
import { RiTwitterXLine, RiMailLine } from "@remixicon/react";

const Contact = () => {
  return (
    <main className="pl-3 pr-3 pt-8 md:pt-0 space-y-6 font-poppins md:p-15 flex flex-col items-center w-full">
      <article className=" justify-start flex 2xl:w-3/4 w-full flex-col gap-3">
        <h1 className="text-4xl"  >Contacts</h1>
        <section className="flex flex-col gap-3 items-start md:flex-row">
          <p className="opacity-70">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me.
          </p>
          <div id="contact" className="w-full flex gap-9  justify-center mt-6">
            <a
              href="https://x.com/vtslforge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit X profile"
              className="cursor-pointer"
            >
              <RiTwitterXLine className="opacity-70 hover:opacity-100" />
            </a>

            <a
              href="mailto:vtslforge@gmail.com?subject=Hello&body=Hi%20Vatsalya,"
              aria-label="Send email"
              className="cursor-pointer"
            >
              <RiMailLine className="opacity-70 hover:opacity-100" />
            </a>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Contact;
