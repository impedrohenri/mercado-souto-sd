import React from 'react';
import Link from 'next/link';

interface FeedbackLayoutProps {
    title: string;
    description: string;
    icon: React.ReactNode; 
    primaryActionText: string;
    primaryActionHref: string;
    secondaryActionText?: string;
    secondaryActionHref?: string;
    colorClass: string;
}

export const FeedbackLayout = ({
    title,
    description,
    icon,
    primaryActionText,
    primaryActionHref,
    secondaryActionText,
    secondaryActionHref,
    colorClass
}: FeedbackLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <main className="container mx-auto flex items-center justify-center p-6 mt-12">
                <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center gap-6">

                    <div className={`${colorClass} p-4 bg-gray-50 rounded-full`}>
                        {icon}
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            {description}
                        </p>
                    </div>


                    <div className="w-full pt-4 space-y-3">
                        <Link
                            href={primaryActionHref}
                            className="block w-full py-3.5 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-lg transition-colors text-center shadow-md active:scale-[0.98]"
                        >
                            {primaryActionText}
                        </Link>

                        {secondaryActionText && secondaryActionHref && (
                            <Link
                                href={secondaryActionHref}
                                className="block w-full py-3.5 px-6 bg-white hover:bg-gray-50 text-[#2563EB] font-medium rounded-lg transition-colors text-center border border-gray-200"
                            >
                                {secondaryActionText}
                            </Link>
                        )}
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                        Em caso de dúvidas, entre em contato com nosso suporte.
                    </p>
                </div>
            </main>
        </div>
    );
};