import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function CodeOfConductPage() {
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
            Code of Conduct Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Last Updated: March 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This Code of Conduct defines the behavior and professional standards expected from delivery partners using the Crevings Delivery Partner App.
            </p>
            
            <p className="mb-6">
              Delivery partners represent the Crevings platform while interacting with customers and restaurants. By using the Crevings Delivery Partner App, partners agree to follow the conduct guidelines described in this policy.
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200 text-red-600">
              Failure to follow these rules may result in warnings, temporary suspension, or permanent account deactivation.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Professional Behavior</h2>
                <p className="mb-4">Delivery partners must behave professionally at all times while using the platform.</p>
                <p className="mb-4 font-medium text-gray-900">Partners must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Treat customers and restaurant staff with respect</li>
                  <li>Maintain polite and professional communication</li>
                  <li>Follow reasonable instructions related to order pickup and delivery</li>
                  <li>Avoid arguments, abusive language, or threatening behavior</li>
                </ul>
                <p className="font-semibold text-gray-900">Any form of harassment, intimidation, or misconduct is strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Food Safety and Hygiene</h2>
                <p className="mb-4">Delivery partners are responsible for handling food orders safely and carefully.</p>
                <p className="mb-4 font-medium text-gray-900">Partners must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Deliver food without tampering with packaging</li>
                  <li>Keep food items in safe and hygienic conditions</li>
                  <li>Avoid opening, consuming, or altering customer orders</li>
                  <li>Ensure food items are transported responsibly</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Any attempt to tamper with customer orders may result in immediate account suspension.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Customer Interaction</h2>
                <p className="mb-4">Delivery partners must interact with customers in a respectful and responsible manner.</p>
                <p className="mb-4 font-medium text-gray-900">Partners must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Deliver orders to the correct customer</li>
                  <li>Confirm delivery when handing over the order</li>
                  <li>Communicate clearly if delays occur</li>
                  <li>Avoid unnecessary contact or personal interaction beyond the delivery</li>
                </ul>
                <p className="font-semibold text-gray-900">Partners must not request additional money from customers outside the app.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Restaurant Interaction</h2>
                <p className="mb-4">Delivery partners must maintain professional conduct while interacting with restaurant staff.</p>
                <p className="mb-4 font-medium text-gray-900">Partners must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Follow restaurant pickup procedures</li>
                  <li>Avoid arguments or disruptive behavior</li>
                  <li>Wait in designated pickup areas where applicable</li>
                  <li>Confirm order details before leaving the restaurant</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Account Usage</h2>
                <p className="mb-4">Delivery partner accounts are personal and must not be shared.</p>
                <p className="mb-4 font-medium text-gray-900">Partners must not:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Allow another person to use their account</li>
                  <li>Use fake identity documents</li>
                  <li>Provide incorrect personal or vehicle information</li>
                  <li>Create multiple accounts</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Any misuse of accounts may lead to permanent deactivation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Safety and Legal Compliance</h2>
                <p className="mb-4">Delivery partners must follow all applicable laws and safety guidelines while performing deliveries.</p>
                <p className="mb-4 font-medium text-gray-900">Partners must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Follow traffic rules and local laws</li>
                  <li>Carry valid driving license and vehicle documents</li>
                  <li>Use safe driving practices</li>
                  <li>Avoid driving under the influence of alcohol or drugs</li>
                </ul>
                <p>Crevings is not responsible for violations of traffic laws by delivery partners.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Fraud and Misconduct</h2>
                <p className="mb-4 font-medium text-gray-900">The following activities are strictly prohibited:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Fake order completion</li>
                  <li>GPS manipulation or location spoofing</li>
                  <li>Collusion with restaurants or customers for fraudulent orders</li>
                  <li>Misuse of cash collected from customers</li>
                  <li>Intentional delays or misuse of platform systems</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Such activities may result in permanent account termination and recovery of losses.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Platform Integrity</h2>
                <p className="mb-4">Delivery partners must use the Crevings platform honestly and responsibly.</p>
                <p className="mb-4">Partners must not attempt to manipulate orders, earnings, or system features.</p>
                <p>Crevings reserves the right to monitor platform activity to maintain service quality and prevent abuse.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Violations and Enforcement</h2>
                <p className="mb-4">If a delivery partner violates this Code of Conduct, Crevings may take actions including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Warning or notice</li>
                  <li>Temporary suspension</li>
                  <li>Permanent account deactivation</li>
                  <li>Recovery of financial losses caused by misconduct</li>
                </ul>
                <p>The severity of action will depend on the nature of the violation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
                <p className="mb-4">Crevings may update this Code of Conduct from time to time.</p>
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
