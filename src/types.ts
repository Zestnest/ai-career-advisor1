export interface UserInput {
  education: string;
  skills: string;
  experience: string;
  interests: string;
  location: string;
  otherFactors: string;
}

export interface RecommendedCourse {
  title: string;
  platform: string;
  rationale: string;
  estimated_cost: string;
  duration: string;
  link?: string;
}

export interface LearningPhase {
  phase_title: string;
  courses: RecommendedCourse[];
}

export interface CareerRecommendation {
  career: string;
  rationale: string;
  learning_phases?: LearningPhase[];
}

export interface AdsAndAffiliates {
  ad_sense_content: string;
  affiliate_resources: {
    name: string;
    link: string;
  }[];
}

export interface SubscriptionFeatures {
  title: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CareerAdviceResponse {
  career_recommendations: CareerRecommendation[];
  ads_and_affiliates: AdsAndAffiliates;
  subscription_features: SubscriptionFeatures;
  faq: FaqItem[];
}
