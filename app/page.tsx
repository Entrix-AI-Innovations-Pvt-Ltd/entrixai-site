'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users, Puzzle, Link } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Section } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { WaitlistForm } from '@/components/waitlist-form';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
            <div className="absolute top-40 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 text-sm uppercase tracking-wider text-neutral-400"
            >
              Introducing Budha by Entrix AI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
            >
              Your emotionally intelligent AI co-pilot for creative flow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Budha remembers what works for you, adapts to your emotional state, and guides you
              back to your most productive self. Local-first, privacy-focused, and designed for
              creators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#waitlist"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity text-lg"
              >
                Join Waitlist
              </a>
              <a
                href="#features"
                className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Explore Features
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <blockquote className="text-lg italic text-neutral-300 max-w-2xl mx-auto">
            "Finally, an AI that understands my creative process and helps me stay in flow instead
            of breaking it."
          </blockquote>
          <p className="mt-4 text-sm text-neutral-400">— Early Beta User</p>
        </motion.div>
      </Section>

      {/* Product Highlights */}
      <Section id="features" className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Budha is Different</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Built for creators who need an AI that adapts to their unique workflow and emotional
            patterns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Local-First Speed',
              description:
                'Sub-second responses with on-device processing. No internet required for core functionality.',
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: 'Emotional Memory',
              description:
                'Remembers your mood-task patterns and suggests the right approach at the right time.',
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: 'Privacy by Design',
              description:
                'Your data stays with you. End-to-end encryption with transparent controls.',
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: 'Creator-Grade UX',
              description:
                'Minimal CLI and voice interface designed for flow states, not distractions.',
            },
            {
              icon: <Puzzle className="w-6 h-6" />,
              title: 'Extendable Modules',
              description:
                'Add specialized nodes for writing, coding, journaling, or ADHD-friendly routines.',
            },
            {
              icon: <Link className="w-6 h-6" />,
              title: 'Open Integrations',
              description:
                'Works with VS Code, calendars, and your existing tools. Budha adapts to you.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Visual Demo */}
      <Section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4">See Budha in Action</h3>
              <p className="text-neutral-300 mb-6">
                Experience the seamless integration of emotional intelligence and productivity.
                Budha learns your patterns and helps you maintain creative momentum.
              </p>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  Voice and CLI commands with sub-second response
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full" />
                  Contextual suggestions based on your emotional state
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  Seamless integration with your existing workflow
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 border border-white/10">
              <div className="aspect-video w-full rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400">
                <span className="text-sm">Demo Video Coming Soon</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How Budha Works</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Three simple steps to transform your creative workflow with emotional intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Learn Your Patterns',
              description:
                'Budha observes your work habits, emotional states, and productivity patterns without being intrusive.',
            },
            {
              step: '02',
              title: 'Adapt & Suggest',
              description:
                'Based on your current state and past successes, Budha suggests the optimal approach for your tasks.',
            },
            {
              step: '03',
              title: 'Guide Your Flow',
              description:
                'Receive contextual guidance that helps you maintain focus and return to productive states faster.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex items-center justify-center text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Waitlist Section */}
      <Section id="waitlist" className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be First to Experience Budha</h2>
          <p className="text-lg text-neutral-300 mb-10">
            Join our exclusive waitlist for early access. We're inviting creators in small waves to
            ensure the best experience.
          </p>

          <WaitlistForm />
        </motion.div>
      </Section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-md border-t border-white/10 md:hidden z-40">
        <a
          href="#waitlist"
          className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full text-white font-semibold"
        >
          Join Waitlist
        </a>
      </div>

      {/* Add bottom padding for mobile sticky CTA */}
      <div className="h-20 md:hidden" />

      <Footer />
    </main>
  );
}
