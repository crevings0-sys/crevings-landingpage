import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function ConsumerTermsPage() {
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
            Crevings Consumer Terms & Conditions
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Effective Date: 21 May 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              These Terms & Conditions (“Terms”) govern the access, use, and interaction with the Crevings platform, including mobile applications, websites, APIs, communication channels, and related services operated by Crevings Marketplace Private Limited (“Crevings”, “Company”, “we”, “our”, or “us”).
            </p>
            <p className="mb-12 pb-12 border-b border-gray-200">
              By accessing or using the Crevings platform, you (“User”, “Customer”, “you”) acknowledge that you have read, understood, and agreed to be legally bound by these Terms.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definitions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1 “Platform”</h3>
                    <p>Refers to the Crevings mobile application, website, software systems, APIs, communication tools, and related digital infrastructure.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2 “User” or “Customer”</h3>
                    <p>Refers to any individual accessing or using the Crevings platform for ordering food, making payments, browsing restaurants, communicating with support, or availing related services.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.3 “Food Partner”</h3>
                    <p>Refers to restaurants, cafés, cloud kitchens, home chefs, bakeries, or any food-serving establishments listed on the Crevings platform.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.4 “Delivery Partner”</h3>
                    <p>Refers to independent riders or logistics partners responsible for delivery fulfillment.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                <div className="space-y-4">
                  <p>Users below the age of 18 may use the platform under the supervision, consent, or authorization of a parent or legal guardian.</p>
                  <p>By using the platform, the User confirms that all information provided during registration or ordering is accurate and lawful.</p>
                  <p>Crevings reserves the right to suspend or terminate accounts found using false, misleading, or fraudulent information.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration & Verification</h2>
                <div className="space-y-4">
                  <p><strong>3.1</strong> Users may be required to register using a valid mobile number and OTP verification.</p>
                  <p><strong>3.2</strong> Users are responsible for maintaining confidentiality of login credentials, OTPs, and account access.</p>
                  <p><strong>3.3</strong> Users shall be solely responsible for all activities conducted through their account.</p>
                  <p><strong>3.4</strong> Crevings reserves the right to refuse, restrict, suspend, or terminate accounts involved in suspicious, abusive, fraudulent, or unlawful activities.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Platform Services</h2>
                <div className="space-y-4">
                  <p>Crevings acts as a technology and logistics intermediary connecting Users with Food Partners and Delivery Partners.</p>
                  <p>Services may include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Food ordering</li>
                    <li>Food delivery</li>
                    <li>Takeaway ordering</li>
                    <li>Homemade food ordering</li>
                    <li>Restaurant discovery</li>
                    <li>Dine-in related services</li>
                    <li>Reservations (if applicable)</li>
                    <li>Customer support</li>
                    <li>Promotional and loyalty services</li>
                  </ul>
                  <p>Crevings does not directly prepare food unless explicitly stated otherwise.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Order Placement & Acceptance</h2>
                <div className="space-y-4">
                  <p><strong>5.1</strong> Orders placed through the platform are subject to acceptance and availability by the respective Food Partner.</p>
                  <p><strong>5.2</strong> Once an order is confirmed by the restaurant, cancellation eligibility may become limited depending on preparation status.</p>
                  <p><strong>5.3</strong> Estimated delivery times displayed on the platform are approximate and may vary due to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>traffic conditions</li>
                    <li>weather conditions</li>
                    <li>restaurant preparation delays</li>
                    <li>rider availability</li>
                    <li>operational issues</li>
                    <li>force majeure events</li>
                  </ul>
                  <p>Crevings does not guarantee exact delivery timelines.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pricing, Payments & Charges</h2>
                <div className="space-y-4">
                  <p><strong>6.1</strong> Prices displayed on the platform may include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>food item pricing</li>
                    <li>GST</li>
                    <li>packaging charges</li>
                    <li>delivery charges</li>
                    <li>platform fees</li>
                    <li>surge or operational charges (if applicable)</li>
                  </ul>
                  <p><strong>6.2</strong> Users agree to pay the full payable amount displayed during checkout.</p>
                  <p><strong>6.3</strong> Payment methods may include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>UPI</li>
                    <li>debit/credit cards</li>
                    <li>net banking</li>
                    <li>wallets</li>
                    <li>cash on delivery (where available)</li>
                  </ul>
                  <p><strong>6.4</strong> Crevings reserves the right to modify platform fees, delivery charges, or pricing structures without prior notice.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellation Policy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">7.1 User Cancellation</h3>
                    <p>Orders may only be canceled before the restaurant begins preparation or before rider assignment, subject to platform rules.</p>
                    <p>Once food preparation has started, cancellation requests may be denied fully or partially.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">7.2 Restaurant Cancellation</h3>
                    <p>In cases where the restaurant is unable to fulfill an order, the order may be canceled and eligible refunds processed as per applicable policy.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">7.3 Delivery-Related Cancellation</h3>
                    <p>Orders may also be canceled due to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>inability to contact customer</li>
                      <li>invalid address</li>
                      <li>repeated delivery failure</li>
                      <li>safety concerns</li>
                      <li>operational limitations</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Refund Policy</h2>
                <div className="space-y-4">
                  <p><strong>8.1</strong> Refund requests are subject to review, verification, and investigation.</p>
                  <p><strong>8.2</strong> Refunds may be provided in cases including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>failed payment with no order confirmation</li>
                    <li>undelivered orders</li>
                    <li>missing items</li>
                    <li>incorrect orders</li>
                    <li>duplicate payments</li>
                    <li>verified quality-related concerns</li>
                  </ul>
                  <p><strong>8.3</strong> Refund approval remains at the sole discretion of Crevings after internal verification.</p>
                  <p><strong>8.4</strong> Refund timelines may vary depending on payment provider, banking systems, and operational review.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. User Conduct & Prohibited Activities</h2>
                <div className="space-y-4">
                  <p>Users agree not to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>place fake or fraudulent orders</li>
                    <li>abuse refund systems</li>
                    <li>harass delivery partners, support staff, or restaurants</li>
                    <li>misuse coupons or promotional systems</li>
                    <li>manipulate platform pricing or technical systems</li>
                    <li>engage in unlawful or abusive conduct</li>
                    <li>create multiple fraudulent accounts</li>
                  </ul>
                  <p>Crevings reserves the right to suspend, restrict, or permanently terminate accounts involved in misuse or suspicious activities.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Delivery Terms</h2>
                <div className="space-y-4">
                  <p><strong>10.1</strong> Users must provide accurate addresses and reachable contact information.</p>
                  <p><strong>10.2</strong> Delivery Partners may contact Users for coordination related to order fulfillment.</p>
                  <p><strong>10.3</strong> If the User remains unreachable or unavailable during delivery attempts, the order may be canceled without refund eligibility in certain cases.</p>
                  <p><strong>10.4</strong> Delivery availability may vary depending on operational coverage and partner availability.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Promotions, Offers & Coupons</h2>
                <div className="space-y-4">
                  <p><strong>11.1</strong> Promotional offers, discounts, rewards, cashback, and coupons are subject to specific terms and may be modified or withdrawn at any time.</p>
                  <p><strong>11.2</strong> Crevings reserves the right to reject or invalidate offers in cases of misuse, fraud, or technical error.</p>
                  <p><strong>11.3</strong> Promotional campaigns may vary by location, user profile, restaurant, or operational conditions.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Intellectual Property</h2>
                <div className="space-y-4">
                  <p>All trademarks, branding, logos, designs, software systems, interfaces, graphics, and proprietary content associated with Crevings remain the exclusive intellectual property of the Company.</p>
                  <p>Users shall not reproduce, copy, distribute, reverse engineer, or commercially exploit any platform component without written authorization.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Limitation of Liability</h2>
                <div className="space-y-4">
                  <p>Crevings functions as a technology intermediary facilitating transactions between Users, Food Partners, and Delivery Partners.</p>
                  <p>Crevings shall not be held directly liable for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>food quality issues</li>
                    <li>restaurant preparation practices</li>
                    <li>allergic reactions</li>
                    <li>ingredient-related disputes</li>
                    <li>delays caused by external conditions</li>
                    <li>indirect or consequential losses</li>
                  </ul>
                  <p>Liability, where applicable, shall remain limited to the order value paid by the User.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Privacy & Data Usage</h2>
                <div className="space-y-4">
                  <p>Use of the platform is also governed by the Crevings Privacy Policy.</p>
                  <p>By using the platform, Users consent to collection and processing of relevant operational, transactional, and behavioral data necessary for service delivery, analytics, personalization, communication, and platform improvement.</p>
                  <p>Crevings does not sell personal user data to unrelated third parties.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Account Suspension & Termination</h2>
                <div className="space-y-4">
                  <p>Crevings reserves the unrestricted right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>suspend accounts</li>
                    <li>restrict platform access</li>
                    <li>cancel orders</li>
                    <li>block devices or payment methods</li>
                    <li>permanently terminate services</li>
                  </ul>
                  <p>where misuse, fraud, abusive conduct, suspicious activity, or legal violations are identified.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Force Majeure</h2>
                <div className="space-y-4">
                  <p>Crevings shall not be held liable for delays, interruptions, or failures caused by events beyond reasonable operational control including:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>natural disasters</li>
                    <li>floods</li>
                    <li>strikes</li>
                    <li>internet outages</li>
                    <li>government restrictions</li>
                    <li>riots</li>
                    <li>pandemics</li>
                    <li>power failures</li>
                    <li>transportation disruptions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Governing Law & Jurisdiction</h2>
                <div className="space-y-4">
                  <p>These Terms shall be governed by and interpreted under the laws of India.</p>
                  <p>Any disputes arising from these Terms shall fall under the exclusive jurisdiction of courts located in Delhi, India.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Information</h2>
                <p className="mb-4">For support, complaints, or legal communication:</p>
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
