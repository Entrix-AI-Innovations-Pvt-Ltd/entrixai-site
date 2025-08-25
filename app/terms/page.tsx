import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Section } from '../../components/section';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      <Navbar />

      {/* Hero */}
      <Section className="pt-28 pb-10">
        <p className="text-center text-[11px] md:text-xs tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 mb-3">
          Legal
        </p>
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">Terms of Use</h1>
        <p className="text-neutral-300 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
          Welcome to Entrix AI. These terms are here to protect both you and us, while keeping
          things clear and respectful. By using our website or products (including{' '}
          <span className="font-semibold text-white">Budha</span>), you agree to these Terms of Use.
        </p>
      </Section>

      <Section className="py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-neutral-300 leading-relaxed">
              By accessing or using our site or services, you agree to be bound by these Terms. If
              you do not agree, please do not use Entrix AI or Budha.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
            <p className="text-neutral-300 leading-relaxed">
              You must be at least 13 years old (or the minimum age required in your jurisdiction)
              to use our services. If you use Entrix AI on behalf of an organization, you represent
              that you have authority to bind that organization.
            </p>
          </section>

          {/* Use of Service */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Use of the Services</h2>
            <ul className="list-disc pl-6 text-neutral-300 leading-relaxed space-y-2">
              <li>Do not misuse, reverse engineer, or interfere with our services.</li>
              <li>
                You are responsible for the content you submit and for complying with applicable
                laws.
              </li>
              <li>
                You may not use the services to build competing models or products without our
                written consent.
              </li>
            </ul>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Privacy</h2>
            <p className="text-neutral-300 leading-relaxed">
              We care deeply about privacy and build local‑first where possible. Our
              <a
                href="/privacy"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {' '}
                Privacy Policy
              </a>{' '}
              explains what we collect and why.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property</h2>
            <p className="text-neutral-300 leading-relaxed">
              Entrix AI owns all rights to the site, software, models, logos, and content unless
              otherwise stated. You retain rights to your own content.
            </p>
          </section>

          {/* No Advice */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. No Medical, Legal, or Mental‑Health Advice
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Budha is a productivity and creativity tool. It is not a substitute for professional
              advice. Always seek a qualified professional when needed.
            </p>
          </section>

          {/* Warranties & Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Disclaimers; Limitation of Liability</h2>
            <p className="text-neutral-300 leading-relaxed">
              The services are provided “as is” without warranties of any kind. To the extent
              permitted by law, Entrix AI is not liable for any indirect or consequential damages
              arising from your use of the services.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
            <p className="text-neutral-300 leading-relaxed">
              We may suspend or end access to the services if you violate these Terms. You may stop
              using the services at any time.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Changes to These Terms</h2>
            <p className="text-neutral-300 leading-relaxed">
              We may update these Terms from time to time. When we do, we will post the revised
              version and update the “Last updated” date below.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
            <p className="text-neutral-300 leading-relaxed">
              Questions? Contact us at{' '}
              <a
                href="mailto:hello@entrixai.com"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                hello@entrixai.com
              </a>
              .
            </p>
            <p className="text-neutral-400 text-sm mt-4">
              Last updated: {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
