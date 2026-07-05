import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function FoodRefundPolicyPage() {
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
            Food Partner Refund Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Effective Date: 11 November 2025</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This document outlines the official Refund Policy of CREVINGS MARKETPLACE PRIVATE LIMITED (hereinafter referred to as the "Company," "we," "us," or "our").
            </p>
            <p className="mb-4">
              It governs refund eligibility, conditions, and procedures applicable to payments made directly by registered Food Partners ("Partner," "you," or "your") to the Company through the Crevings Partner Platform, online payment gateway, or any official Crevings billing channel.
            </p>
            <p className="mb-8 p-4 bg-gray-50 border border-gray-100 rounded-lg text-gray-700">
              This Policy does not apply to any order-related refunds, adjustments, or disputes arising from the Crevings Consumer App or customer transactions. Such matters are exclusively governed by the Crevings Payout and Settlement Policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope and Applicability</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1. Applicable Payments</h3>
                    <p className="mb-2">This Refund Policy applies strictly to payments made by Partners to Crevings for the following categories:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Monthly or recurring subscription fees</li>
                      <li>Ad Wallet top-ups and other advertising credits</li>
                      <li>Add-ons or feature activations within the Partner Platform</li>
                      <li>Software or hardware purchases made directly from Crevings</li>
                      <li>Food material or merchandise procured from Crevings for Partner use</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2. Acknowledgment</h3>
                    <p>By onboarding as a Crevings Food Partner and making such payments, you expressly acknowledge and agree to the terms of this Refund Policy.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. General Principle</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All payments made by Food Partners to the Company are non-refundable, except in cases explicitly defined within this Policy.</li>
                  <li>Refunds shall be processed only where a verified failure or error is directly attributable to Crevings' systems, operations, or internal processes.</li>
                  <li>Voluntary purchases, activations, or top-ups initiated successfully by Partners are not eligible for refund unless otherwise specified herein.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligible Scenarios for Refund</h2>
                <p className="mb-6">Refunds may be issued only under the following circumstances, subject to internal verification and approval:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1. Duplicate Payment</h3>
                    <p>If a Partner is inadvertently charged twice for the same transaction, subscription, or service, the duplicate amount shall be refunded.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2. Failed Transaction (Technical Error)</h3>
                    <p>If a payment was deducted but not successfully reflected in the Partner's Crevings Account or Wallet due to a confirmed system or gateway failure.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3. Service Non-Activation</h3>
                    <p>If a purchased feature (e.g., subscription plan, ad wallet, or add-on) was not activated or made accessible due to a technical or operational issue within Crevings' control, and the Partner notifies Crevings within seven (7) days of payment.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Transactions</h2>
                <p className="mb-4">The following payment types are strictly non-refundable under all circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Successfully activated subscriptions or plans</li>
                  <li>Voluntary wallet top-ups made by Partners</li>
                  <li>Ad campaigns or promotions that have begun, even partially</li>
                  <li>Refund requests initiated after seven (7) days from the date of payment</li>
                  <li>Purchases of hardware, merchandise, or food material once delivered or collected</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Request Procedure</h2>
                <p className="mb-4">To initiate a refund request, Partners must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Contact their assigned Relationship Manager, or</li>
                  <li>Email <b>support@crevings.com</b> with the subject line: "Refund Request – [Restaurant Name]"</li>
                </ul>
                <p className="mb-4">Each request must include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proof of payment (transaction ID, payment date, and amount)</li>
                  <li>Description of the issue and justification for refund</li>
                  <li>Supporting documents or screenshots as evidence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Processing and Timelines</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1. Acknowledgement</h3>
                    <p>Crevings shall acknowledge refund requests within three (3) working days of receipt.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2. Investigation</h3>
                    <p>A detailed review shall be completed within seven (7) to ten (10) working days.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.3. Refund Execution</h3>
                    <ul className="list-disc pl-6 mb-2 space-y-1">
                      <li>Approved refunds will be processed within five (5) to seven (7) business days thereafter.</li>
                      <li>Refunds shall be made via the original payment method or credited to the Partner's Crevings Wallet, as applicable.</li>
                    </ul>
                    <p className="text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">Note: In genuine cases, most Partners receive refunds within one (1) to three (3) working days of approval.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Wallet Balance and Ad Credits</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7.1 Funds added to the Partner Ad Wallet are treated as advance credits for future Crevings services, specifically advertising and marketing campaigns.</li>
                  <li>7.2 Once utilized (even partially), wallet credits are not eligible for refund or reversal.</li>
                  <li>7.3 However, if no portion of the wallet amount has been used within seven (7) days of top-up, the Partner may request a full refund, subject to verification.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">8.1. Escalation Process</h3>
                    <p className="mb-2">In case of disagreement or dissatisfaction with a refund outcome, the Partner may escalate the matter to:</p>
                    <p className="font-medium text-primary-600">📧 legal@crevings.com</p>
                    <p>with the subject line: "Refund Appeal – [Restaurant Name]"</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">8.2. Final Decision</h3>
                    <p>All such appeals will be reviewed by the Crevings Partner Operations and Legal Team. The decision of Crevings on such matters shall be final and binding.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Policy Updates and Notification</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>9.1 The Company reserves the right to modify, amend, or replace this Refund Policy at any time without prior notice.</li>
                  <li>9.2 The latest version will always be accessible through the Crevings Partner Portal.</li>
                  <li>
                    9.3 Notification of Updates: Whenever this Policy is updated, all active Food Partners will be informed via:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Push notification in the Partner App</li>
                      <li>WhatsApp message</li>
                      <li>Official email communication</li>
                    </ul>
                  </li>
                  <li>9.4 Continued use of Crevings' services following such updates constitutes acceptance of the revised Refund Policy.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="mb-4">For all refund or billing-related queries:</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2"><span className="text-xl">📧</span> <a href="mailto:support@crevings.com" className="text-primary-600 font-medium">support@crevings.com</a></li>
                  <li className="flex items-center gap-2"><span className="text-xl">📞</span> Partner Helpline (available in Partner App under Help & Support)</li>
                </ul>
                <p className="mt-8 text-sm text-gray-500 font-medium border-t border-gray-100 pt-4">Last updated: 11 November 2025</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
