import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat py-12" style={{
      backgroundImage: 'linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url("https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1920")'
    }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Easy Daily Recipe ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials on Easy Daily Recipe for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on our website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Recipe Content</h2>
            <p className="text-gray-700 mb-6">
              All recipes and cooking instructions are provided for informational purposes only. We make no warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information on our website is strictly at your own risk, and we will not be liable for any losses and damages in connection with the use of our recipes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Generated Content</h2>
            <p className="text-gray-700 mb-6">
              Users may submit comments, reviews, and other content. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content. You are responsible for the content you submit and warrant that it does not violate any laws or infringe on the rights of others.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Google Ads and Analytics</h2>
            <p className="text-gray-700 mb-6">
              Our website may use Google AdSense and Google Analytics services. These services may collect and process data about your visits to our website. By using our website, you consent to the processing of data about you by Google in the manner and for the purposes set out in Google's Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us analyze web traffic and improve our services. You can choose to accept or decline cookies through our cookie consent dialog or your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on Easy Daily Recipe are provided on an 'as is' basis. Easy Daily Recipe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Easy Daily Recipe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Easy Daily Recipe or its authorized representatives have been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Revisions and Errata</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on Easy Daily Recipe could include technical, typographical, or photographic errors. Easy Daily Recipe does not warrant that any of the materials on its website are accurate, complete, or current. Easy Daily Recipe may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where Easy Daily Recipe operates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms and Conditions, please contact us through our contact page or email us at terms@easydailyrecipe.com.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to update or change our Terms and Conditions at any time without prior notice. Your continued use of the service after we post any modifications to the Terms and Conditions on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;