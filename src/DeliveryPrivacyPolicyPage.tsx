import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function DeliveryPrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Last Updated: March 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This Privacy Policy explains how CREVINGS MARKETPLACE PRIVATE LIMITED ("Crevings", "we", "our", or "us") collects, uses, stores, and protects the personal information of delivery partners using the Crevings Delivery Partner Application ("App").
            </p>
            
            <p className="mb-6">
              This policy applies only to delivery partners who register and use the Crevings Delivery Partner App.
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200">
              By registering as a delivery partner or using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Company Information</h2>
                <p className="mb-2"><span className="font-semibold text-gray-900">Company Name:</span> CREVINGS MARKETPLACE PRIVATE LIMITED</p>
                <p className="mb-2"><span className="font-semibold text-gray-900">Brand Name:</span> CREVINGS</p>
                <p className="mb-2"><span className="font-semibold text-gray-900">Registered Address:</span><br />
                  Innov8, Lower Ground Floor,<br />
                  Saket Salcon, Rasvilas,<br />
                  Next to Select Citywalk Mall,<br />
                  Saket District Centre, District Centre,<br />
                  Sector 6, Pushp Vihar,<br />
                  New Delhi, Delhi 110017, India
                </p>
                <p className="mb-2"><span className="font-semibold text-gray-900">Website:</span> www.crevings.com</p>
                <p className="mb-2"><span className="font-semibold text-gray-900">Support Email:</span> help@crevings.com</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="mb-6">We collect information necessary to onboard delivery partners, operate deliveries, process payouts, and maintain platform safety.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Personal Information</h3>
                <p className="mb-3">When you create a delivery partner account, we may collect:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Full Name</li>
                  <li>Mobile Phone Number</li>
                  <li>Email Address</li>
                  <li>Profile Photograph</li>
                  <li>Date of Birth</li>
                  <li>Selfie Verification</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Identity Verification (KYC)</h3>
                <p className="mb-3">To verify identity and comply with regulatory requirements, we may collect:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Aadhaar Card</li>
                  <li>PAN Card</li>
                  <li>Driving License</li>
                  <li>Selfie Verification Photo</li>
                </ul>
                <p className="mb-6">These documents are used only for identity verification and fraud prevention.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Vehicle Information</h3>
                <p className="mb-3">To enable deliveries, we may collect:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Vehicle Type</li>
                  <li>Vehicle Brand and Model</li>
                  <li>Vehicle Registration Number</li>
                  <li>Vehicle Registration Certificate (RC)</li>
                  <li>Driving License Details</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">2.4 Financial Information</h3>
                <p className="mb-3">For processing delivery earnings and payouts, we may collect:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Bank Name</li>
                  <li>Account Holder Name</li>
                  <li>Bank Account Number</li>
                  <li>IFSC Code</li>
                  <li>UPI ID</li>
                  <li>PAN (for tax compliance)</li>
                </ul>
                <p className="mb-6">Payments are processed via direct bank transfer.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">2.5 Location Data</h3>
                <p className="mb-3">The Crevings Delivery Partner App collects location data including:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Real-time GPS location during deliveries</li>
                  <li>Background location data when the partner is online</li>
                  <li>Location data used for order assignment, navigation, and delivery verification</li>
                </ul>
                <p className="mb-6">Location tracking may continue while the partner is active on the platform.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">2.6 Device Information</h3>
                <p className="mb-3">We may automatically collect certain device information including:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Device Model</li>
                  <li>Operating System Version</li>
                  <li>Device Identifier</li>
                  <li>IP Address</li>
                  <li>App Usage Data</li>
                </ul>
                <p className="mb-6">This information helps us maintain platform security and improve performance.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Permissions Used in the App</h2>
                <p className="mb-4">The Crevings Delivery Partner App may request the following device permissions:</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900">Location</h4>
                    <p>Used to track deliveries, assign orders, and verify delivery completion.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Camera</h4>
                    <p>Used for profile photo uploads, document verification, and selfie verification.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Storage / Files</h4>
                    <p>Used for uploading documents such as RC, driving license, or identity verification.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone Calls</h4>
                    <p>Used to allow delivery partners to contact customers or restaurants.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Notifications</h4>
                    <p>Used to send order alerts, payout updates, and important service announcements.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
                <p className="mb-4">We use delivery partner information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Create and manage delivery partner accounts</li>
                  <li>Verify identity and prevent fraud</li>
                  <li>Assign and manage delivery orders</li>
                  <li>Process delivery earnings and payouts</li>
                  <li>Provide customer and restaurant communication</li>
                  <li>Enable insurance coverage for delivery partners</li>
                  <li>Improve platform safety and service quality</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing</h2>
                <p className="mb-6">We may share limited information with third parties when necessary to operate the platform.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 Customers</h3>
                <p className="mb-3">Customers may see limited delivery partner information such as:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Delivery Partner Name</li>
                  <li>Phone Number</li>
                  <li>Live Delivery Location (during delivery)</li>
                </ul>
                <p className="mb-6">This allows customers to coordinate deliveries.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 Restaurants</h3>
                <p className="mb-3">Restaurants may access limited delivery partner details for order coordination including:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Delivery Partner Name</li>
                  <li>Contact Number</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">5.3 Insurance Partners</h3>
                <p className="mb-3">Crevings provides insurance benefits including:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>₹1,00,000 Health Insurance</li>
                  <li>₹1,00,000 Life Insurance</li>
                  <li>₹1,00,000 Vehicle Coverage</li>
                  <li>₹10,000 Phone Protection</li>
                </ul>
                <p className="mb-3">For providing these benefits, delivery partner information may be shared with our insurance partner:</p>
                <p className="mb-3 font-semibold text-gray-900">Insurance Provider: ACKO</p>
                <p className="mb-6">Information shared may include identity details necessary for insurance enrollment and claims.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">5.4 Legal and Regulatory Authorities</h3>
                <p className="mb-3">We may disclose information when required by law or when requested by:</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Government Authorities</li>
                  <li>Law Enforcement Agencies</li>
                  <li>Regulatory Bodies</li>
                </ul>
                <p className="mb-6">This may occur to comply with legal obligations, investigations, or fraud prevention.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Storage</h2>
                <p className="mb-3">Delivery partner data is securely stored using cloud infrastructure provided by:</p>
                <p className="mb-3 font-semibold text-gray-900">Amazon Web Services (AWS)</p>
                <p className="mb-4">We implement reasonable security measures to protect data from unauthorized access, misuse, or disclosure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="mb-4">If a delivery partner requests account deletion:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>A 48-hour waiting period is provided.</li>
                  <li>If the partner logs back into the app within this period, the deletion request is automatically cancelled.</li>
                  <li>If the partner does not log back in within 48 hours, the deletion process continues.</li>
                  <li>Delivery partner data may be permanently removed within 1 month of the confirmed deletion request, except where retention is required for legal or regulatory purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Eligibility</h2>
                <p className="mb-4">To register as a delivery partner, individuals must be 18 years of age or older.</p>
                <p className="mb-4">Crevings does not knowingly allow individuals under 18 to register as delivery partners.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security</h2>
                <p className="mb-4">We take reasonable steps to protect personal information including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Secure cloud infrastructure</li>
                  <li>Access control systems</li>
                  <li>Internal data protection practices</li>
                </ul>
                <p className="mb-4">However, no system can guarantee complete security, and users should also protect their account credentials.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="mb-4">Crevings may update this Privacy Policy from time to time.</p>
                <p className="mb-4">When updates occur, the revised policy will be published within the application or on the website.</p>
                <p className="font-semibold text-gray-900 mb-4">Continued use of the platform after changes indicates acceptance of the updated policy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="mb-4">For privacy-related questions, complaints, or requests, delivery partners may contact:</p>
                <p className="mb-2"><span className="font-semibold text-gray-900">Email:</span> help@crevings.com</p>
                <p className="mb-2"><span className="font-semibold text-gray-900">Email Subject Format:</span><br />Delivery Partner – (Problem Description)</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
