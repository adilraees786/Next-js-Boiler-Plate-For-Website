import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-black text-gray-200">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* gold glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_300px_at_50%_-10%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs tracking-wide text-yellow-400">
                VIP EXPERIENCE
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Elevate your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200"> VIP </span>
                Presence
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl">
                Premium services, priority access, and white-glove support—crafted for the few.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
                >
                  Get VIP Access
                </a>
                <a
                  href="#perks"
                  className="inline-flex items-center justify-center rounded-xl border border-yellow-500/50 px-6 py-3 font-semibold text-yellow-300 hover:bg-yellow-500/10 transition"
                >
                  See Perks
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {/* Placeholder avatars */}
                  {[1, 2, 3].map((i) => (
                    <span key={i} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 ring-2 ring-black">
                      ⭐
                    </span>
                  ))}
                </div>
                Trusted by 1,200+ premium members
              </div>
            </div>

            {/* Hero visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-yellow-500/30 to-transparent blur-xl" />
                <div className="relative rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-neutral-900 to-black p-4">
                  <div className="aspect-[4/3] w-full rounded-2xl border border-yellow-500/20 bg-neutral-900 flex items-center justify-center">
                    {/* Replace with your image if you want */}
                    <span className="text-yellow-400/80 text-6xl">♛</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    {["Priority", "Concierge", "Access"].map((t) => (
                      <div
                        key={t}
                        className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 text-xs text-yellow-200"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Logos / Trust ===== */}
      <section className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-500">
            Preferred by premium brands
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70">
            {["AURUM", "REGALIA", "EMPYRE", "NIMBUS", "SOVEREIGN", "LUCENT"].map((b) => (
              <div key={b} className="flex items-center justify-center rounded-xl border border-neutral-800 py-4">
                <span className="text-xs sm:text-sm font-semibold tracking-widest">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Perks ===== */}
      <section id="perks" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">VIP Perks</h2>
          <p className="mt-3 text-gray-400">
            Hand-picked benefits that save time, open doors, and feel incredible.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Priority Support",
              desc: "Skip the line with 24/7 white-glove assistance.",
              icon: "⚡",
            },
            {
              title: "Concierge Service",
              desc: "From bookings to bespoke requests, we handle it.",
              icon: "🎩",
            },
            {
              title: "Exclusive Access",
              desc: "Members-only events, early features, private drops.",
              icon: "🔐",
            },
            {
              title: "Personal Manager",
              desc: "A dedicated expert who knows your preferences.",
              icon: "🤝",
            },
            {
              title: "Secure & Private",
              desc: "Your data & time are protected at every step.",
              icon: "🛡️",
            },
            {
              title: "Global Coverage",
              desc: "Support across major cities & timezones.",
              icon: "🌍",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-yellow-500/20 bg-gradient-to-b from-neutral-900/70 to-black p-6 hover:border-yellow-400/40 transition"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-3 text-xl font-semibold text-yellow-200">{p.title}</h3>
              <p className="mt-2 text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Highlight Banner ===== */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(400px_200px_at_50%_0,rgba(212,175,55,0.15),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-yellow-500/30 bg-neutral-950 p-6 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Complimentary onboarding for the first 30 days
            </h3>
            <p className="mt-2 text-gray-400">
              We’ll set everything up for you—no friction, just results.
            </p>
            <a
              href="#pricing"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
            >
              Start Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple Pricing</h2>
          <p className="mt-3 text-gray-400">No surprises—only premium value.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Essential",
              price: "49",
              features: ["Priority email", "Members area", "Monthly report"],
              highlight: false,
            },
            {
              name: "VIP",
              price: "149",
              features: ["24/7 concierge", "Direct manager", "Event access"],
              highlight: true,
            },
            {
              name: "Elite",
              price: "299",
              features: ["Bespoke solutions", "Private drops", "On-site support"],
              highlight: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 border ${
                tier.highlight
                  ? "border-yellow-400 bg-yellow-500/10"
                  : "border-yellow-500/20 bg-neutral-950"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-yellow-400 bg-black px-3 py-1 text-xs text-yellow-300">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-yellow-300">${tier.price}</span>
                <span className="text-sm text-gray-400">/mo</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-yellow-300">✓</span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition ${
                  tier.highlight
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "border border-yellow-500/40 text-yellow-200 hover:bg-yellow-500/10"
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">What Members Say</h2>
          <p className="mt-3 text-gray-400">Real words from our VIP community.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Flawless experience. My manager handled everything—even last-minute changes.",
              name: "Ayesha",
            },
            {
              quote: "Priority support actually means priority. Minutes, not hours.",
              name: "Zain",
            },
            {
              quote: "The events and early access alone pay for the membership.",
              name: "Hassan",
            },
          ].map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-yellow-500/20 bg-neutral-950 p-6"
            >
              <blockquote className="text-gray-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-yellow-300">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Ready for the VIP treatment?
          </h3>
          <p className="mt-3 text-gray-400">
            Join now and unlock concierge support, exclusive access, and more.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
          >
            Become a Member
          </a>
        </div>
      </section>
    </div>
  );
}
