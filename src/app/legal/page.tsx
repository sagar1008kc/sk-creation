// pages/legal.tsx
'use client';

import React, { useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function LegalPage() {
    useEffect(() => {
        document.title = 'Legal | SMind Business LLC';
    }, []);

    return (
        <div className="bg-gray pt-[30px] bg-white">
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Page Title */}
                <div className="text-xl font-bold text-gray-900 mb-6">Legal Information</div>

                {/* All sections collapsed/expanded via Accordion */}
                <Accordion multiple activeIndex={[0]} className="bg-white shadow rounded-lg p-5">
                    
                    <AccordionTab header="Terms & Conditions" className="accordion-tab">
                        <div className="text-gray-700">
                            Effective Date: May 15, 2025. By using this site, you agree to these terms. All content on smindbusiness.com is owned by SMind Business LLC. You may view, download, and print pages for personal, non-commercial use only. Do not use the site for unlawful purposes or interfere with its security. SMind Business LLC is not liable for indirect, incidental, or consequential damages. These terms are governed by Texas law and may be updated at any time; continued use constitutes acceptance.
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Privacy Policy" className="accordion-tab">
                        <div className="text-gray-700">
                            Last updated May 15, 2025. We collect the personal data you provide (e.g., name, email) and usage data (IP address, cookies). We use it to operate and improve our services, send updates, and comply with legal obligations. We do not sell your data but may share it with trusted service providers under confidentiality agreements. To access, correct, or delete your data, email privacy@smindbusiness.com.
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Cookie Notice" className="accordion-tab">
                        <div className="text-gray-700">
                            We use cookies and similar technologies to enhance your experience and analyze site usage. By continuing to browse, you consent to our use of cookies as described in our Privacy Policy.
                        </div>
                    </AccordionTab>

                    <AccordionTab header="External Links" className="accordion-tab">
                        <div className="text-gray-700">
                            This site may link to third-party pages (e.g., your KDP book, Etsy shop, YouTube). SMind Business LLC does not endorse or assume responsibility for their content, privacy policies, or practices. You access them at your own risk.
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Service Disclaimer" className="accordion-tab">
                        <div className="text-gray-700">
                            Information about website design, deployment, and maintenance services is provided “as is” for general guidance only. Results, timelines, and deliverables may vary. SMind Business LLC disclaims all warranties regarding suitability, reliability, or availability. Clients are responsible for legal compliance and data protection.
                        </div>
                    </AccordionTab>

                    <AccordionTab header="General Disclaimer" className="accordion-tab">
                        <div className="text-gray-700">
                            All content on smindbusiness.com is for informational purposes only and does not constitute legal, financial, or professional advice. SMind Business LLC makes no warranties about accuracy or completeness and assumes no liability for errors or omissions.
                        </div>
                    </AccordionTab>
                </Accordion>

                {/* Footer Attribution */}
                <div className="text-sm text-gray-500 mt-8">
                If you have any questions, please contact us using the form below or via email.
                </div>
            </div>
        </div>
    );
}
