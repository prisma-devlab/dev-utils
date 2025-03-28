import { siteConfig } from '@/configs/site-configs';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Introduction</h2>
            <p className="mb-4">
              At {siteConfig.name}, we respect your privacy and are committed to protecting your
              personal data. This privacy policy explains how we handle any information when you use
              our developer utility tools.
            </p>
            <p className="mb-4">
              Our utilities are designed to process data locally in your browser. We do not collect,
              store, or transmit any of your data to our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">What Data We Process</h2>
            <p className="mb-4">
              All data processing occurs entirely within your browser. Any input you provide (such
              as code, text, or JSON) is processed locally and never sent to our servers.
            </p>
            <p className="mb-4">
              We use essential cookies only for theme preferences and site functionality. These
              cookies do not contain any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Analytics</h2>
            <p className="mb-4">
              We use anonymized analytics to understand how users interact with our site. This helps
              us improve our tools. The analytics data does not include any personally identifiable
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Third-Party Services</h2>
            <p className="mb-4">
              Our site may contain links to third-party websites or services. We are not responsible
              for the privacy practices of these external sites. We encourage you to read the
              privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Changes to This Policy</h2>
            <p className="mb-4">
              We may update our privacy policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us through our{' '}
              <Link href={siteConfig.links.github} className="text-primary hover:underline">
                GitHub repository
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
