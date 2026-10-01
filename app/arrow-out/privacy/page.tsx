import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Arrow Out Privacy Policy",
  description:
    "Privacy Policy for Arrow Out, including information about advertising, Google AdMob, privacy choices, data handling, and user rights.",
};

const externalLinks = {
  googlePrivacy: "https://policies.google.com/privacy",
  googleAds: "https://policies.google.com/technologies/ads",
  admob: "https://admob.google.com/",
  ump: "https://developers.google.com/admob/android/privacy",
  adsId: "https://support.google.com/android/answer/3118621",
  mobileAdsDisclosure:
    "https://developers.google.com/admob/android/play-data-disclosure",
  retention: "https://support.google.com/googleplay/android-developer/answer/10144311",
};

const sections = [
  {
    title: "1. Information Arrow Out Handles",
    content: (
      <>
        <p>
          Arrow Out does not currently require you to create an account or provide
          personal information such as your name, email address, phone number, or
          postal address to play the game.
        </p>
        <p>Most gameplay information is stored locally on your device. This may include:</p>
        <ul>
          <li>game progress, completed and unlocked levels, and best completion times;</li>
          <li>star ratings, level performance, available lives, and hints;</li>
          <li>gameplay preferences, sound and haptic settings;</li>
          <li>tutorial and onboarding state; and</li>
          <li>other local game settings and progression information.</li>
        </ul>
        <p>
          This information operates the game and preserves your progress and
          preferences. Arrow Out does not currently operate its own user-account
          system or cloud profile service.
        </p>
      </>
    ),
  },
  {
    title: "2. Advertising",
    content: (
      <>
        <p>
          Arrow Out uses Google AdMob and the Google Mobile Ads SDK to display
          banner, interstitial, and optional rewarded advertisements. Rewarded ads
          may let you voluntarily watch an ad in exchange for an in-game benefit,
          such as a hint or life.
        </p>
        <p>
          Advertising services may automatically collect or process information
          from your device. According to Google&apos;s documentation for the
          <ExternalLink href={externalLinks.mobileAdsDisclosure}>Google Mobile Ads SDK</ExternalLink>,
          this may include your IP address (which may be used to estimate general
          location), interactions with the App and ads, diagnostic and performance
          information, and device or account identifiers such as the Android
          Advertising ID or App Set ID.
        </p>
        <p>
          Google may use this information for advertising, analytics, measurement,
          and fraud prevention. Arrow Out does not receive your raw advertising
          identifier or use it to create its own independent profile of you. Read
          more in Google&apos;s <ExternalLink href={externalLinks.googlePrivacy}>Privacy Policy</ExternalLink>
          and information about <ExternalLink href={externalLinks.googleAds}>advertising technologies</ExternalLink>.
        </p>
      </>
    ),
  },
  {
    title: "3. Personalized and Non-Personalized Advertising",
    content: (
      <>
        <p>
          The ads available to you may depend on your region, privacy choices,
          device settings, and applicable law. Where required, Arrow Out uses
          Google&apos;s <ExternalLink href={externalLinks.ump}>User Messaging Platform (UMP)</ExternalLink>
          to request and manage privacy choices before requesting ads that require
          consent.
        </p>
        <p>
          Depending on your location and choices, Google may serve personalized,
          non-personalized, limited, or other permitted advertising. In the
          European Economic Area, the United Kingdom, Switzerland, and other
          jurisdictions where consent is required, a Google privacy message may
          let you consent, decline where available, manage specific choices, or
          revisit them through the privacy options interface. Available choices
          vary by jurisdiction and applicable regulations.
        </p>
        <p>
          Google&apos;s current UMP guidance says apps should refresh consent
          information at launch and determine whether a consent form or
          privacy-options entry point is required. See Google&apos;s
          <ExternalLink href={externalLinks.ump}>UMP guidance</ExternalLink>.
        </p>
      </>
    ),
  },
  {
    title: "4. Advertising Identifiers",
    content: (
      <p>
        Google Mobile Ads may use identifiers such as the Android Advertising ID
        where permitted. Android settings may let you reset or delete this ID or
        control advertising personalization; availability depends on your Android
        version and device. Google also documents how developers can configure the
        SDK so the Android Advertising ID is not collected. See
        <ExternalLink href={externalLinks.adsId}>Android&apos;s advertising ID controls</ExternalLink>
        and Google&apos;s <ExternalLink href={externalLinks.mobileAdsDisclosure}>Mobile Ads SDK disclosure</ExternalLink>.
      </p>
    ),
  },
  {
    title: "5. Third-Party Services",
    content: (
      <>
        <p>Arrow Out currently uses these Google services for advertising and privacy management:</p>
        <ul>
          <li><ExternalLink href={externalLinks.admob}>Google AdMob / Google Mobile Ads SDK</ExternalLink> for banner, interstitial, and rewarded ads and related functionality.</li>
          <li><ExternalLink href={externalLinks.ump}>Google User Messaging Platform (UMP)</ExternalLink> to obtain and manage privacy and consent choices where required.</li>
        </ul>
        <p>These services may process information under their own terms and privacy policies:</p>
        <ul>
          <li><ExternalLink href={externalLinks.googlePrivacy}>Google Privacy Policy</ExternalLink></li>
          <li><ExternalLink href={externalLinks.googleAds}>Google advertising information</ExternalLink></li>
          <li><ExternalLink href={externalLinks.admob}>Google AdMob</ExternalLink></li>
        </ul>
      </>
    ),
  },
  {
    title: "6. How Information Is Used",
    content: (
      <>
        <p>Information processed through Arrow Out and its integrated services may be used to:</p>
        <ul>
          <li>provide and operate the game, save local progress and preferences, and provide gameplay functionality;</li>
          <li>display and deliver ads, process rewarded-ad outcomes, and measure ad performance;</li>
          <li>maintain ad service reliability, diagnose technical problems, and prevent fraud, abuse, and invalid activity;</li>
          <li>comply with privacy choices and legal obligations; and</li>
          <li>maintain and improve the App.</li>
        </ul>
        <p>
          We do not sell personal information directly to data brokers or
          independently maintain a database of personal profiles about Arrow Out
          players. Third-party advertising providers may process information as
          described in their own privacy policies and according to the choices
          available to you.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Sharing",
    content: (
      <>
        <p>
          Arrow Out does not currently operate a server that receives your gameplay
          profile or personal account information. Information may be transmitted
          to Google through the Google Mobile Ads SDK and UMP as needed for
          advertising, consent management, related service analytics, and fraud
          prevention.
        </p>
        <p>
          Google describes the Mobile Ads SDK as automatically collecting and
          sharing information such as IP address, product interactions, diagnostic
          information, and device or account identifiers for advertising,
          analytics, and fraud prevention. See Google&apos;s
          <ExternalLink href={externalLinks.mobileAdsDisclosure}>Mobile Ads SDK disclosure</ExternalLink>.
          We may also disclose information when required by law, legal process, or
          valid governmental requests, or where reasonably needed to protect users,
          our rights, or the App&apos;s security and integrity.
        </p>
      </>
    ),
  },
  {
    title: "8. Local Game Data",
    content: (
      <p>
        Gameplay progress and preferences are currently stored locally on your
        device. Since Arrow Out has no online account or cloud-save system,
        uninstalling the App, clearing its application data, or resetting the
        device may permanently remove your locally stored progress. We may not be
        able to restore it.
      </p>
    ),
  },
  {
    title: "9. Data Retention and Deletion",
    content: (
      <>
        <p>
          Arrow Out retains locally stored gameplay information on your device
          until it is removed through normal app or device controls, such as
          clearing the App&apos;s data or uninstalling it. Arrow Out does not
          currently maintain an online account database containing your gameplay
          profile.
        </p>
        <p>
          Google may retain information processed through its services according
          to its policies and legal obligations. You can remove Arrow Out&apos;s
          local data by clearing the App&apos;s storage through Android settings or
          uninstalling the App. If Arrow Out adds accounts, cloud saves, or
          server-side personal data storage, this policy will describe the related
          retention and deletion controls. Google Play also requires developers to
          disclose data retention and deletion practices; see
          <ExternalLink href={externalLinks.retention}>Google Play&apos;s policy guidance</ExternalLink>.
        </p>
      </>
    ),
  },
  {
    title: "10. Data Security",
    content: (
      <>
        <p>
          We take reasonable measures appropriate to the App to protect
          information handled through Arrow Out. Gameplay information under our
          direct control is primarily stored locally on your device.
        </p>
        <p>
          According to Google&apos;s <ExternalLink href={externalLinks.mobileAdsDisclosure}>Mobile Ads SDK disclosure</ExternalLink>,
          information transmitted by the SDK is protected in transit using
          Transport Layer Security (TLS). No method of electronic storage or
          transmission can be guaranteed completely secure.
        </p>
      </>
    ),
  },
  {
    title: "11. Children’s Privacy",
    content: (
      <>
        <p>
          Arrow Out is not intended to knowingly collect personal information
          directly from children. The App does not currently require a name, email
          address, phone number, or Arrow Out account.
        </p>
        <p>
          Advertising and data processing may be subject to additional requirements
          depending on the user&apos;s age, Arrow Out&apos;s audience designation in
          Google Play, and applicable law. If Arrow Out is later directed to
          children or includes children in its target audience, we will update our
          advertising configuration and privacy practices as required by law and
          Google Play and AdMob policies. If you believe a child&apos;s personal
          information has been handled improperly in connection with Arrow Out,
          please contact us below.
        </p>
      </>
    ),
  },
  {
    title: "12. Your Privacy Choices",
    content: (
      <>
        <p>
          Depending on your jurisdiction and available services, you may have
          rights to request access, correction, deletion, restriction, or objection
          regarding personal information, or to withdraw consent.
        </p>
        <p>
          Where Google&apos;s UMP privacy controls are available, Arrow Out may
          provide a privacy-options entry point to review or change applicable ad
          consent choices. You can also use Android settings to manage
          advertising-related settings where supported.
        </p>
        <p>
          Since Arrow Out does not currently maintain user accounts or a
          server-side gameplay profile, we generally cannot identify or retrieve
          locally stored game data from our servers. For information processed
          directly by Google, use the privacy controls and contact options
          provided by <ExternalLink href={externalLinks.googlePrivacy}>Google</ExternalLink>.
        </p>
      </>
    ),
  },
  {
    title: "13. International Data Processing",
    content: (
      <p>
        Third-party providers used by Arrow Out, including Google, may process
        information on servers outside your country or region. Where applicable,
        this processing is governed by the provider&apos;s safeguards, privacy
        terms, and legal obligations.
      </p>
    ),
  },
  {
    title: "14. Permissions",
    content: (
      <p>
        Arrow Out requests only Android permissions needed for functionality in
        the released App. Internet and network access are required for features
        such as loading ads and communicating with advertising and consent
        management services. If future versions add features that need additional
        permissions or categories of personal or sensitive information, this
        policy will be updated where needed.
      </p>
    ),
  },
  {
    title: "15. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this policy as Arrow Out evolves, when we introduce features
        or third-party services, or when legal requirements change. When we do,
        we will update the “Last updated” date at the top of this page. Material
        changes may also be communicated through the App or other appropriate
        means where required. Please review this policy periodically.
      </p>
    ),
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}<ArrowUpRight aria-hidden="true" className="ml-0.5 inline h-3.5 w-3.5" />
    </a>
  );
}

