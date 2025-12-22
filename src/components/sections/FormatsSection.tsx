import Image from 'next/image';

import { useTranslations } from 'next-intl';

interface FormatItem {
  src: string;
  alt: string;
}

const FORMATS_ROW_1: FormatItem[] = [
  { src: '/images/features-page/format-pdf.png', alt: 'PDF' },
  { src: '/images/features-page/format-word.png', alt: 'Word' },
  { src: '/images/features-page/format-image.png', alt: 'Images' },
];

const FORMATS_ROW_2: FormatItem[] = [
  { src: '/images/features-page/format-excel.png', alt: 'Excel' },
  { src: '/images/features-page/format-text.png', alt: 'Texte' },
  { src: '/images/features-page/format-ppt.png', alt: 'PowerPoint' },
];

/**
 * Formats section showing all supported file formats.
 * Displays headline and grid of format icons.
 */
export function FormatsSection() {
  const t = useTranslations('featuresPage.formats');

  return (
    <section className="flex flex-col items-center gap-10 px-4 py-12 md:gap-14 md:py-16 lg:py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center md:gap-6">
        <h2 className="font-inter max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl xl:text-[77px] xl:leading-[1.2]">
          {t.rich('title', {
            highlight: (chunks) => (
              <span className="text-brand block">{chunks}</span>
            ),
          })}
        </h2>
        <p className="font-inter text-neutral-light max-w-3xl text-base tracking-tight md:text-lg lg:text-xl">
          {t.rich('subtitle', {
            bold: (chunks) => <span className="font-bold">{chunks}</span>,
          })}
        </p>
      </div>

      {/* Formats Grid */}
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Row 1 */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {FORMATS_ROW_1.map((format) => (
            <div
              key={format.alt}
              className="relative overflow-hidden rounded-2xl shadow-sm transition-transform hover:scale-105"
            >
              <Image
                src={format.src}
                alt={format.alt}
                width={232}
                height={157}
                className="h-auto w-40 object-cover md:w-48 lg:w-56"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {FORMATS_ROW_2.map((format) => (
            <div
              key={format.alt}
              className="relative overflow-hidden rounded-2xl shadow-sm transition-transform hover:scale-105"
            >
              <Image
                src={format.src}
                alt={format.alt}
                width={232}
                height={157}
                className="h-auto w-40 object-cover md:w-48 lg:w-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
