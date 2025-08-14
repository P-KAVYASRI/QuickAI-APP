import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <PricingTable />
        </div>

      </div>
    </div>
  )
}

export default Plan
