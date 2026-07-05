import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';

const FoodPrivacyPage = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans selection:bg-primary-100 selection:text-primary-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Privacy First</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Food Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Privacy Policy</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Effective Date: May 17, 2024
          </p>
        </motion.div>

        <div className="space-y-12 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary-600" />
              1. Information We Collect
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                When you register as a Food Partner on Crevings, we collect several types of information to provide and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Business Information:</strong> Legal name, store name, business address, GSTIN, and FSSAI license details.</li>
                <li><strong>Contact Information:</strong> Names of owners/managers, email addresses, and phone numbers.</li>
                <li><strong>Financial Information:</strong> Bank account details for processing payouts and tax-related information (PAN).</li>
                <li><strong>Operational Data:</strong> Menu items, pricing, store hours, and order history.</li>
                <li><strong>Device Information:</strong> IP address, device type, OS version, and app usage logs when using the Partner App.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary-600" />
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To verify your business and onboard you as a partner.</li>
                <li>To process and manage orders placed by customers.</li>
                <li>To facilitate weekly payouts to your registered bank account.</li>
                <li>To provide customer support and resolve disputes.</li>
                <li>To analyze platform performance and improve our services.</li>
                <li>To communicate important updates, policy changes, and marketing offers.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary-600" />
              3. Information Sharing
            </h2>
            <p className="leading-relaxed mb-4">
              We do not sell your personal or business data. We share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With Customers:</strong> Your store name, address, and menu are shared to enable ordering.</li>
              <li><strong>With Delivery Partners:</strong> Necessary order details and location to facilitate delivery.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist with payments, cloud hosting, and analytics.</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and safety.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary-600" />
              4. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures, including encryption and secure access controls, to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary-600" />
              5. Your Rights and Choices
            </h2>
            <p className="leading-relaxed">
              You can access and update your business information through the Partner App at any time. If you wish to deactivate your account or request data deletion, please contact us at legal@crevings.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary-600" />
              6. Updates to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes via the app or email. Continued use of the platform after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              For any questions regarding this policy, please reach out to us at <a href="mailto:legal@crevings.com" className="text-primary-600 font-semibold hover:underline">legal@crevings.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPrivacyPage;
