'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users, Puzzle, Link } from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Section } from '../components/section';
import { FeatureCard } from '../components/feature-card';
import { WaitlistForm } from '../components/waitlist-form';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 pb-20 text-center">
        <h2 className="text-lg font-semibold text-indigo-400 mb-4">
          Entrix AI presents CallKeep
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Never Miss a Customer Call Again
        </h1>
        <p className="text-lg text-neutral-400 mb-6">
          CallKeep is an AI receptionist built for service businesses.
        </p>

        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-14 leading-relaxed">
          Never miss another customer call.

          CallKeep’s AI receptionist answers incoming customer calls 24/7, captures caller details and service requests, and sends the lead to your team so you can follow up when you're free.

          Built for HVAC companies, plumbers, electricians, locksmiths, and other local service businesses that rely on inbound calls.
        </p>
        <div className="mt-12 text-sm md:text-base text-neutral-400 space-y-3 max-w-xl mx-auto">
          <p>• Missed calls often mean lost jobs</p>
          <p>• Customers usually call the next company if nobody answers</p>
          <p>• Sadie, your AI receptionist, answers every call 24/7</p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="tel:+14694366079"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Try the Live Call Demo
          </a>

          <a
            href="#how-it-works"
            className="px-8 py-4 border border-neutral-700 rounded-full text-white font-semibold hover:bg-neutral-800 transition-colors"
          >
            How It Works
          </a>
        </div>

        <div id="demo" className="mt-10 max-w-md mx-auto rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Call now - takes 30 seconds</p>
          <p className="text-sm text-neutral-400 mb-2">Try the AI Receptionist</p>
          <p className="text-2xl font-semibold text-white mb-2">📞 +1 (469) 436-6079</p>
          <p className="text-xs text-neutral-500 mb-2">No signup required.</p>
          <p className="text-sm text-neutral-400">
            Call Sadie and try asking about AC repair or plumbing service. Currently testing with service businesses in Dallas, TX.
          </p>
        </div>

        <div className="mt-10 text-sm text-neutral-500 flex flex-wrap justify-center gap-4">
          <span>HVAC</span>
          <span>•</span>
          <span>Plumbing</span>
          <span>•</span>
          <span>Electricians</span>
          <span>•</span>
          <span>Locksmiths</span>
          <span>•</span>
          <span>Garage Door Repair</span>
        </div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Service Businesses Use CallKeep</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Built for high‑call service businesses that can’t afford to miss leads while on jobs or after hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: '24/7 Call Answering',
              description:
                'Every customer call gets answered instantly even after hours or while your team is on jobs.',
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: 'Lead Capture',
              description:
                'The AI collects caller name, phone number, and service details so no lead is ever lost.',
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: 'Call Summaries',
              description:
                'Receive instant summaries of every conversation so you know exactly what the customer needs.',
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: 'Appointment Requests',
              description:
                'Customers can request service appointments directly through the AI receptionist.',
            },
            {
              icon: <Puzzle className="w-6 h-6" />,
              title: 'Works With Your Workflow',
              description:
                'Integrates with your phone system and tools without changing how your business operates.',
            },
            {
              icon: <Link className="w-6 h-6" />,
              title: 'Simple Setup',
              description:
                'Get your AI receptionist live in minutes with no complicated installation.',
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

      {/* How It Works */}
      <Section id="how-it-works" className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How the AI Receptionist Works</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A simple process that ensures every customer call turns into an opportunity instead of a missed lead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Customer Calls',
              description:
                'A customer calls your business number for a service request.',
            },
            {
              step: '02',
              title: 'AI Answers Instantly',
              description:
                'The AI receptionist answers, collects the caller details, and understands their request.',
            },
            {
              step: '03',
              title: 'You Get the Lead',
              description:
                'You receive the lead information and can follow up or confirm the job immediately.',
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

      {/* Pricing Section */}
      <Section id="pricing" className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Pricing</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            One missed plumbing or HVAC job can be worth hundreds of dollars. CallKeep helps ensure every customer call gets answered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Starter */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-neutral-400 mb-4">Best for solo contractors</p>
            <p className="text-4xl font-bold mb-6">$49<span className="text-base font-medium text-neutral-400">/mo</span></p>
            <ul className="text-neutral-300 space-y-2 mb-8">
              <li>120 minutes included</li>
              <li>≈ 40–50 calls per month</li>
              <li>$0.25 / minute overage</li>
              <li>24/7 AI receptionist</li>
              <li>Lead capture via SMS & email</li>
            </ul>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border border-indigo-500/40 bg-neutral-900/60 p-8 text-center relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-indigo-500 px-3 py-1 rounded-full">Most Popular</span>
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-neutral-400 mb-4">For busy service teams</p>
            <p className="text-4xl font-bold mb-6">$99<span className="text-base font-medium text-neutral-400">/mo</span></p>
            <ul className="text-neutral-300 space-y-2 mb-8">
              <li>400 minutes included</li>
              <li>≈ 150–200 calls per month</li>
              <li>$0.20 / minute overage</li>
              <li>Call summaries</li>
              <li>Appointment request capture</li>
            </ul>
          </div>

          {/* Professional */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-neutral-400 mb-4">High call volume businesses</p>
            <p className="text-4xl font-bold mb-6">$199<span className="text-base font-medium text-neutral-400">/mo</span></p>
            <ul className="text-neutral-300 space-y-2 mb-8">
              <li>1000 minutes included</li>
              <li>≈ 400+ calls per month</li>
              <li>$0.18 / minute overage</li>
              <li>Priority lead notifications</li>
              <li>Advanced call insights</li>
            </ul>
          </div>

        </div>

        {/* Pricing CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:+14694366079"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Try the Live AI Receptionist
          </a>
          <p className="text-sm text-neutral-400 mt-3">
            Call the demo number and talk to Sadie. No signup required.
          </p>
        </div>

        <p className="text-center text-sm text-neutral-500 mt-10">
          Free onboarding for early customers. We configure CallKeep to match your business.
        </p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Capturing Every Customer Call 24/7</h2>
          <p className="text-lg text-neutral-300 mb-10">
            Join the early access list to try CallKeep and start capturing every customer call automatically.
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

      {/* Support + Legal */}
      <Section className="py-12 text-center border-t border-white/10">
        <p className="text-neutral-300 text-sm mb-2">
          Questions about CallKeep?
        </p>
        <p className="text-neutral-400 text-sm mb-6">
          Email our support team: <a href="mailto:hello@entrixai.com" className="underline hover:text-white">hello@entrixai.com</a>
        </p>

        <div className="flex justify-center gap-6 text-sm text-neutral-500">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        <p className="text-neutral-500 text-xs mt-6">
          © 2026 Entrix AI Innovations Private Limited
        </p>
      </Section>

      <Footer />
    </main>
  );
}
