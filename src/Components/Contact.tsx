import { RiMailLine, RiTwitterXLine } from "@remixicon/react";

const Contact = () => {
  return (
    <main className="px-6 md:px-12 pt-16 md:pt-12 space-y-10 font-poppins flex flex-col items-center w-full">
      <section className="flex 2xl:w-3/4 w-full flex-col gap-6" id="contact">
        <header className="space-y-3 reveal">
          <h1 className="text-4xl md:text-5xl">Contact</h1>
          <p className="opacity-70 max-w-2xl">
            I am interested in freelance opportunities, internships, and
            full-time roles. If you have a project or question, feel free to
            reach out.
          </p>
        </header>
        <div className="grid lg:grid-cols-3 gap-6">
          <article
            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 card-float reveal"
            style={{ transitionDelay: "0ms" }}
          >
            <p className="text-sm uppercase tracking-[0.25em] opacity-70">
              Email
            </p>
            <a
              href="mailto:vtslforge@gmail.com?subject=Hello&body=Hi%20Vatsalya,"
              className="text-lg text-[#00F5FF] hover:opacity-80 transition"
            >
              vtslforge@gmail.com
            </a>
            <p className="opacity-70 text-sm">Replies within 24-48 hours.</p>
          </article>
          <article
            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 card-float reveal"
            style={{ transitionDelay: "80ms" }}
          >
            <p className="text-sm uppercase tracking-[0.25em] opacity-70">
              Location
            </p>
            <p className="text-lg">Bengaluru, India</p>
            <p className="opacity-70 text-sm">Open to remote work.</p>
          </article>
          <article
            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 card-float reveal"
            style={{ transitionDelay: "160ms" }}
          >
            <p className="text-sm uppercase tracking-[0.25em] opacity-70">
              Social
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://x.com/ZoltXero"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit X profile"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition"
              >
                <RiTwitterXLine />
                X / Twitter
              </a>
            </div>
          </article>
        </div>
        <article className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#0b072a] to-[#020015] p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 card-float reveal cinematic-sheen">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] opacity-70">
              Ready to build?
            </p>
            <h2 className="text-2xl md:text-3xl mt-2">
              Lets talk about your next project.
            </h2>
          </div>
          <a
            href="mailto:vtslforge@gmail.com?subject=Project%20Inquiry&body=Hi%20Vatsalya,%20I%20want%20to%20discuss%20a%20project."
            className="flex items-center gap-2 rounded-2xl border border-[#00F5FF]/50 px-5 py-3 text-sm uppercase tracking-[0.2em] hover:border-[#00F5FF] transition"
          >
            Start a project
            <RiMailLine />
          </a>
        </article>
      </section>
    </main>
  );
};

export default Contact;
