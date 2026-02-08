import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <main className="min-h-screen px-6 md:px-12 pt-24 pb-16 font-poppins text-white">
      <section className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] opacity-70">
          404 · Not Found
        </p>
        <h1 className="text-4xl md:text-5xl mt-4">That page does not exist.</h1>
        <p className="mt-4 opacity-70">
          {error?.statusText || error?.message || "Try a different route."}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/"
            className="rounded-2xl border border-[#00F5FF]/50 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#00F5FF] hover:border-[#00F5FF] transition"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
