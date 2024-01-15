// pages/terms.js
import Head from "next/head";

export default function Terms() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Hygieiora - Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions for Hygieiora" />
      </Head>

      <main className="my-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Terms and Conditions
        </h1>

        <section className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to Hygieiora. This document serves as a legally binding
            agreement between you (the user) and Hygieiora.
          </p>

          <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
          <p>
            By using our application, you agree to these terms and conditions.
            If you disagree with any part of these terms, please discontinue use
            of our application.
          </p>

          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your
            continued use of our application following any changes indicates
            your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold">User Responsibilities</h2>
          <p>
            Outline the responsibilities and obligations of the user while using
            the application.
          </p>

          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p>
            State that your application and all its original content, features,
            and functionality are owned by Hygieiora and are protected by
            international copyright and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p>This agreement will be governed by the laws of Ghana.</p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about these terms, please contact us at
            info@hygieiora.com.
          </p>
        </section>
      </main>
    </div>
  );
}
