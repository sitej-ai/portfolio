'use client';

// @flow strict

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { certifications } from '@/utils/data/certifications';
import Image from 'next/image';
import Link from 'next/link';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = React.useState(null);

    React.useEffect(() => {
        if (!selectedCertificate) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedCertificate]);

    return (
        <section id="certifications" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                </div>
            </div>
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="h-[2px] w-16 bg-[#1a1443] sm:w-24"></span>
                    <span className="w-fit rounded-md bg-[#1a1443] p-2 px-4 text-xl text-white sm:px-5">Certifications</span>
                    <span className="h-[2px] w-16 bg-[#1a1443] sm:w-24"></span>
                </div>
            </div>

            {certifications.length === 0 ? (
                <div className="mx-auto max-w-2xl rounded-lg border border-dashed border-[#16f2b3]/30 bg-[#0d1224]/70 px-6 py-10 text-center">
                    <FaCertificate className="mx-auto mb-4 text-3xl text-[#16f2b3]" />
                    <h2 className="text-lg font-semibold text-white">Your certifications will appear here</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">Add your certificates in <span className="text-[#16f2b3]">utils/data/certifications.js</span>.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8">
                    {certifications.map((certificate) => (
                        <article key={certificate.id} className="group overflow-hidden rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] transition-all duration-500 hover:border-[#16f2b3]/60">
                            <div className="relative flex h-56 items-center justify-center border-b border-white/10 bg-[#070b20]">
                                {certificate.image ? (
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCertificate(certificate)}
                                        aria-label={`View ${certificate.title}`}
                                        className="relative block h-full w-full cursor-zoom-in text-left"
                                    >
                                        <Image src={certificate.image} alt={certificate.title} fill className="object-contain p-3" />
                                    </button>
                                ) : (
                                    <FaCertificate className="text-4xl text-[#16f2b3]" />
                                )}
                            </div>
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-lg font-semibold text-white">{certificate.title}</h2>
                                        <p className="mt-1 text-sm text-[#16f2b3]">{certificate.issuer}</p>
                                    </div>
                                    <span className="text-xs shrink-0 text-slate-500">{certificate.date}</span>
                                </div>
                                {certificate.credential && <p className="mt-4 text-xs text-slate-400">Credential: <span className="text-slate-200">{certificate.credential}</span></p>}
                                {certificate.link && <Link href={certificate.link} target="_blank" className="inline-flex items-center gap-2 mt-5 text-xs font-semibold tracking-wider text-pink-400 uppercase hover:text-pink-300"><FaExternalLinkAlt size={11} /> Verify certificate</Link>}
                            </div>
                        </article>
                    ))}
                </div>
            )}
            {selectedCertificate && typeof document !== 'undefined' && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedCertificate.title} image viewer`}
                >
                    <button
                        type="button"
                        onClick={() => setSelectedCertificate(null)}
                        aria-label="Close image"
                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#0d1224] text-2xl text-white transition hover:border-[#16f2b3] hover:text-[#16f2b3]"
                    >
                        &times;
                    </button>
                    <Image
                        src={selectedCertificate.image}
                        alt={`${selectedCertificate.title} full-size preview`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                    />
                </div>,
                document.body
            )}
        </section>
    );
}

export default Certifications;
