import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function FraudAbusePolicyPage() {
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
            Fraud & Abuse Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Last Updated: March 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This Fraud & Abuse Policy outlines activities that are considered fraudulent, abusive, or harmful to the Crevings platform.
            </p>
            
            <p className="mb-6">
              Crevings is committed to maintaining a safe, fair, and reliable platform for customers, restaurants, and delivery partners. Any attempt to misuse the platform may lead to strict enforcement actions including suspension, account deactivation, and recovery of financial losses.
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200">
              By using the Crevings Delivery Partner App, delivery partners agree to comply with this policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Fraudulent Activities</h2>
                <p className="mb-4">Delivery partners must not engage in any activity intended to manipulate orders, earnings, or platform systems.</p>
                <p className="mb-4 font-medium text-gray-900">Fraudulent activities include but are not limited to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Completing deliveries without actually delivering the order</li>
                  <li>Marking orders as delivered without customer confirmation</li>
                  <li>Manipulating delivery status to earn delivery fees without completing the order</li>
                  <li>Coordinating fake orders to generate earnings</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Such actions are considered serious violations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. GPS Manipulation</h2>
                <p className="mb-4">Delivery partners must not attempt to manipulate or falsify location data.</p>
                <p className="mb-4 font-medium text-gray-900">Prohibited activities include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Using GPS spoofing applications</li>
                  <li>Manipulating location data to falsely appear at pickup or delivery locations</li>
                  <li>Attempting to bypass delivery verification systems</li>
                </ul>
                <p>Crevings may monitor location data to detect such behavior.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Collusion and Order Manipulation</h2>
                <p className="mb-4">Delivery partners must not collaborate with restaurants, customers, or other partners to manipulate platform activity.</p>
                <p className="mb-4 font-medium text-gray-900">Examples include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Creating fake orders to generate earnings</li>
                  <li>Coordinating cancellations to earn compensation</li>
                  <li>Manipulating waiting times or order status</li>
                  <li>Artificially inflating delivery activity</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Such conduct may result in permanent account deactivation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cash Misuse</h2>
                <p className="mb-4">For cash-on-delivery orders, delivery partners are responsible for handling collected payments properly.</p>
                <p className="mb-4 font-medium text-gray-900">Prohibited behavior includes:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Keeping customer cash payments without settlement</li>
                  <li>Failing to report collected cash accurately</li>
                  <li>Misusing or withholding collected payments</li>
                </ul>
                <p>Crevings may recover unpaid balances and restrict account access if such issues occur.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Account Misuse</h2>
                <p className="mb-4">Delivery partner accounts must be used only by the registered individual.</p>
                <p className="mb-4 font-medium text-gray-900">The following actions are not allowed:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Allowing another person to perform deliveries using the account</li>
                  <li>Creating multiple accounts to bypass platform restrictions</li>
                  <li>Using fake identity or vehicle documents</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Accounts involved in such activity may be permanently deactivated.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Abuse of Platform Systems</h2>
                <p className="mb-4">Delivery partners must not attempt to exploit platform systems for unfair advantages.</p>
                <p className="mb-4 font-medium text-gray-900">Examples include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Repeatedly accepting orders without intention to deliver</li>
                  <li>Intentionally delaying orders to gain incentives</li>
                  <li>Manipulating promotions or bonus programs</li>
                </ul>
                <p>Crevings may investigate suspicious activity and take appropriate action.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Investigation and Enforcement</h2>
                <p className="mb-4">If suspicious activity is detected, Crevings may conduct an internal investigation.</p>
                <p className="mb-4 font-medium text-gray-900">This may include reviewing:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Delivery records</li>
                  <li>GPS location data</li>
                  <li>Platform activity logs</li>
                  <li>Customer or restaurant reports</li>
                </ul>
                <p>During investigations, partner accounts may be temporarily suspended.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Financial Recovery</h2>
                <p className="mb-4">If fraudulent activity results in financial loss to the platform, Crevings reserves the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Recover financial losses from partner earnings</li>
                  <li>Adjust pending payouts</li>
                  <li>Restrict access to the platform until balances are settled</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Enforcement Actions</h2>
                <p className="mb-4">Depending on the severity of the violation, Crevings may take actions including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Warning notices</li>
                  <li>Temporary suspension</li>
                  <li>Permanent account deactivation</li>
                  <li>Financial recovery of losses</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Serious violations may result in immediate permanent removal from the platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
                <p className="mb-4">Crevings may update this Fraud & Abuse Policy from time to time.</p>
                <p className="mb-4">Updated policies will be communicated through the Crevings Delivery Partner App.</p>
                <p className="font-semibold text-gray-900">Continued use of the platform indicates acceptance of the updated policy.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
