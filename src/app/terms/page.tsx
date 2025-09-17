import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mental-age-test.app/terms",
  },
  openGraph: {
    title: "Terms of Service - Mental Age Test",
    description: "Read the terms of service for Mental Age Test.",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Mental Age Test" }],
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to
            and use of the mental-age-test.app website (the
            &quot;Service&quot;). By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of the Service</h2>
          <p>
            You may use the Service only if you can form a binding contract
            with us, and only in compliance with these Terms and all
            applicable laws. The Service is not intended for use by children
            under the age of 13.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">User Content</h2>
          <p>
            You are responsible for any content you post to the Service, and
            you represent and warrant that you have all necessary rights to do
            so. We do not claim ownership of your content, but you grant us a
            worldwide, royalty-free, non-exclusive license to use, distribute,
            reproduce, modify, adapt, publish, and publicly display such
            content on the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Service for any illegal purpose or in violation of any
              local, state, national, or international law
            </li>
            <li>
              Violate or encourage others to violate the rights of third
              parties, including intellectual property rights
            </li>
            <li>
              Post, upload, or distribute any content that is unlawful,
              defamatory, libelous, inaccurate, or that a reasonable person
              could deem to be objectionable, profane, indecent, pornographic,
              harassing, threatening, hateful, or otherwise inappropriate
            </li>
            <li>
              Interfere with security-related features of the Service
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your access to the Service at any
            time, for any reason, without notice. Upon termination, your
            right to use the Service will immediately cease.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Disclaimer of Warranties
          </h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express or
            implied, including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of
            profits or revenues, whether incurred directly or indirectly, or
            any loss of data, use, goodwill, or other intangible losses,
            resulting from your access to or use of or inability to access or
            use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Governing Law
          </h2>
          <p>
            These Terms shall be governed by the laws of the State of
            California, without respect to its conflict of laws principles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Changes to These Terms
          </h2>
          <p>
            We may revise these Terms from time to time. The most current
            version will always be on this page. By continuing to access or
            use the Service after revisions become effective, you agree to be
            bound by the revised Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, you can contact us
            at support@mental-age-test.app.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
