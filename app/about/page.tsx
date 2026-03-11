import { Metadata } from 'next';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Section } from '../../components/section';
import { WaitlistForm } from '../../components/waitlist-form';

export const metadata: Metadata = {
  title: 'About - Entrix AI',
  description: 'Learn about Entrix AI and CallKeep, the AI receptionist helping service businesses capture every call.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          About Entrix AI
        </h1>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Entrix AI builds practical AI tools for real-world businesses. Our first product, CallKeep, is an AI receptionist designed to help service companies capture every customer call and never miss potential jobs.
        </p>
      </Section>

      {/* Mission Section */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          Our Mission
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Our mission is to help service businesses grow by ensuring they never miss an inbound call. CallKeep answers calls 24/7, captures lead details, and delivers qualified customer requests so businesses can focus on doing the actual work.
        </p>
      </Section>

      {/* Vision Section */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          Our Vision
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          We envision a future where small service businesses have access to the same intelligent infrastructure as large companies. AI should handle repetitive tasks like answering calls and collecting information so business owners can focus on their craft.
        </p>
      </Section>

      {/* Story Section */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          Our Story
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          CallKeep was created after noticing a simple but costly problem across service industries: missed calls mean lost jobs. Contractors are often on-site, driving, or working with their hands when customers call. CallKeep acts as a reliable AI receptionist that answers every call, captures the customer’s request, and sends the lead to the business.
        </p>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          Try CallKeep
        </h2>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Experience how CallKeep can answer calls, capture leads, and help service businesses grow without missing opportunities.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
