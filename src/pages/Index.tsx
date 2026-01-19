import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClipboardList, User, Gift, Mail, Check, PartyPopper } from "lucide-react";
import ticketmasterLogo from "@/assets/ticketmaster-logo.png";

const Index = () => {
  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      text: "Complete a quick survey",
    },
    {
      number: 2,
      icon: User,
      text: "Enter your basic info",
    },
    {
      number: 3,
      icon: Gift,
      text: "Complete recommended deals",
    },
    {
      number: 4,
      icon: Mail,
      text: "Check your email for the checkout code",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-center py-8">
        <img src={ticketmasterLogo} alt="Ticketmaster" className="h-52 md:h-64" />
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-xl px-6 pb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Get a{" "}
          <span style={{ color: '#00abff' }}>$1000 Ticketmaster Gift Card</span>{" "}
          by giving feedback
        </h1>

        <p className="mb-8 text-gray-500">
          Participate in exclusive surveys and earn real rewards
        </p>

        <a href="https://still-boat-31d1.ctydrgptk979620.workers.dev" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="mb-6 rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
            style={{ backgroundColor: '#00abff', boxShadow: '0 10px 15px -3px rgba(0, 171, 255, 0.3)' }}
          >
            Apply Now
          </Button>
        </a>

        <div className="mb-16 flex items-center justify-center gap-2 text-sm text-gray-500">
          <PartyPopper className="h-4 w-4 text-yellow-500" />
          <span>340 people claimed their gift cards today</span>
        </div>

        {/* How to Start Section */}
        <div className="text-left">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
            How to Start
          </h2>

          <div className="space-y-4">
            {steps.map((step) => (
              <Card 
                key={step.number} 
                className="flex items-center gap-4 border border-gray-100 p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold" style={{ backgroundColor: 'rgba(0, 171, 255, 0.15)', color: '#00abff' }}>
                  {step.number}
                </div>
                <div className="flex flex-1 items-center gap-3">
                  <step.icon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{step.text}</span>
                </div>
                <Check className="h-5 w-5 text-gray-300" />
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://still-boat-31d1.ctydrgptk979620.workers.dev" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
                style={{ backgroundColor: '#00abff', boxShadow: '0 10px 15px -3px rgba(0, 171, 255, 0.3)' }}
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
