import type { UserInput, CareerAdviceResponse } from '../types';

export const generateCareerAdvice = async (userInput: UserInput): Promise<CareerAdviceResponse> => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),
    });

    if (!response.ok) {
        let errorMessage = `Request failed with status: ${response.status}`;
        
        try {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
        } catch {
            // If JSON parsing fails, try to get the response as text
            try {
                const errorText = await response.text();
                errorMessage = errorText || errorMessage;
            } catch {
                // If both JSON and text parsing fail, use the default message
                errorMessage = `Request failed with status: ${response.status}`;
            }
        }
        
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return data as CareerAdviceResponse;

  } catch (error) {
    console.error("Error calling backend service:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to get a response from the server: ${error.message}`);
    }
    throw new Error("An unknown error occurred while contacting the server.");
  }
};
