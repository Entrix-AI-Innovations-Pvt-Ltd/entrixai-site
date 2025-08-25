import { Metadata } from 'next';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Section } from '../../components/section';

export const metadata: Metadata = {
  title: 'Privacy Policy - Entrix AI',
  description: 'Privacy policy for Entrix AI and Budha.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      <Navbar />

      <Section className="pt-32 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          At Entrix AI, privacy isn’t just a checkbox — it’s a core design choice. Budha was built local-first because as a founder with ADHD, I know how much trust matters when you share your creative flow. This page explains how we handle your data — clearly and respectfully.
        </p>
      </Section>

      <Section className="py-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          What Data We Collect
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed mb-8">
          Budha is designed to work locally on your device. We do not collect or store your creative content, emotional states, or productivity patterns on our servers. Any data you enter stays with you, unless you explicitly choose to sync or share.
        </p>
      </Section>

      <Section className="py-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          How We Use Your Data
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed mb-8">
          Your data is used only to personalize your experience and help Budha adapt to your workflow. We never sell, rent, or use your information for advertising. If you join our waitlist, your email is used solely for updates about Budha.
        </p>
      </Section>

      <Section className="py-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          Security & Encryption
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed mb-8">
          All local data is encrypted and never leaves your device without your permission. If you choose to sync, we use end-to-end encryption to protect your information.
        </p>
      </Section>

      <Section className="py-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          Your Choices & Rights
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed mb-8">
          You control your data. You can export, delete, or manage your information at any time. If you have questions or requests, reach out to us — we’re here to help.
        </p>
      </Section>

      <Footer />
    </main>
  );
}
