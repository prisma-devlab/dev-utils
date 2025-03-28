import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import Hero from '@/components/layouts/hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-1 flex-col">
        {/* Two-section layout with both sections visible in viewport */}
        <div className="flex min-h-[calc(100vh-64px)] flex-col">
          {/* First Section - Taking up the remaining space with content centered */}
          <div className="flex flex-1 items-center justify-center py-8">
            <section className="relative w-full overflow-hidden">
              <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.03]"></div>
              <div className="container relative mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                  <span className="animate-fade-in mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    Built for Developers, By Developers
                  </span>
                  <h1 className="animate-fade-in-up mb-6 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    Essential <span className="text-primary">Dev Tools</span> for Modern Development
                  </h1>
                  <p className="animate-fade-in-up animation-delay-200 mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Streamline your workflow with our collection of developer utilities. Format
                    JSON, transform text, and more—all in your browser, with no server processing.
                  </p>
                  <div className="animate-fade-in-up animation-delay-300 flex flex-wrap justify-center gap-6">
                    <Link
                      href="/tools/json/formatter"
                      className="group inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-md"
                    >
                      <span>Start Using Tools</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                    <Link
                      href="#features"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Explore Features
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Second Section - Fixed height to ensure it's completely visible */}
          <section className="bg-secondary/30 py-6 md:py-8">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-6 text-center md:gap-16">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-primary/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">Zero server latency</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-primary/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">100% Private</h3>
                    <p className="text-sm text-muted-foreground">Your data stays local</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-primary/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v19" />
                      <path d="M5 10h14" />
                      <path d="M5 21h14" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Developer-First</h3>
                    <p className="text-sm text-muted-foreground">Built for real needs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Additional Features Section (below initial viewport) */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
