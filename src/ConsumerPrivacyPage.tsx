import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function ConsumerPrivacyPage() {
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
            Crevings Consumer Privacy Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Effective Date: 21 May 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This Privacy Policy explains how Crevings Marketplace Private Limited (“Crevings”, “Company”, “we”, “our”, or “us”) collects, uses, stores, processes, and protects personal information of users (“Users”, “Customers”, “you”) who access or use the Crevings platform, including mobile applications, websites, APIs, communication channels, and related services.
            </p>
            <p className="mb-12 pb-12 border-b border-gray-200">
              By using the Crevings platform, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">Crevings may collect the following categories of personal and usage-related information:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1 Personal Information</h3>
                    <p className="mb-2">During account registration, ordering, or use of services, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full Name</li>
                      <li>Mobile Number</li>
                      <li>Email Address</li>
                      <li>Date of Birth</li>
                      <li>Gender</li>
                      <li>Delivery Address</li>
                      <li>Saved Locations</li>
                      <li>Profile Picture (if uploaded)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2 Verification & Communication Information</h3>
                    <p className="mb-2">Your mobile number may be used for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>OTP verification</li>
                      <li>Login authentication</li>
                      <li>Delivery coordination</li>
                      <li>Order status updates</li>
                      <li>Refund and payment communication</li>
                      <li>Customer support communication</li>
                    </ul>
                    <p className="mt-4 mb-2">Crevings may send updates through:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>SMS</li>
                      <li>WhatsApp</li>
                      <li>RCS Messaging</li>
                      <li>Push Notifications</li>
                      <li>Phone Calls</li>
                      <li>Email</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.3 Payment & Transaction Information</h3>
                    <p className="mb-2">We may collect and process:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Order history</li>
                      <li>Payment transaction details</li>
                      <li>Refund records</li>
                      <li>Invoice and receipt information</li>
                      <li>Payment method metadata</li>
                    </ul>
                    <p className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700">
                      <strong>Note:</strong> Crevings does not directly store complete debit card, credit card, or UPI PIN information on its own servers. Payment processing may be handled through secure third-party payment gateways compliant with applicable regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1.4 Preference & Behavioral Data</h3>
                    <p className="mb-2">To improve user experience, recommendations, and platform performance, Crevings may analyze:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Preferred cuisines & Favorite restaurants</li>
                      <li>Order frequency</li>
                      <li>Daily, weekly, monthly, and yearly ordering behavior</li>
                      <li>Average order value</li>
                      <li>Food preferences</li>
                      <li>Search activity</li>
                      <li>Customer interaction patterns</li>
                      <li>Wishlist/saved items</li>
                      <li>Ratings and reviews</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">This information may be used to personalize recommendations, improve discovery, optimize offers, and enhance platform experience.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Device Permissions We Request</h2>
                <p className="mb-4">To provide platform functionality, Crevings may request the following permissions:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Location Access</h3>
                    <p className="mb-2">Used for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Delivery address detection</li>
                      <li>Nearby restaurant discovery</li>
                      <li>Real-time delivery tracking</li>
                      <li>Accurate order fulfillment</li>
                      <li>Distance-based logistics calculations</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">Location access may be collected in foreground while using the application.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Microphone Access</h3>
                    <p className="mb-2">Used for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Voice-based search</li>
                      <li>Voice communication features</li>
                      <li>In-app voice messages/chat features (if enabled)</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">Microphone access is used only when actively triggered by the user.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 Gallery / Storage Access</h3>
                    <p className="mb-2">Used for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Uploading profile pictures</li>
                      <li>Uploading photos/videos in reviews or support chats</li>
                      <li>Sharing media files within platform communication features</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">Crevings does not access unrelated personal media without user action.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.4 Push Notifications</h3>
                    <p className="mb-2">Used for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Order updates & Delivery tracking</li>
                      <li>Offers and promotions</li>
                      <li>Account-related alerts</li>
                      <li>Support communication</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">Users may disable notifications through device settings.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="mb-2">Crevings may use collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account creation and authentication</li>
                  <li>Order processing and fulfillment</li>
                  <li>Delivery coordination</li>
                  <li>Customer support</li>
                  <li>Refund and payment processing</li>
                  <li>Fraud prevention and platform security</li>
                  <li>Personalized restaurant and food recommendations</li>
                  <li>Marketing and promotional communication</li>
                  <li>Analytics and service improvement</li>
                  <li>Platform optimization and operational monitoring</li>
                  <li>Compliance with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing & Third Parties</h2>
                <div className="space-y-4">
                  <p>Crevings does not sell user personal data to third parties.</p>
                  <p>User data is not shared with external advertisers or unrelated third parties for commercial resale purposes.</p>
                  <p className="mb-2">However, limited operational information may be shared where necessary with:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Delivery partners for order fulfillment</li>
                    <li>Payment gateways for transaction processing</li>
                    <li>Government or legal authorities where legally required</li>
                  </ul>
                  <p>Such sharing is limited strictly to operational necessity and legal compliance.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <div className="space-y-4">
                  <p className="mb-2">Crevings implements reasonable technical, administrative, and security safeguards to protect user information from:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unauthorized access</li>
                    <li>Data misuse</li>
                    <li>Loss or destruction</li>
                    <li>Alteration</li>
                    <li>Disclosure</li>
                  </ul>
                  <p>While we strive to protect all data, no digital platform or internet transmission can be guaranteed to be completely secure.</p>
                  <p>Users are responsible for maintaining confidentiality of their login credentials and OTP access.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <div className="space-y-4">
                  <p className="mb-2">Crevings may retain user information for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Operational requirements</li>
                    <li>Legal compliance</li>
                    <li>Taxation and accounting obligations</li>
                    <li>Fraud prevention</li>
                    <li>Dispute resolution</li>
                    <li>Platform analytics</li>
                  </ul>
                  <p>Data may continue to be retained even after account inactivity where legally or operationally necessary.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Rights</h2>
                <div className="space-y-4">
                  <p className="mb-2">Users may request to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access their information</li>
                    <li>Update incorrect information</li>
                    <li>Delete certain personal information</li>
                    <li>Withdraw optional permissions</li>
                    <li>Opt out of marketing communication</li>
                  </ul>
                  <p>Certain data may still be retained where required under applicable laws or operational obligations.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p>Crevings services are not intended for individuals below the legally permitted age under applicable laws without parental or guardian supervision.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Policy Updates</h2>
                <div className="space-y-4">
                  <p>Crevings reserves the right to modify, revise, or update this Privacy Policy at any time.</p>
                  <p>Updated versions shall become effective upon publication on the platform.</p>
                  <p>Continued use of the platform after updates constitutes acceptance of revised terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="mb-4">For privacy-related concerns, support requests, or data-related queries:</p>
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
