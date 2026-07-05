import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function ConsumerRefundPolicyPage() {
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
            Crevings Consumer Refund Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Effective Date: 21 May 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This Refund Policy governs refund eligibility, processing, limitations, and dispute resolution for orders placed through the Crevings platform operated by Crevings Marketplace Private Limited (“Crevings”, “Company”, “we”, “our”, or “us”).
            </p>
            <p className="mb-12 pb-12 border-b border-gray-200">
              By placing an order through Crevings, Users acknowledge and agree to the terms outlined in this Refund Policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose of this Policy</h2>
                <div className="space-y-4">
                  <p>Crevings aims to maintain fair, transparent, and balanced resolution processes for Customers, Food Partners, and Delivery Partners.</p>
                  <p>Refunds are processed based on verification, operational findings, and platform policies. Refund approval is not automatic and remains subject to review.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund Eligibility</h2>
                <p className="mb-4">Refunds may be considered under the following situations:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Failed Payment but No Order Confirmation</h3>
                    <p className="mb-2">If payment is successfully debited but:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>no order is generated, or</li>
                      <li>order confirmation fails due to technical reasons,</li>
                    </ul>
                    <p className="mt-2">the amount may be automatically reversed or refunded after verification.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Restaurant Unable to Fulfill Order</h3>
                    <p className="mb-2">Refunds may be issued if:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>restaurant rejects order after payment,</li>
                      <li>items become unavailable,</li>
                      <li>restaurant closes unexpectedly,</li>
                      <li>operational issues prevent fulfillment.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 Order Not Delivered</h3>
                    <p className="mb-2">Users may be eligible for refund where:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>order is not delivered,</li>
                      <li>delivery fails due to operational error,</li>
                      <li>order is marked delivered incorrectly after verification.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.4 Missing or Incorrect Items</h3>
                    <p className="mb-2">Partial refunds may be issued if:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>specific items are missing,</li>
                      <li>wrong items are delivered,</li>
                      <li>quantity mismatch is verified.</li>
                    </ul>
                    <p className="mt-2 mb-2">Users may be required to provide:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>images,</li>
                      <li>packaging proof,</li>
                      <li>invoice screenshots,</li>
                      <li>relevant order details.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.5 Significant Food Quality Issues</h3>
                    <p className="mb-2">Refunds or compensation may be considered in cases involving:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>spoiled food,</li>
                      <li>visibly damaged items,</li>
                      <li>severe packaging leakage,</li>
                      <li>major quality concerns verified through evidence.</li>
                    </ul>
                    <p className="mt-2">Food taste preferences, spice levels, or subjective dislikes alone may not qualify for refunds.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.6 Duplicate Payment / Double Charge</h3>
                    <p className="mb-2">Refunds may be processed in cases of:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>duplicate transactions,</li>
                      <li>accidental double payments,</li>
                      <li>payment gateway duplication errors.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Non-Refundable Situations</h2>
                <p className="mb-2">Refunds may not be issued under the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>incorrect delivery address provided by User</li>
                  <li>customer unavailable during delivery</li>
                  <li>repeated failed contact attempts</li>
                  <li>order refusal at doorstep</li>
                  <li>minor delays caused by traffic/weather</li>
                  <li>subjective taste preferences</li>
                  <li>partially consumed food without valid issue</li>
                  <li>misuse or fraudulent refund claims</li>
                  <li>cancellation after restaurant preparation has started</li>
                  <li>cash-on-delivery refusal without valid reason</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation & Refund Relationship</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Customer-Initiated Cancellation</h3>
                    <p className="mb-2">Orders canceled before restaurant preparation may qualify for full or partial refunds depending on operational stage.</p>
                    <p className="mb-2">Once food preparation has started:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>cancellation may be restricted,</li>
                      <li>platform fees and operational charges may become non-refundable,</li>
                      <li>refund amount may be reduced or denied.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Restaurant or Platform Cancellation</h3>
                    <p className="mb-2">Where cancellation occurs due to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>restaurant unavailability,</li>
                      <li>operational failure,</li>
                      <li>technical issues,</li>
                      <li>rider allocation failure,</li>
                    </ul>
                    <p className="mt-2">eligible refunds may be processed to the original payment method or Crevings wallet.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Processing Timeline</h2>
                <p className="mb-4">Refund timelines may vary depending on payment method and banking systems.</p>
                <p className="mb-4 font-semibold">Approximate timelines:</p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 pr-4 font-semibold text-gray-900">Payment Method</th>
                        <th className="py-2 pr-4 font-semibold text-gray-900">Estimated Refund Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="py-2 pr-4">UPI</td><td className="py-2 pr-4">1–5 business days</td></tr>
                      <tr><td className="py-2 pr-4">Debit/Credit Card</td><td className="py-2 pr-4">3–10 business days</td></tr>
                      <tr><td className="py-2 pr-4">Net Banking</td><td className="py-2 pr-4">3–7 business days</td></tr>
                      <tr><td className="py-2 pr-4">Wallet Refund</td><td className="py-2 pr-4">Usually instant to 24 hours</td></tr>
                      <tr><td className="py-2 pr-4">COD Orders</td><td className="py-2 pr-4">Wallet/store credit or manual review basis</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Crevings shall not be responsible for delays caused by banks, payment gateways, or financial institutions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refund Method</h2>
                <p className="mb-2">Refunds may be processed through:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>original payment source,</li>
                  <li>Crevings wallet credit,</li>
                  <li>promotional credit,</li>
                  <li>coupon compensation,</li>
                  <li>alternative resolution determined by Crevings.</li>
                </ul>
                <p className="mt-2">The mode of refund shall remain at the sole discretion of Crevings depending on operational circumstances.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Investigation & Verification Rights</h2>
                <p className="mb-2">Crevings reserves full rights to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>review refund requests,</li>
                  <li>request supporting evidence,</li>
                  <li>verify order records,</li>
                  <li>contact restaurants or delivery partners,</li>
                  <li>reject suspicious or abusive claims.</li>
                </ul>
                <p className="mt-4 mb-2">Users repeatedly engaging in fraudulent or excessive refund requests may face:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>account restrictions,</li>
                  <li>refund limitations,</li>
                  <li>suspension or permanent account termination.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Fraud Prevention</h2>
                <p className="mb-2">Crevings actively monitors:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>repeated refund patterns,</li>
                  <li>fake missing-item claims,</li>
                  <li>suspicious cancellation behavior,</li>
                  <li>coupon misuse,</li>
                  <li>delivery fraud,</li>
                  <li>abusive conduct toward partners.</li>
                </ul>
                <p className="mt-4 mb-2">Any fraudulent activity may result in:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>permanent suspension,</li>
                  <li>legal reporting,</li>
                  <li>blocking of payment methods/devices,</li>
                  <li>denial of future refunds.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <div className="space-y-4">
                  <p>Refund eligibility shall remain limited to the actual order amount paid by the User.</p>
                  <p className="mb-2">Crevings shall not be liable for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>indirect losses,</li>
                    <li>emotional distress,</li>
                    <li>business loss,</li>
                    <li>personal dissatisfaction beyond verified operational issues.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Modifications</h2>
                <p className="mb-2">Crevings reserves the unrestricted right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>revise,</li>
                  <li>modify,</li>
                  <li>suspend,</li>
                  <li>update</li>
                </ul>
                <p className="mt-2">this Refund Policy at any time without prior notice.</p>
                <p>Updated policies become effective immediately upon publication on the platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="mb-4">For refund-related concerns or disputes:</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2"><span className="text-xl">📧</span> Email: <a href="mailto:support@crevings.com" className="text-primary-600 font-medium hover:underline">support@crevings.com</a></li>
                  <li className="flex items-center gap-2"><span className="text-xl">📱</span> WhatsApp: +91-XXXXXXXXXX</li>
                  <li className="flex items-center gap-2"><span className="text-xl">🌐</span> Website: www.crevings.com</li>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
