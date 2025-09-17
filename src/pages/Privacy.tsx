import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat py-12" style={{
      backgroundImage: 'linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url("https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=1920")'
    }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Easy Daily Recipe ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Data</h3>
            <p className="text-gray-700 mb-4">
              We may collect personally identifiable information, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Name and email address (when you contact us or subscribe to our newsletter)</li>
              <li>Comments and reviews you submit</li>
              <li>Any other information you voluntarily provide</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Non-Personal Data</h3>
            <p className="text-gray-700 mb-4">
              We may collect non-personally identifiable information about you whenever you interact with our site, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Browser name and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-semibent text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>To personalize your experience and respond to your individual needs</li>
              <li>To improve our website based on your feedback</li>
              <li>To improve customer service and support</li>
              <li>To send periodic emails regarding updates or other products and services</li>
              <li>To administer contests, promotions, surveys, or other site features</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience:
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Essential Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Analytics Cookies</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to analyze how visitors use our website. This helps us improve our content and user experience. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Advertising Cookies</h3>
            <p className="text-gray-700 mb-6">
              We may use Google AdSense to display advertisements. These cookies are used to make advertising messages more relevant to you and may track your browsing habits across different websites.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Google Services</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to this site.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Google AdSense</h3>
            <p className="text-gray-700 mb-6">
              We may use Google AdSense advertising services. Google may use cookies and web beacons to serve ads based on your prior visits to our website or other websites on the Internet. You can opt out of personalized advertising by visiting Google's Ads Settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Disclosure</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this privacy policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our website does not knowingly collect personally identifiable information from children under 13 years of age. If you are under 13, please do not submit any personal information to us. If we discover that we have collected personal information from a child under 13, we will delete that information immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to update or change our Privacy Policy at any time. Your continued use of the service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us through our contact page or email us at privacy@easydailyrecipe.com.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Consent</h2>
            <p className="text-gray-700 mb-6">
              By using our website, you consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;