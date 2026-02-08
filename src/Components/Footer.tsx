const Footer = () => {
  return (
    <footer className="px-6 md:px-12 pt-12 pb-14 font-poppins flex flex-col items-center w-full">
      <article className="flex 2xl:w-3/4 w-full flex-col gap-6 border-t border-white/10 pt-8">
        <section className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <p className="opacity-75 text-sm md:text-base">
            © 2026 Made by Vatsalya Singh
          </p>
          <div className="flex items-center gap-4 text-sm uppercase tracking-[0.2em] opacity-70">
            <span>Performance</span>
            <span>Scalability</span>
            <span>SEO</span>
          </div>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
