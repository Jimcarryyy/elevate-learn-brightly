export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const learnerPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Explore the catalog and try introductory lessons.',
    features: [
      'Access to free course previews',
      'Community discussion forums',
      'Progress tracking on free content',
      'Mobile and desktop access',
    ],
    cta: 'Get started free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19,
    period: 'per month',
    description: 'Full access for learners building skills on a schedule.',
    features: [
      'Unlimited course access',
      'Downloadable resources',
      'Certificates of completion',
      'Priority email support',
      'Offline viewing (mobile)',
    ],
    highlighted: true,
    cta: 'Start Pro trial',
  },
  {
    id: 'teams',
    name: 'Teams',
    price: 49,
    period: 'per seat / month',
    description: 'For companies upskilling groups with admin controls.',
    features: [
      'Everything in Pro',
      'Team admin dashboard',
      'Usage and progress reports',
      'Custom learning paths',
      'Dedicated onboarding call',
    ],
    cta: 'Contact sales',
  },
];

export const instructorPricing = {
  revenueShare: '70%',
  platformFee: '30%',
  payoutSchedule: 'Monthly, NET-30',
  minimumPayout: '$50',
  features: [
    'Free course publishing',
    'Built-in video hosting',
    'Sales analytics dashboard',
    'Coupon and promotion tools',
    'Direct student messaging',
  ],
};

export const pricingFaqs = [
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes. Upgrade or downgrade anytime from your account settings. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Do courses include certificates?',
    answer:
      'Pro and Teams plans include certificates of completion for eligible courses. Free plan users can view certificates but not download them.',
  },
  {
    question: 'How do instructor payouts work?',
    answer:
      'Instructors keep 70% of net course revenue. Payouts are processed monthly once you reach the $50 minimum threshold.',
  },
  {
    question: 'Is there a contract for Teams?',
    answer:
      'Teams is billed monthly with no annual commitment. Annual invoicing is available for organizations with 20+ seats.',
  },
];
