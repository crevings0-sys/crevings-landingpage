import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function DeliveryPolicyPage() {
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
            Delivery & Order Handling Policy
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Last Updated: March 2026</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This policy outlines the responsibilities and procedures delivery partners must follow while accepting, picking up, and delivering orders through the Crevings Delivery Partner App.
            </p>
            
            <p className="mb-6">
              The goal of this policy is to ensure reliable, safe, and efficient deliveries for customers, restaurants, and delivery partners.
            </p>
            
            <p className="mb-12 pb-12 border-b border-gray-200">
              By using the Crevings Delivery Partner App, delivery partners agree to follow the guidelines described in this policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Accepting Delivery Requests</h2>
                <p className="mb-4">Delivery partners may receive delivery requests through the Crevings Delivery Partner App.</p>
                <p className="mb-4">Partners may choose to accept or decline delivery requests based on their availability.</p>
                <p className="mb-4">Once a delivery request is accepted, the partner is responsible for completing the order according to platform guidelines.</p>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Repeated acceptance of orders without completing deliveries may result in platform enforcement actions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Reaching the Restaurant</h2>
                <p className="mb-4">After accepting a delivery request, delivery partners should proceed to the assigned restaurant location promptly.</p>
                <p className="mb-4 font-medium text-gray-900">Partners should:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Navigate to the correct restaurant location shown in the app</li>
                  <li>Inform the restaurant staff about the order pickup</li>
                  <li>Wait for the order to be prepared if necessary</li>
                </ul>
                <p>Partners should avoid unnecessary delays after accepting an order.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Order Verification at Pickup</h2>
                <p className="mb-4">Before leaving the restaurant, delivery partners should verify the order details.</p>
                <p className="mb-4 font-medium text-gray-900">Partners should check:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Order number or pickup code</li>
                  <li>Number of packages or items</li>
                  <li>Proper packaging and sealing of the order</li>
                </ul>
                <p>If any issue is noticed, the partner should inform the restaurant or contact support before leaving.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Handling the Order</h2>
                <p className="mb-4">Delivery partners must handle food and packages carefully during transportation.</p>
                <p className="mb-4 font-medium text-gray-900">Partners should:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Keep the order safe and upright during transport</li>
                  <li>Avoid opening or tampering with the packaging</li>
                  <li>Use appropriate bags or carriers when necessary</li>
                </ul>
                <p className="font-semibold text-gray-900">Orders must not be consumed, altered, or damaged during delivery.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Delivering to the Customer</h2>
                <p className="mb-4">Delivery partners should deliver orders to the correct customer location shown in the app.</p>
                <p className="mb-4 font-medium text-gray-900">Partners should:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Navigate to the delivery address accurately</li>
                  <li>Contact the customer if assistance is required to locate the address</li>
                  <li>Confirm delivery before marking the order as completed</li>
                </ul>
                <p>Orders should only be marked as delivered after the order has been handed over to the customer.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Communication with Customers</h2>
                <p className="mb-4">Delivery partners may communicate with customers when necessary to complete a delivery.</p>
                <p className="mb-4 font-medium text-gray-900">Partners should:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Use respectful and professional language</li>
                  <li>Contact customers only for delivery-related communication</li>
                  <li>Avoid unnecessary calls or messages</li>
                </ul>
                <p className="font-semibold text-gray-900">Partners must not request additional payments outside the platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Handling Delivery Issues</h2>
                <p className="mb-4">If issues occur during a delivery, partners should follow platform procedures.</p>
                <p className="mb-4 font-medium text-gray-900">Examples include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Restaurant delays</li>
                  <li>Customer unreachable</li>
                  <li>Incorrect delivery address</li>
                  <li>Order packaging issues</li>
                </ul>
                <p>Partners should report such issues through the app or contact partner support when necessary.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Order Completion</h2>
                <p className="mb-4">An order should be marked as completed only after successful delivery to the customer.</p>
                <p className="mb-4 font-medium text-gray-900">Delivery partners must ensure:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The correct order is delivered</li>
                  <li>The customer receives the order</li>
                  <li>Any required delivery confirmation steps are completed</li>
                </ul>
                <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">Incorrect completion of orders may lead to platform enforcement actions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Safety During Deliveries</h2>
                <p className="mb-4">Delivery partners should prioritize safety while performing deliveries.</p>
                <p className="mb-4 font-medium text-gray-900">Partners should:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Follow traffic rules and local laws</li>
                  <li>Drive responsibly</li>
                  <li>Avoid unsafe driving practices while using the app</li>
                </ul>
                <p>Delivery partners are responsible for maintaining safe working conditions during deliveries.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
                <p className="mb-4">Crevings may update this Delivery & Order Handling Policy from time to time.</p>
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