export default function ArrowOutPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EC] px-4 py-8 font-main text-[#0D1321] dark:bg-[#061026] dark:text-[#E8E6DA] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/portfolio/"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#CAD3DB] px-4 text-sm transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-[#2E455D] dark:hover:bg-white/5"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="mt-8 rounded-3xl border border-[#CAD3DB] bg-white/75 p-6 shadow-sm dark:border-[#2E455D] dark:bg-[#0B1930] sm:mt-10 sm:p-10">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 dark:bg-sky-300/10 dark:text-sky-200">
            <ShieldCheck aria-hidden="true" className="h-6 w-6" />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:text-sky-300">
            Arrow Out · Player information
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#0D1321]/70 dark:text-white/70 sm:text-lg">
            How the Arrow Out mobile game handles local game data, advertising,
            and your privacy choices.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#D1D4CD] pt-5 text-sm dark:border-[#2E455D]">
            <p><span className="text-[#0D1321]/55 dark:text-white/55">Effective date</span><br /><time dateTime="2026-10-01" className="mt-1 inline-block font-medium">October 1, 2026</time></p>
            <p><span className="text-[#0D1321]/55 dark:text-white/55">Last updated</span><br /><time dateTime="2026-10-01" className="mt-1 inline-block font-medium">October 1, 2026</time></p>
          </div>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start">
          <article className="order-2 rounded-3xl border border-[#CAD3DB] bg-white/75 p-6 shadow-sm dark:border-[#2E455D] dark:bg-[#0B1930] sm:p-10 lg:order-1">
            <div className="mb-9 space-y-3 text-[15px] leading-7 text-[#0D1321]/80 dark:text-white/80 sm:text-base">
              <p>
                This Privacy Policy explains how Arrow Out (“Arrow Out,” “the App,”
                “we,” “us,” or “our”) handles information when you use the Arrow Out
                mobile game. Arrow Out is developed and published by Ganesh Sharma.
              </p>
              <p>
                We respect your privacy and aim to collect and process only the
                information needed to operate, improve, secure, and monetize the
                App. By using Arrow Out, you acknowledge the practices described
                in this Privacy Policy.
              </p>
            </div>
            <div className="divide-y divide-[#D1D4CD] dark:divide-[#2E455D]">
              {sections.map((section) => (
                <section key={section.title} id={`section-${section.title.match(/^\d+/)?.[0]}`} className="py-7 first:pt-0 last:pb-0">
                  <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">{section.title}</h2>
                  <div className="space-y-4 text-[15px] leading-7 text-[#0D1321]/75 dark:text-white/75 sm:text-base [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline [&_a]:decoration-sky-800/40 [&_a]:underline-offset-4 [&_a:hover]:decoration-current dark:[&_a]:text-sky-300 dark:[&_a]:decoration-sky-300/40 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {section.content}
                  </div>
                </section>
              ))}
              <section className="py-7 last:pb-0">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">16. Contact Us</h2>
                <div className="space-y-4 text-[15px] leading-7 text-[#0D1321]/75 dark:text-white/75 sm:text-base">
                  <p>If you have questions, concerns, or requests about this policy or Arrow Out’s privacy practices, contact:</p>
                  <address className="not-italic">
                    <span className="block">Developer: Ganesh Sharma</span>
                    <span className="block">App: Arrow Out</span>
                    <span className="block">Email: <a className="font-medium text-sky-800 underline decoration-sky-800/40 underline-offset-4 dark:text-sky-300 dark:decoration-sky-300/40" href="mailto:shashanklhr@gmail.com">shashanklhr@gmail.com</a></span>
                    <span className="block">Website: <ExternalLink href="https://ganesh-sharmaz.github.io/portfolio/">ganesh-sharmaz.github.io/portfolio</ExternalLink></span>
                  </address>
                </div>
              </section>
            </div>
          </article>

          <aside className="order-1 rounded-3xl border border-[#CAD3DB] bg-[#EEF3F5] p-6 dark:border-[#2E455D] dark:bg-[#0B1930] lg:sticky lg:top-6 lg:order-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">On this page</h2>
            <nav aria-label="Privacy policy sections" className="mt-4 max-h-[42vh] overflow-y-auto pr-2">
              <ol className="space-y-2 text-sm leading-5 text-[#0D1321]/70 dark:text-white/70">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a className="transition-colors hover:text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:hover:text-sky-300" href={`#section-${index + 1}`}>
                      {section.title.replace(/^\d+\. /, "")}
                    </a>
                  </li>
                ))}
                <li><a className="transition-colors hover:text-sky-800 dark:hover:text-sky-300" href="#section-16">Contact Us</a></li>
              </ol>
            </nav>
            <p className="mt-5 border-t border-[#CAD3DB] pt-4 text-xs leading-5 text-[#0D1321]/60 dark:border-[#2E455D] dark:text-white/55">
              This page is public and readable without an account or download.
            </p>
          </aside>
        </div>
        <footer className="py-8 text-center text-xs text-[#0D1321]/50 dark:text-white/45">
          Arrow Out · Privacy Policy
        </footer>
      </div>
    </main>
  );
}
