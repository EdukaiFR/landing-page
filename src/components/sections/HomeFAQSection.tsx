'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { ChevronDownIcon } from '@/components/icons';

const FAQ_COUNT = 4;

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Single FAQ accordion item.
 */
function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-base font-semibold text-neutral-900 md:text-lg">
          {question}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="font-inter text-sm leading-relaxed text-neutral-600 md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

/**
 * FAQ section for the homepage with condensed questions.
 */
export function HomeFAQSection() {
  const t = useTranslations('home.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-16 lg:py-20">
      <FadeIn className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="text-brand">{chunks}</span>
              ),
            })}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          {Array.from({ length: FAQ_COUNT }).map((_, index) => (
            <FAQItem
              key={index}
              question={t(`items.${index}.question`)}
              answer={t(`items.${index}.answer`)}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
