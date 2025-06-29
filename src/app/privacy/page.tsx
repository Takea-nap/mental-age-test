import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            This Privacy Policy describes how mental-age-test.app
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
            uses, and discloses your personal information when you use our
            website (the &quot;Service&quot;).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect personal information that you provide to us, such
            as your name, email address, and any other information you choose
            to provide.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>
            We may use the information we collect for various purposes,
            including to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our Service</li>
            <li>Improve, personalize, and expand our Service</li>
            <li>Understand and analyze how you use our Service</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the Service, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Sharing Your Information
          </h2>
          <p>
            We may share your personal information in the following
            situations:
          </p>
          <ul>
            <li>
              With service providers to monitor and analyze the use of our
              Service
            </li>
            <li>
              For business transfers, we may share or transfer your personal
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of
              all or a portion of our business to another company.
            </li>
            <li>
              With your consent, we may disclose your personal information
              for any other purpose.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Your Privacy Rights
          </h2>
          <p>
            You have certain rights regarding your personal information,
            including the right to access, correct, or delete your personal
            information. Please contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will
            notify you of any changes by posting the new Privacy Policy on
            this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can
            contact us at support@mental-age-test.app.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
