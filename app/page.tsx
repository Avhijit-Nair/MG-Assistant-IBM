'use client'
import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const parallaxStyle = {
  backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0v100H0V0c12.5 0 12.5 20 25 20s12.5-20 25-20 12.5 20 25 20 12.5-20 25-20z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E')",
  backgroundAttachment: 'fixed',
  backgroundSize: '100px 100px',
};

const gradientOverlay = {
  background: 'linear-gradient(to bottom, rgba(17,7,46,0) 0%, rgba(3,84,233,0.5) 75%, rgba(17,7,46,1) 100%)',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%',
  pointerEvents: 'none',
};

export default function Component() {
  useEffect(() => {
    // IBM Watson Assistant integration
    window.watsonAssistantChatOptions = {
      integrationID: "57dcc54f-e9ec-458f-907d-d07d6fa6a51e",
      region: "us-east",
      serviceInstanceID: "f9e77fa5-b157-4ea9-bd4d-a42f494e1d87",
      onLoad: async (instance) => { await instance.render(); }
    };
    
    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative" style={parallaxStyle}>
      <div style={gradientOverlay}></div>
      <header className="py-6 px-4 bg-transparent relative z-10">
        <h1 className="text-3xl font-bold text-center text-white">Hyper-Personalized Marketing: The Future is Now</h1>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Unlock the Power of Hyper-Personalization</h2>
          <p className="mb-4">
            In today's digital landscape, generic marketing approaches no longer cut it. Hyper-personalized marketing
            leverages advanced data analytics and AI to deliver tailored experiences to individual customers.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 bg-opacity-80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Key Benefits</CardTitle>
              <CardDescription>Why hyper-personalization matters</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>Increased customer engagement and loyalty</li>
                <li>Higher conversion rates and ROI</li>
                <li>Improved customer satisfaction and retention</li>
                <li>More efficient marketing spend</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 bg-opacity-80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">How It Works</CardTitle>
              <CardDescription>The technology behind hyper-personalization</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>Advanced data collection and analysis</li>
                <li>Machine learning algorithms</li>
                <li>Real-time content customization</li>
                <li>Omnichannel integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Ready to Transform Your Marketing?</h2>
          <p className="mb-4">
            Discover how hyper-personalized marketing can revolutionize your customer relationships and drive
            unprecedented growth. Our AI-powered assistant is here to guide you through the process.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </section>
      </main>

      <footer className="bg-transparent py-6 px-4 mt-12 relative z-10">
        <p className="text-center text-gray-400">
          © 2024 Marketing Genius. All rights reserved.
        </p>
      </footer>
    </div>
  )
}