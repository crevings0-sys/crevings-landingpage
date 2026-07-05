import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function FoodTermsPage() {
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
            Food Partner Terms & Conditions
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Effective Date: 21st July 2025</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This document outlines the preliminary Terms & Conditions applicable to restaurant partners (“Restaurant” or “You”) onboarded onto the Crevings food delivery platform (“Crevings”, “We”, “Us”, or “Our”).
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200">
              By registering as a partner on Crevings, you agree to comply with all the terms outlined below. These terms are binding and subject to expansion in subsequent phases.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Acceptance</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>By signing up as a restaurant partner, you accept to be legally bound by the terms mentioned herein.</li>
                  <li>You confirm that all information shared during onboarding is true and accurate.</li>
                  <li>Crevings reserves the right to amend, update, or modify these terms at any time with prior notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Restaurant Eligibility</h2>
                <p className="mb-4">To qualify for onboarding, the restaurant must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Be a legally registered entity.</li>
                  <li>Hold a valid FSSAI license.</li>
                  <li>Hold a valid GST Number.</li>
                  <li>Be compliant with local regulations.</li>
                  <li>Have a functional kitchen capable of handling order volumes.</li>
                </ul>
                <p>Crevings may request documentary proof during onboarding or anytime thereafter.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Platform</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Restaurant must maintain updated menu, pricing, and availability.</li>
                  <li>Prices must match dine-in prices unless otherwise approved.</li>
                  <li>Restaurants must not misuse the platform or manipulate systems.</li>
                  <li>All activities on the account are the restaurant’s responsibility.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Order Fulfilment</h2>
                <p className="mb-4">Orders accepted through the Crevings platform must be fulfilled within the promised time.</p>
                <p className="mb-4 font-medium text-gray-900">Restaurants must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ensure food is fresh and hygienically packed.</li>
                  <li>Use tamper-proof packaging where possible.</li>
                  <li>Be available during operational hours.</li>
                  <li>Avoid delays or missing items.</li>
                </ul>
                <p>Crevings monitors order success, feedback, cancellations, etc.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Fees & Subscription</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">a. Subscription Charges</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>₹399/month (plus GST = ₹470.82 total)</li>
                      <li>Access to all platform features.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">b. Commission on Orders</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>0% commission—Crevings does NOT charge any commission on orders.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">c. Government GST on Food Delivery</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>5% GST collected from customer and passed to restaurant or remitted.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">d. Platform Fee</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Crevings charges ₹0 platform fee per order.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payouts & Settlements</h2>
                <p className="mb-4">Payouts are processed daily between 9:00 PM – 10:00 PM via NEFT.</p>
                <p className="mb-4 font-medium text-gray-900">Deductions include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Subscription fees</li>
                  <li>Penalties</li>
                  <li>Refund reimbursements</li>
                  <li>Marketing deductions</li>
                  <li>Government taxes</li>
                </ul>
                <p>Payout summary will be provided on dashboard & email.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Promotion & Branding Policy</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Ownership</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Crevings branding is intellectual property.</li>
                      <li>No unauthorized usage allowed.</li>
                      <li>Misuse may lead to suspension or legal action.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Restaurant Branding on Platform</h3>
                    <p className="mb-2">Restaurants grant Crevings non-exclusive rights...</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>In-app listings</li>
                      <li>Email campaigns</li>
                      <li>Ads and banners</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Modification of Terms</h2>
                <p>Crevings may update these Terms at any time. Continued usage means acceptance.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
