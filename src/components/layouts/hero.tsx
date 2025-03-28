const Hero = () => {
  return (
    <section className="border-t py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Use DevUtils?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Our tools are designed for developers who value speed and privacy. Everything runs
            locally in your browser, with zero data transmission to external servers.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Browser-based</h3>
              <p className="text-muted-foreground">
                All processing happens locally in your browser, ensuring your data never leaves your
                device.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fast & Efficient</h3>
              <p className="text-muted-foreground">
                Built with performance in mind, our tools deliver instant results without any
                loading delays.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m14.5 9-5 5.5L8 13" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Open Source</h3>
              <p className="text-muted-foreground">
                Fully transparent codebase that welcomes contributions from the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
