import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function DeliveryTermsPage() {
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
            Delivery Partner Terms of Service
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Last Updated: March 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              These Terms of Service govern the use of the Crevings Delivery Partner App ("App") operated by CREVINGS MARKETPLACE PRIVATE LIMITED ("Crevings", "we", "our", or "us").
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200">
              By registering as a delivery partner or using the Crevings Delivery Partner App, you agree to comply with these Terms of Service and all related policies of the platform.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Partner Eligibility</h2>
                <p className="mb-4">To register as a delivery partner on the Crevings platform, individuals must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Be 18 years of age or older</li>
                  <li>Provide valid identity verification documents</li>
                  <li>Provide accurate personal and banking information</li>
                  <li>Possess a valid driving license where required</li>
                  <li>Provide valid vehicle information for deliveries</li>
                </ul>
                <p>Crevings reserves the right to approve or reject partner registrations at its discretion.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Independent Contractor Relationship</h2>
                <p className="mb-4">Delivery partners operate as independent contractors and not as employees of Crevings.</p>
                <p className="mb-4 font-medium text-gray-900">This means:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Partners control their own working hours</li>
                  <li>Partners may choose when to accept or reject delivery requests</li>
                  <li>Partners are responsible for their own taxes and legal compliance</li>
                  <li>Crevings does not provide employment benefits unless explicitly stated</li>
                </ul>
                <p className="font-semibold text-gray-900">Nothing in these terms creates an employment, partnership, or agency relationship.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                <p className="mb-4">Delivery partners must create an account to use the platform.</p>
                <p className="mb-4 font-medium text-gray-900">Partners agree to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain updated personal and vehicle details</li>
                  <li>Protect account login credentials</li>
                  <li>Use only one personal account</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Sharing accounts or allowing another individual to use a partner account is strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Platform Usage</h2>
                <p className="mb-4">Delivery partners use the Crevings platform to accept and complete delivery orders.</p>
                <p className="mb-4 font-medium text-gray-900">Partners agree to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Follow platform procedures for order pickup and delivery</li>
                  <li>Deliver orders in a safe and responsible manner</li>
                  <li>Maintain professional conduct with customers and restaurants</li>
                  <li>Follow all applicable laws and traffic regulations</li>
                </ul>
                <p>Partners must also comply with all Crevings policies including the Code of Conduct and operational guidelines.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Earnings and Payments</h2>
                <p className="mb-4">Delivery partner earnings are determined based on completed deliveries and platform rules.</p>
                <p className="mb-4">Payment terms, payout schedules, and adjustments are described in the Earnings & Payout Policy.</p>
                <p>Partners are responsible for ensuring their bank details are correct for payout processing.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cash on Delivery Handling</h2>
                <p className="mb-4">For cash-on-delivery orders, delivery partners may temporarily hold cash collected from customers.</p>
                <p className="mb-4">Partners must settle outstanding balances according to platform rules.</p>
                <p>Crevings may restrict orders or adjust payouts if cash balances exceed the allowed floating limit.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Insurance and Benefits</h2>
                <p className="mb-4">Crevings may provide certain optional benefits to delivery partners including insurance coverage.</p>
                <p className="mb-4">These benefits may include health insurance, life insurance, vehicle coverage, or device protection where applicable.</p>
                <p>Eligibility, coverage, and claim procedures may be subject to separate policy terms and conditions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Prohibited Activities</h2>
                <p className="mb-4">Delivery partners must not engage in activities including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Fraudulent or fake order completion</li>
                  <li>GPS manipulation or location spoofing</li>
                  <li>Theft or misuse of customer payments</li>
                  <li>Food tampering or order theft</li>
                  <li>Harassment or abusive behavior</li>
                  <li>Use of fake identity documents</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Violation of these rules may result in suspension or permanent account deactivation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Account Suspension and Deactivation</h2>
                <p className="mb-4">Crevings may temporarily suspend or permanently deactivate partner accounts if policy violations occur.</p>
                <p className="mb-4 font-medium text-gray-900">Situations that may lead to suspension include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Fraudulent activity</li>
                  <li>Repeated customer complaints</li>
                  <li>Misuse of the platform</li>
                  <li>Violation of Code of Conduct or platform policies</li>
                </ul>
                <p>Crevings reserves the right to take appropriate action to maintain platform integrity.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <p className="mb-4">Crevings provides a technology platform that connects customers, restaurants, and delivery partners.</p>
                <p className="mb-4 font-medium text-gray-900">Crevings is not responsible for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Personal injury or accidents during deliveries</li>
                  <li>Vehicle damage or maintenance</li>
                  <li>Traffic violations by delivery partners</li>
                  <li>Loss or damage caused by misuse of the platform</li>
                </ul>
                <p className="font-semibold text-gray-900">Delivery partners are responsible for their own safety and legal compliance while performing deliveries.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Platform Monitoring</h2>
                <p className="mb-4">Crevings may monitor platform activity to maintain safety and prevent fraud.</p>
                <p className="mb-4 font-medium text-gray-900">This may include reviewing:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Delivery activity</li>
                  <li>GPS data</li>
                  <li>Order completion records</li>
                  <li>Platform usage behavior</li>
                </ul>
                <p>Such monitoring helps maintain service quality and security.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="mb-4">Crevings may update these Terms of Service from time to time.</p>
                <p className="mb-4">Updated terms will be communicated through the Crevings Delivery Partner App or official communication channels.</p>
                <p className="font-semibold text-gray-900">Continued use of the platform after updates indicates acceptance of the revised terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                <p className="mb-4">These Terms of Service shall be governed by the laws of India.</p>
                <p>Any disputes arising from the use of the platform shall fall under the jurisdiction of courts located in New Delhi, India.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
