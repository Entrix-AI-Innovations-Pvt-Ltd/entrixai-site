import { Metadata } from 'next';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Section } from '../../components/section';
import { WaitlistForm } from '../../components/waitlist-form';

export const metadata: Metadata = {
  title: 'About - Entrix AI',
  description: 'Learn about Entrix AI, our mission, vision, and story behind Budha.',
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
          Entrix AI creates emotionally intelligent technology for creators. We believe AI should empower, adapt, and support your unique flow.
        </p>
      </Section>

      {/* Mission Section */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          Our Mission
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          To build AI tools that understand human emotion and creativity, helping you maintain focus, achieve flow, and do your best work—while respecting privacy and autonomy.
        </p>
      </Section>

      {/* Vision Section */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          Our Vision
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          We imagine a world where technology adapts to your emotional state, supports your creative process, and helps you thrive—never getting in the way of your flow.
        </p>
      </Section>

      {/* Story Section */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          Our Story
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Our founder lives with ADHD and deeply understands the struggle for focus and flow. Budha was born from this experience—designed to help creators like you find balance, stay productive, and feel supported by technology that truly understands.
        </p>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
          Join Our Waitlist
        </h2>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Be first to experience Budha and help shape the future of emotionally intelligent AI for creators.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
