import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function FoodListingGuidancePage() {
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
            Crevings Food Partner Listing Guidance
          </h1>
          
          <p className="text-gray-500 mb-12 font-medium">Effective Date: 11 November 2025</p>

          <div className="prose prose-lg prose-primary max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              This document constitutes the official Crevings Food Partner Listing Guidance issued by CREVINGS MARKETPLACE PRIVATE LIMITED (hereinafter referred to as the “Company,” “we,” “us,” or “our”).
            </p>
            <p className="mb-4">
              It defines the mandatory visual, pricing, and representational standards that all Food Partners (“Partner,” “you,” or “your”) must adhere to when publishing or maintaining menu listings, imagery, or price information on the Crevings Partner Platform (“Platform”).
            </p>
            <p className="mb-12 pb-12 border-b border-gray-200">
              These guidelines are issued in furtherance of maintaining authenticity, fair pricing, and consumer trust within the Crevings ecosystem.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose and Scope</h2>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>1.1.</strong> This Guidance applies to all Food Partners, restaurants, cloud kitchens, cafés, and other merchant entities listed on the Crevings Platform.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>1.2.</strong> Compliance with this Guidance is a binding condition of continued listing on the Crevings App and associated Partner interfaces.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>1.3.</strong> The provisions herein govern:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Visual and media content standards</li>
                      <li>Pricing and verification procedures</li>
                      <li>Authenticity and transparency obligations</li>
                      <li>Enforcement and delisting actions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Image and Media Guidelines</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1. Prohibition on AI or Stock Imagery</h3>
                    <p className="mb-2">Partners are strictly prohibited from using:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>AI-generated food images</li>
                      <li>Images sourced or downloaded from Google, stock image providers, or other third-party websites.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2. Use of Original Food Photography</h3>
                    <p>All images uploaded to the Crevings Platform must depict the actual food prepared by the Partner’s establishment. Images should be current, clear, and representative of the real dish offered to customers.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3. Permitted Editing and Enhancements</h3>
                    <p className="mb-2">Partners may utilize AI tools or editing software solely for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Background cleanup or replacement</li>
                      <li>Lighting, exposure, or color correction</li>
                    </ul>
                    <p className="mt-2 text-sm bg-gray-50 border border-gray-100 p-3 rounded-lg">Such edits must not distort, exaggerate, or misrepresent the true appearance, quantity, or presentation of the food.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.4. Authorized Photography Support</h3>
                    <p className="mb-2">Partners are encouraged to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Engage professional photo studios to capture their menu items; or</li>
                      <li>Request the Crevings Studio Team to conduct on-site food photography.</li>
                    </ul>
                    <p className="mt-2 text-sm">All such sessions shall comply with Crevings’ branding and authenticity standards.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.5. Prohibition of Misleading Visual Representation</h3>
                    <p>Depicting garnishes, ingredients, or packaging not included in the actual order offering constitutes visual misrepresentation and may lead to immediate corrective action or delisting.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Menu and Pricing Standards</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1. Price Parity Obligation</h3>
                    <p>Crevings follows a 0% commission model; therefore, all menu prices listed on the Platform must be identical to the Partner’s offline prices.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2. Mandatory Menu Upload for Verification</h3>
                    <p>During onboarding, Partners must upload a clear image or PDF of their physical menu card(s) for internal verification and price validation.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3. Price Change Protocol</h3>
                    <p className="mb-2">Partners seeking to modify item prices must contact the Crevings Partner Support Team.</p>
                    <p className="mb-2">Price updates will be permitted only if:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>The Partner has formally updated its offline (physical) menu cards, and</li>
                      <li>The revised pricing is supported by valid documentation or updated menu imagery.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4. Menu Authenticity and Currency</h3>
                    <p>All menu items must reflect actual availability. Listing items not currently available for sale is strictly prohibited. Repeated false listings may result in suspension.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content Ownership and Representation</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1. Ownership Declaration</h3>
                    <p>By uploading any content (images, videos, descriptions, or menus), the Partner declares that they own or have legal rights to use such content and that it does not infringe any third-party copyrights or licenses.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2. License to Crevings</h3>
                    <p>Partners grant Crevings a limited, non-exclusive, royalty-free license to use, reproduce, and display uploaded content on its digital platforms and marketing materials solely for the purpose of promoting the Partner’s offerings.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3. Misuse or Unauthorized Content</h3>
                    <p className="mb-2">Uploading plagiarized, copyrighted, or third-party-owned visuals without authorization may result in:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Immediate content removal</li>
                      <li>Temporary suspension or permanent delisting</li>
                      <li>Potential liability under applicable copyright laws.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Quality and Hygiene Representation</h2>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>5.1.</strong> Partners shall ensure that images accurately represent the portion size, packaging, and plating standards offered to customers.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>5.2.</strong> Food descriptions (veg/non-veg classification, spice level, ingredients, allergens, etc.) must be truthful and comply with FSSAI regulations.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>5.3.</strong> Misleading, exaggerated, or deceptive claims (e.g., “100% organic,” “zero calories”) without substantiation are strictly prohibited.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Enforcement, Warnings, and Delisting</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1. Corrective Action Procedure</h3>
                    <p className="mb-2">If any Partner violates these guidelines, the Company will:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Issue a formal warning and allow a reasonable window to correct the issue;</li>
                      <li>Provide limited support to rectify the listing, if feasible.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2. Persistent Violations</h3>
                    <p className="mb-2">Continued non-compliance or repeated infractions may result in:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Temporary suspension of listings, or</li>
                      <li>Permanent delisting from the Crevings Platform without further notice.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.3. Fraudulent Representation Clause</h3>
                    <p>Any intentional attempt to mislead customers or falsify menu listings shall be deemed a material breach of Partner Agreement, inviting immediate termination and possible legal recourse.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Amendments and Communication</h2>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>7.1.</strong> The Company reserves the right to revise or expand this Listing Guidance periodically to reflect operational, legal, or marketplace developments.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>7.2. Notification of Updates:</strong></p>
                    <p className="mb-2">Whenever this Guidance is updated, all registered Food Partners shall be informed via:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Push notifications in the Partner App</li>
                      <li>Official WhatsApp communication</li>
                      <li>Email notice to the registered Partner email address.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>7.3.</strong> Continued use of the Platform constitutes acceptance of the updated Guidance.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact and Support</h2>
                <p className="mb-4">For assistance or to report a compliance concern, contact:</p>
                <p className="flex items-center gap-2"><span className="text-xl">📧</span> <a href="mailto:support@crevings.com" className="text-primary-600 font-medium">support@crevings.com</a></p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
