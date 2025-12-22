import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { GRADIENTS } from '@/styles';

interface ValueConfig {
  key: 'passion' | 'community' | 'excellence';
  iconSrc: string;
  gradient: string;
}

const VALUES: ValueConfig[] = [
  {
    key: 'passion',
    iconSrc: '/images/about/passion-icon.svg',
    gradient:
      'linear-gradient(135deg, rgb(251, 44, 54) 0%, rgb(246, 51, 154) 100%)',
  },
  {
    key: 'community',
    iconSrc: '/images/about/community-icon.svg',
    gradient:
      'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)',
  },
  {
    key: 'excellence',
    iconSrc: '/images/about/excellence-icon.svg',
    gradient:
      'linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(97, 95, 255) 100%)',
  },
];

/**
 * Values section showing company values.
 */
export function AboutValuesSection() {
  const t = useTranslations('aboutPage.values');

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="font-inter mb-12 text-center text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
          {t.rich('title', {
            highlight: (chunks) => (
              <span
                className="bg-clip-text"
                style={{
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: GRADIENTS.blueText,
                }}
              >
                {chunks}
              </span>
            ),
          })}
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.key}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div
                className="flex size-20 items-center justify-center rounded-2xl shadow-lg"
                style={{ backgroundImage: value.gradient }}
              >
                <Image
                  src={value.iconSrc}
                  alt=""
                  width={36}
                  height={36}
                  className="brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="font-inter mt-6 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                {t(`items.${value.key}.title`)}
              </h3>

              {/* Description */}
              <p className="font-inter mt-2 max-w-xs text-base leading-relaxed font-medium text-neutral-900/75">
                {t(`items.${value.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
