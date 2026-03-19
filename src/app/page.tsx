import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CHAINS, FEATURES, STEPS } from "@/constants";
import {
  HiOutlineTrendingUp,
  HiOutlineSwitchHorizontal,
  HiOutlineSparkles,
  HiOutlineRefresh,
} from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FF4DA6]/8 via-transparent to-transparent" />
        <div className="pointer-events-none absolute top-0 left-1/4 w-px h-48 bg-gradient-to-b from-[#FF4DA6]/35 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-[#FF4DA6]/20 to-transparent" />

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <Image
            src="/riona.jpeg"
            alt="Agent Riona"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#09090b]/82 via-[#09090b]/38 to-[#09090b]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-[#09090b]/62" />
          <div className="absolute inset-0 bg-[#09090b]/18" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090b]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />

        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <Image
            src="/riona.jpeg"
            alt="Agent Riona"
            fill
            priority
            className="object-cover object-center opacity-16"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/36 to-[#09090b]/88" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A24] border border-[#2A2A35] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF4DA6] animate-pulse"></span>
            <span className="text-sm text-[#A0A0B0]">Agent Riona | Instagram + X Automation</span>
          </div>

          {/* <div className="mx-auto mb-8 flex w-fit items-center gap-4 rounded-3xl border border-[#2A2A35] bg-[#111119]/80 px-5 py-4 backdrop-blur">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-[#2A2A35]">
              <Image
                src="/riona.jpeg"
                alt="Agent Riona portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Agent Riona</div>
              <div className="text-xs text-[#A0A0B0]">
                AI social automation operator
              </div>
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Meet Agent Riona</span>
            <br />
            <span className="text-white">Your AI Social Media Operator</span>
          </h1>

          <p className="text-xl text-[#A0A0B0] max-w-2xl mx-auto mb-10">
            Riona automates Instagram and X with AI-generated captions, comments,
            scheduling, and engagement workflows. Train the agent with YouTube,
            audio, documents, and websites, then run safe automation with clear
            limits and summaries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#get-started">
              <Button size="lg" className="glow-blue">
                {"Get Started ->"}
              </Button>
            </Link>
            <Link href="#howitworks">
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: "Platforms", value: "Instagram + X" },
              { label: "Core Actions", value: "Post | Like | Comment" },
              { label: "Training Inputs", value: "YouTube | Audio | Files" },
              { label: "Safety Controls", value: "Cooldowns | Limits" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-[#606070]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#12121A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-[#A0A0B0]">
              Riona generates content, schedules actions, and keeps automation inside clear guardrails
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            id="howitworks"
          >
            {FEATURES.map((feature, index) => {
              const iconMap = {
                HiOutlineTrendingUp: HiOutlineTrendingUp,
                HiOutlineSwitchHorizontal: HiOutlineSwitchHorizontal,
                HiOutlineSparkles: HiOutlineSparkles,
                HiOutlineRefresh: HiOutlineRefresh,
              } as const;
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];

              return (
                <Card key={index} hover className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF78C9]/20 to-[#B0145A]/20 mb-4">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-[#FF78C9]" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#A0A0B0]">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Started with Riona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#1A1A24] absolute -top-4 -left-2">
                  {step.number}
                </div>
                <div className="pt-8 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#A0A0B0]">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-[#B0145A] text-2xl">{"->"}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#12121A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What You Can Do Today
            </h2>
            <p className="text-[#A0A0B0]">
              Automate social presence with dependable workflows, not one-off scripts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "AI Content Generation",
                copy:
                  "Generate captions and comments tuned to your brand voice with schema-safe output.",
              },
              {
                title: "Scheduled Posting",
                copy:
                  "Queue posts and run timed campaigns without manual touchpoints.",
              },
              {
                title: "Engagement Automation",
                copy:
                  "Automate likes, comments, and profile interactions with throttling.",
              },
              {
                title: "Training Inputs",
                copy:
                  "Train Riona using YouTube videos, audio, PDFs, docs, and websites.",
              },
              {
                title: "Safety Controls",
                copy:
                  "Daily limits, cooldowns, and retry logic to avoid account risk.",
              },
            ].map((item) => (
              <Card key={item.title} hover>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[#A0A0B0]">
                  {item.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Operational Modules
            </h2>
            <p className="text-[#A0A0B0]">
              Riona is built as modular automation services you can enable and combine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Instagram Agent",
                label: "Core",
                copy:
                  "Automates login, posting, likes, comments, and session handling.",
              },
              {
                title: "X (Twitter) Agent",
                label: "Core",
                copy:
                  "Publishes tweets, manages media, and throttles engagement actions.",
              },
              {
                title: "Content Training",
                label: "AI",
                copy:
                  "Ingests YouTube, audio, documents, and websites to shape tone.",
              },
              {
                title: "Scheduler",
                label: "Automation",
                copy:
                  "Plans posts and sequences actions across time windows.",
              },
              {
                title: "Safety Controls",
                label: "Risk",
                copy:
                  "Cooldowns, daily limits, and retry logic to reduce account risk.",
              },
              {
                title: "Run Summaries",
                label: "Insights",
                copy:
                  "Logs and summaries that help you review performance quickly.",
              },
            ].map((item) => (
              <Card key={item.title} hover>
                <div className="text-xs uppercase tracking-[0.24em] text-[#72738A] mb-3">
                  {item.label}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[#A0A0B0]">
                  {item.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-20 px-6 bg-[#12121A]" id="supportedchains">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported Platforms
            </h2>
            <p className="text-[#A0A0B0]">
              Riona automates social platforms and trains from your content sources
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {CHAINS.map((chain) => (
              <div
                key={chain.id}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#1A1A24] border border-[#2A2A35] hover:border-[#3A3A48] transition-all"
              >
                <Image
                  src={chain.logo}
                  alt={chain.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-white font-medium">{chain.name}</span>
                <span className="text-[#606070] text-sm">({chain.symbol})</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#A0A0B0] text-sm">
              Content generation powered by Gemini | Automation powered by Riona AI Agent
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" id="get-started">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1A1A24] to-[#12121A] rounded-3xl p-12 border border-[#2A2A35]">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Deploy Agent Riona?
            </h2>
            <p className="text-[#A0A0B0] mb-8">
              Launch Riona and automate your social presence with AI content and safe limits.
            </p>
            <Link href="#get-started">
              <Button size="lg" className="glow-pink">
                Launch Riona Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#2A2A35]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#606070] text-sm">Agent Riona</span>
          </div>
          <div className="text-[#606070] text-sm">
            Built for the Riona AI Agent platform
          </div>
        </div>
      </footer>
    </div>
  );
}
