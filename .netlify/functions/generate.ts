import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const userInput = JSON.parse(event.body || '{}');
    
    // Mock response for demo purposes
    // In production, you would call the actual Gemini API here
    const mockResponse = {
      career_recommendations: [
        {
          career: "Data Scientist",
          rationale: "Based on your computer science background and interest in data analysis, this role perfectly aligns with your skills and goals.",
          learning_phases: [
            {
              phase_title: "Phase 1: Foundation (Months 1-3)",
              courses: [
                {
                  title: "Python for Data Science",
                  platform: "Coursera",
                  rationale: "Builds on your existing Python knowledge",
                  estimated_cost: "$49/month",
                  duration: "6 weeks",
                  link: "https://coursera.org/learn/python-data-science"
                }
              ]
            }
          ]
        },
        {
          career: "Machine Learning Engineer",
          rationale: "Your technical background makes you a great candidate for this growing field."
        },
        {
          career: "Product Manager",
          rationale: "Combine your technical skills with business strategy."
        }
      ],
      ads_and_affiliates: {
        ad_sense_content: "Accelerate your career with these recommended tools and courses.",
        affiliate_resources: [
          {
            name: "DataCamp - Data Science Courses",
            link: "https://datacamp.com"
          }
        ]
      },
      subscription_features: {
        title: "Premium Features",
        description: "Unlock detailed roadmaps for all career paths and advanced AI tools.",
        features: [
          "Detailed learning roadmaps for all careers",
          "Personalized interview preparation",
          "Resume optimization suggestions",
          "Priority support"
        ]
      },
      faq: [
        {
          question: "How accurate are these recommendations?",
          answer: "Our AI analyzes your profile against thousands of career paths to provide personalized recommendations."
        }
      ]
    };

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockResponse),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export { handler };
