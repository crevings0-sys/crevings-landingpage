import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function AccountSuspensionPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            <span>Policy Document</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Account Suspension & Deactivation Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Last Updated: March 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This policy explains the conditions under which a delivery partner account may be temporarily suspended or permanently deactivated on the Crevings platform.
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200">
              Crevings may take action against delivery partner accounts to maintain platform safety, service quality, and compliance with company policies.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Temporary Suspension</h2>
                <p className="mb-4">Crevings may temporarily suspend a delivery partner account in situations such as:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Repeated order cancellations</li>
                  <li>Consistently late deliveries</li>
                  <li>Customer complaints regarding service behavior</li>
                  <li>Failure to follow platform procedures</li>
                  <li>Suspicious or unusual activity detected on the account</li>
                </ul>
                <p className="text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-100">During suspension, the delivery partner may not receive new delivery orders until the issue is reviewed or resolved.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Permanent Account Deactivation</h2>
                <p className="mb-4">Crevings may permanently deactivate a delivery partner account for serious violations including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Fraudulent activity or fake deliveries</li>
                  <li>GPS manipulation or location spoofing</li>
                  <li>Theft or misuse of customer cash payments</li>
                  <li>Physical threats, harassment, or abusive behavior</li>
                  <li>Food tampering or order theft</li>
                  <li>Use of fake or forged identity documents</li>
                  <li>Allowing another person to operate the account</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Permanent deactivation may result in permanent removal from the Crevings platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Investigation Process</h2>
                <p className="mb-4">If suspicious activity or policy violations are detected, Crevings may initiate an internal review.</p>
                <p className="mb-4 font-medium text-gray-900">During the investigation process:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The delivery partner account may be temporarily suspended</li>
                  <li>Crevings may request additional information or clarification</li>
                  <li>Relevant delivery data and platform activity may be reviewed</li>
                </ul>
                <p>Crevings reserves the right to take appropriate action based on the findings of the investigation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Financial Adjustments</h2>
                <p className="mb-4">If a violation results in financial loss or platform misuse, Crevings may:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Recover the financial loss from the delivery partner account</li>
                  <li>Adjust pending earnings or payouts</li>
                  <li>Withhold payments related to disputed deliveries</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Repeated Violations</h2>
                <p className="mb-4">Repeated violations of platform rules, Code of Conduct, or operational policies may lead to progressive enforcement actions including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Warning notices</li>
                  <li>Temporary suspension</li>
                  <li>Permanent account deactivation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Platform Protection</h2>
                <p className="mb-4">Crevings reserves the right to suspend or deactivate delivery partner accounts at its discretion when necessary to protect:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Customers</li>
                  <li>Restaurants</li>
                  <li>Delivery partners</li>
                  <li>Platform integrity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Policy Updates</h2>
                <p className="mb-4">Crevings may update this policy from time to time.</p>
                <p className="mb-4">Updated versions will be communicated through the Crevings Delivery Partner App.</p>
                <p className="font-semibold text-gray-900">Continued use of the platform indicates acceptance of the updated policy.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
