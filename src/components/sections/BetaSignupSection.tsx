'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CheckIcon } from '@/components/icons';

type StudentType = 'college' | 'lycee' | 'superieur' | 'autre';

interface FormData {
  firstName: string;
  email: string;
  studentType: StudentType | '';
}

interface FormErrors {
  firstName?: string;
  email?: string;
}

/**
 * Beta signup section with a modern, animated form.
 * Features floating labels, micro-interactions, and success state.
 */
export function BetaSignupSection() {
  const t = useTranslations('home.betaSignup');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    studentType: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const studentTypes: { value: StudentType; label: string }[] = [
    { value: 'college', label: t('form.studentTypes.college') },
    { value: 'lycee', label: t('form.studentTypes.lycee') },
    { value: 'superieur', label: t('form.studentTypes.superieur') },
    { value: 'autre', label: t('form.studentTypes.autre') },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('form.errors.firstNameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.errors.emailInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log form data (to be replaced with actual API call)
    console.log('Beta signup form submitted:', {
      firstName: formData.firstName,
      email: formData.email,
      studentType: formData.studentType || 'non spécifié',
      submittedAt: new Date().toISOString(),
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <section id="beta" className="px-4 py-16 md:py-24">
        <FadeIn className="mx-auto max-w-2xl">
          <div className="from-brand/5 relative overflow-hidden rounded-3xl bg-gradient-to-br via-blue-50 to-white p-8 text-center shadow-xl md:p-12">
            {/* Success animation */}
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
                <CheckIcon className="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 className="font-inter mb-3 text-2xl font-bold text-neutral-900 md:text-3xl">
              {t('success.title')}
            </h3>
            <p className="font-inter mb-2 text-lg text-neutral-700">
              {t('success.subtitle', { name: formData.firstName })}
            </p>
            <p className="font-inter text-neutral-500">
              {t('success.description')}
            </p>

            {/* Decorative elements */}
            <div className="from-brand/20 absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br to-transparent blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent blur-2xl" />
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section id="beta" className="px-4 py-16 md:py-24">
      <FadeIn className="mx-auto max-w-5xl">
        <div className="from-brand relative overflow-hidden rounded-3xl bg-gradient-to-br via-blue-600 to-blue-700 p-8 shadow-2xl md:p-12 lg:p-16">
          {/* Background decorations */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-white/5" />
          <div className="absolute bottom-20 left-20 h-12 w-12 rounded-full bg-white/5" />

          <StaggerContainer
            className="relative grid gap-10 lg:grid-cols-2 lg:gap-16"
            staggerDelay={0.15}
          >
            {/* Left side - Content */}
            <StaggerItem
              direction="left"
              className="flex flex-col justify-center"
            >
              <span className="font-inter mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                {t('badge')}
              </span>

              <h2 className="font-inter mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {t('title')}
              </h2>

              <p className="font-inter mb-8 text-lg text-white/80 md:text-xl">
                {t('subtitle')}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-inter text-white/90">
                      {t(`benefits.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mascot */}
              <div className="mt-8 hidden lg:block">
                <Image
                  src="/brand/LOGO - Edukai v2.svg"
                  alt="Edukai mascot"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white"
                />
              </div>
            </StaggerItem>

            {/* Right side - Form */}
            <StaggerItem direction="right" className="relative">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-xl md:p-8"
              >
                <h3 className="font-inter mb-6 text-xl font-semibold text-neutral-900">
                  {t('form.title')}
                </h3>

                {/* First Name Field */}
                <div className="relative mb-5">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                    className={`font-inter peer w-full rounded-xl border-2 bg-gray-50 px-4 pt-6 pb-2 text-base text-neutral-900 transition-all outline-none placeholder:text-transparent focus:bg-white ${
                      errors.firstName
                        ? 'border-red-300 focus:border-red-500'
                        : 'focus:border-brand border-gray-200'
                    }`}
                    placeholder={t('form.firstName')}
                  />
                  <label
                    htmlFor="firstName"
                    className={`font-inter pointer-events-none absolute top-4 left-4 origin-left text-base transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 ${
                      formData.firstName ? '-translate-y-2.5 scale-75' : ''
                    } ${
                      errors.firstName
                        ? 'text-red-500'
                        : focusedField === 'firstName'
                          ? 'text-brand'
                          : 'text-neutral-500'
                    }`}
                  >
                    {t('form.firstName')}
                  </label>
                  {errors.firstName && (
                    <p className="font-inter mt-1.5 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative mb-5">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`font-inter peer w-full rounded-xl border-2 bg-gray-50 px-4 pt-6 pb-2 text-base text-neutral-900 transition-all outline-none placeholder:text-transparent focus:bg-white ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'focus:border-brand border-gray-200'
                    }`}
                    placeholder={t('form.email')}
                  />
                  <label
                    htmlFor="email"
                    className={`font-inter pointer-events-none absolute top-4 left-4 origin-left text-base transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 ${
                      formData.email ? '-translate-y-2.5 scale-75' : ''
                    } ${
                      errors.email
                        ? 'text-red-500'
                        : focusedField === 'email'
                          ? 'text-brand'
                          : 'text-neutral-500'
                    }`}
                  >
                    {t('form.email')}
                  </label>
                  {errors.email && (
                    <p className="font-inter mt-1.5 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Student Type Field (Optional) */}
                <div className="relative mb-6">
                  <select
                    id="studentType"
                    value={formData.studentType}
                    onChange={(e) =>
                      handleInputChange('studentType', e.target.value)
                    }
                    onFocus={() => setFocusedField('studentType')}
                    onBlur={() => setFocusedField(null)}
                    className={`font-inter w-full appearance-none rounded-xl border-2 bg-gray-50 px-4 py-4 text-base transition-all outline-none focus:bg-white ${
                      focusedField === 'studentType'
                        ? 'border-brand'
                        : 'border-gray-200'
                    } ${formData.studentType ? 'text-neutral-900' : 'text-neutral-500'}`}
                  >
                    <option value="">{t('form.studentType')}</option>
                    {studentTypes.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                    <svg
                      className={`h-5 w-5 transition-colors ${
                        focusedField === 'studentType'
                          ? 'text-brand'
                          : 'text-neutral-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="font-inter mt-1.5 text-xs text-neutral-400">
                    {t('form.optional')}
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-inter from-brand relative w-full overflow-hidden rounded-xl bg-gradient-to-r to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {t('form.submitting')}
                    </span>
                  ) : (
                    t('form.submit')
                  )}
                </button>

                {/* Privacy note */}
                <p className="font-inter mt-4 text-center text-xs text-neutral-400">
                  {t('form.privacy')}
                </p>
              </form>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </FadeIn>
    </section>
  );
}
