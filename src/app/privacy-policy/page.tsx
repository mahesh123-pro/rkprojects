import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 border-b-4 border-accent pb-4 inline-block">Privacy Policy</h1>
        
        <div className="space-y-8 text-lg font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              Welcome to RK Projects. We value your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. The Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <ul className="mt-4 font-semibold text-primary">
              <li>Email: rkprojects.lrs@gmail.com</li>
              <li>Phone: +91 95056 50901</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
