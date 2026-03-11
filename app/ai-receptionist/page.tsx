import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Receptionist for Service Businesses | Never Miss a Call',
  description: 'AI-powered receptionist that answers calls 24/7, captures leads, and books appointments automatically for HVAC, plumbing, locksmith, and service businesses.',
};

export default function AIReceptionistPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Receptionist for Service Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Never miss another customer call. Our AI answers calls, captures leads, and books jobs automatically.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#demo"
                className="rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Try the AI Receptionist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="border-b border-gray-800 bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Try It Live
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Experience our AI receptionist in action
            </p>
            <div className="mt-12 rounded-2xl border border-gray-700 bg-gray-800/50 p-8 sm:p-12">
              <div className="flex flex-col items-center space-y-6">
                <div className="rounded-xl bg-gray-900 px-8 py-6 border border-gray-700">
                  <a
                    href="tel:+14694366079"
                    className="text-3xl font-mono font-semibold tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +1 (469) 436-6079
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-base text-gray-300 font-medium">
                    Call this number and say:
                  </p>
                  <p className="mt-2 text-lg text-white font-semibold">
                    &quot;My AC stopped working&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Powerful features to help you never miss a customer
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            <FeatureCard
              title="24/7 Call Answering"
              description="Your AI receptionist answers every call instantly, day or night, weekends and holidays."
              icon={<PhoneIcon />}
            />
            <FeatureCard
              title="Lead Capture"
              description="Automatically collect customer information and send it directly to your CRM or email."
              icon={<UsersIcon />}
            />
            <FeatureCard
              title="Appointment Booking"
              description="Let customers book appointments instantly while on the call, synced to your calendar."
              icon={<CalendarIcon />}
            />
            <FeatureCard
              title="Human-like Voice AI"
              description="Natural conversations that sound real. Customers won't know they're talking to AI."
              icon={<SparklesIcon />}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="border-b border-gray-800 bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Service Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Trusted by professionals across industries
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <IndustryBadge name="HVAC" />
            <IndustryBadge name="Plumbing" />
            <IndustryBadge name="Locksmith" />
            <IndustryBadge name="Garage Door Repair" />
            <IndustryBadge name="Pest Control" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Choose the plan that fits your business
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl">
            <PricingCard
              name="Starter"
              price="$199"
              features={[
                'Up to 200 calls/month',
                'Lead capture',
                'Email notifications',
                'Basic analytics',
              ]}
            />
            <PricingCard
              name="Pro"
              price="$399"
              features={[
                'Unlimited calls',
                'Appointment booking',
                'CRM integration',
                'Advanced analytics',
              ]}
              highlighted
            />
          </div>
          <div className="mt-12 text-center">
            <a
              href="#cta"
              className="rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors inline-block"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Stop losing customers to missed calls.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start capturing every opportunity today with AI that works 24/7.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#demo"
                className="rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Get AI Receptionist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Components

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-gray-700 hover:bg-gray-900">
      <div className="mb-4 inline-flex rounded-lg bg-blue-950/50 p-3 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base text-gray-400">{description}</p>
    </div>
  );
}

function IndustryBadge({ name }: { name: string }) {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-center">
      <p className="text-sm font-medium text-gray-300">{name}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-8 ${
        highlighted
          ? 'border-blue-600 bg-gray-900 ring-2 ring-blue-600/20'
          : 'border-gray-800 bg-gray-900/50'
      }`}
    >
      <h3 className="text-2xl font-semibold text-white">{name}</h3>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-5xl font-bold tracking-tight text-white">
          {price}
        </span>
        <span className="text-base font-medium text-gray-400">/month</span>
      </p>
      <ul className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-x-3">
            <CheckIcon />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Icon Components

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-blue-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
