import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const caKnowledgeBase = `
You are a helpful assistant for Kamlesh Temani & Associates, a chartered accountancy firm based in Dhupguri, West Bengal, India. 

COMPANY INFORMATION:
- Founded in 2018 by CA Kamlesh Temani
- 6+ years of professional excellence
- 500+ satisfied clients
- Services: Accounting & Bookkeeping, Taxation & GST Services, Audit & Assurance, Business & Company Registration, Financial Advisory & Valuation, Financial Planning
- Contact: +91 97334-12222, kamleshtemani@gmail.com
- Address: Ward No. 14, Mahabirsthan, near Hanuman Mandir, Churri Patty Rd, Gobindapally, Dhupguri 735210, West Bengal
- Business Hours: Monday-Saturday 8:00 AM - 6:00 PM, Sunday Closed

SERVICES DETAILS:
1. Accounting & Bookkeeping (₹5,000/month): Daily bookkeeping, financial statements, MIS reports, expense tracking
2. Taxation & GST Services (₹3,000/return): GST registration, returns filing, income tax, tax planning
3. Audit & Assurance (₹25,000/audit): Statutory audits, internal audits, tax audits, compliance checks
4. Business Registration (₹10,000/registration): Company incorporation, LLP registration, NGO/Trust registration
5. Financial Advisory (₹15,000/project): Business valuation, investment advisory, M&A support
6. Financial Planning (₹8,000/plan): Retirement planning, investment portfolio, insurance planning

COMMON QUERIES TO HANDLE:
- Service pricing and details
- GST registration process
- Income tax filing requirements
- Company incorporation steps
- Audit requirements
- Tax saving strategies
- Business compliance needs
- Appointment booking process

Always be professional, helpful, and encourage users to book a consultation for detailed advice. If asked about complex tax matters, recommend speaking with our CA directly.
`;

const quickAnswerRules = [
  {
    keywords: ['service', 'services', 'offer', 'help'],
    response: `We provide six main services: Accounting & Bookkeeping, Taxation & GST Services, Audit & Assurance, Business Registration, Financial Advisory & Valuation, and Financial Planning. If you want, I can also explain any one of these in detail.`
  },
  {
    keywords: ['price', 'pricing', 'cost', 'charges', 'fees'],
    response: `Our standard starting prices are: Accounting & Bookkeeping from Rs. 5,000/month, Taxation & GST from Rs. 3,000/return, Audit & Assurance from Rs. 25,000/audit, Business Registration from Rs. 10,000, Financial Advisory from Rs. 15,000/project, and Financial Planning from Rs. 8,000/plan. Final fees depend on scope, so the best next step is to book a consultation.`
  },
  {
    keywords: ['consultation', 'book', 'appointment', 'schedule'],
    response: `You can book a consultation directly on the website without logging in. Open the consultation page, fill in your name, email, phone number, required service, and preferred date/time, and our team will contact you within 24 hours.`
  },
  {
    keywords: ['gst', 'registration', 'gst registration'],
    response: `We can help with GST registration, return filing, and ongoing compliance. For GST registration, we usually review your business details, PAN, address proof, and business documents first, then handle the filing process for you.`
  },
  {
    keywords: ['income tax', 'itr', 'tax filing'],
    response: `We assist with income tax filing, tax planning, and compliance for individuals and businesses. If you tell me whether this is for salaried income, business income, or GST-linked filing, I can guide you more specifically.`
  },
  {
    keywords: ['company', 'incorporation', 'startup', 'llp', 'business registration'],
    response: `We handle company incorporation, LLP registration, and related compliance support. The usual process starts with entity selection, document review, name approval, registration filing, and post-registration compliance setup.`
  }
];

const getQuickAnswer = (userMessage) => {
  const normalizedMessage = userMessage.toLowerCase();
  return quickAnswerRules.find(({ keywords }) =>
    keywords.some((keyword) => normalizedMessage.includes(keyword))
  )?.response || null;
};

export class GeminiChatService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async generateResponse(userMessage, chatHistory = []) {
    try {
      const quickAnswer = getQuickAnswer(userMessage);
      if (quickAnswer) {
        return quickAnswer;
      }

      const context = `${caKnowledgeBase}\n\nChat History:\n${chatHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}\n\nUser: ${userMessage}\n\nAssistant:`;
      
      const result = await this.model.generateContent(context);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at +91 97334-12222 for immediate assistance.";
    }
  }

  async generateQuickReplies(userMessage) {
    const quickReplies = [
      "Which services do you offer?",
      "What are your consultation charges?",
      "How can I book a consultation?",
      "Tell me about GST registration",
      "I need income tax filing help"
    ];

    // Simple keyword matching for relevant quick replies
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('gst') || lowerMessage.includes('tax')) {
      return ["Tell me about GST registration", "What documents are needed for GST?", "I need tax filing help"];
    } else if (lowerMessage.includes('company') || lowerMessage.includes('business')) {
      return ["How does company registration work?", "Tell me about business compliance", "I need startup help"];
    } else if (lowerMessage.includes('audit')) {
      return ["What are audit requirements?", "Tell me about statutory audit", "Do I need an internal audit?"];
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return ["Show service pricing", "I want a quote", "How can I book a consultation?"];
    }
    
    return quickReplies.slice(0, 3);
  }
}

export const geminiChat = new GeminiChatService();
