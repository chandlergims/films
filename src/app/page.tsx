export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">
            AI Movie Creation Platform
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Create professional films using Grok Imagine AI technology
          </p>
        </div>

        {/* Platform Strategy */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            <div className="border border-gray-300 p-6">
              <h3 className="text-lg font-bold text-black mb-4">The Grok Revolution</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Elon Musk recently announced that Grok will soon be capable of generating short films. 
                This breakthrough represents the dawn of democratized filmmaking, where anyone with a vision 
                can create professional-quality content without traditional barriers.
              </p>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-lg font-bold text-black mb-4">Platform Strategy</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                We&apos;re building the infrastructure to harness this technology through a sustainable,
                token-gated platform. By requiring tokens for access, we can:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>• Manage computational costs without bearing the full burden</div>
                <div>• Ensure quality control and prevent spam</div>
                <div>• Create a sustainable economic model for creators</div>
                <div>• Build a community of serious filmmakers</div>
              </div>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-lg font-bold text-black mb-4">Economic Flywheel</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Our monetization strategy creates a self-reinforcing cycle:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="border border-gray-200 p-3 text-center">
                  <div className="font-semibold text-black mb-1">1. Film Creation</div>
                  <div className="text-xs text-gray-600">Users pay tokens to create films</div>
                </div>
                <div className="border border-gray-200 p-3 text-center">
                  <div className="font-semibold text-black mb-1">2. Monetization</div>
                  <div className="text-xs text-gray-600">Platform takes revenue share from successful films</div>
                </div>
                <div className="border border-gray-200 p-3 text-center">
                  <div className="font-semibold text-black mb-1">3. Token Buyback</div>
                  <div className="text-xs text-gray-600">100% of profits reinvested into token purchases</div>
                </div>
                <div className="border border-gray-200 p-3 text-center">
                  <div className="font-semibold text-black mb-1">4. Value Increase</div>
                  <div className="text-xs text-gray-600">Token scarcity drives value for all holders</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-lg font-bold text-black mb-4">Long-term Vision</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                This is only the start. As AI film generation evolves, we&apos;ll be the platform that bridges 
                creators with cutting-edge technology. Our early adopters will benefit from the entire 
                ecosystem&apos;s growth, creating a true win-win scenario for filmmakers and token holders alike.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-12 text-center">
          <p className="text-yellow-800 font-medium">
            Platform launching soon - Token pricing and features being finalized
          </p>
        </div>

        {/* Token System */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Token-Gated Access</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            All creations require tokens to manage computational costs and maintain quality standards.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-300 p-6 text-center bg-gray-50">
              <h3 className="font-bold text-black text-lg mb-2">Basic</h3>
              <div className="text-2xl font-mono text-gray-500 mb-2">TBD</div>
              <div className="text-sm text-gray-600">tokens</div>
              <div className="text-xs text-gray-500 mt-2">Short film (5 min)</div>
            </div>
            
            <div className="border border-gray-300 p-6 text-center bg-gray-50">
              <h3 className="font-bold text-black text-lg mb-2">Premium</h3>
              <div className="text-2xl font-mono text-gray-500 mb-2">TBD</div>
              <div className="text-sm text-gray-600">tokens</div>
              <div className="text-xs text-gray-500 mt-2">Feature film (30 min)</div>
            </div>
            
            <div className="border border-gray-300 p-6 text-center bg-gray-50">
              <h3 className="font-bold text-black text-lg mb-2">Pro</h3>
              <div className="text-2xl font-mono text-gray-500 mb-2">TBD</div>
              <div className="text-sm text-gray-600">tokens</div>
              <div className="text-xs text-gray-500 mt-2">Unlimited monthly</div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">Available Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="border border-gray-300 p-6 bg-white">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-black">Script Generation</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">TBD tokens</span>
              </div>
              <p className="text-gray-600 text-sm">
                AI-generated screenplays, dialogue, and scene descriptions
              </p>
            </div>

            <div className="border border-gray-300 p-6 bg-white">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-black">Visual Generation</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">TBD tokens</span>
              </div>
              <p className="text-gray-600 text-sm">
                Photorealistic scenes, characters, and environments
              </p>
            </div>

            <div className="border border-gray-300 p-6 bg-white">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-black">Audio Synthesis</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">TBD tokens</span>
              </div>
              <p className="text-gray-600 text-sm">
                Voice acting, sound effects, and background music
              </p>
            </div>

            <div className="border border-gray-300 p-6 bg-white">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-black">Post-Production</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">TBD tokens</span>
              </div>
              <p className="text-gray-600 text-sm">
                Automated editing, color grading, and final rendering
              </p>
            </div>
          </div>
        </div>

        {/* Platform Info */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">Platform Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-300 p-6 bg-gray-50">
              <h3 className="font-bold text-black mb-3">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Democratize movie creation for independent filmmakers through AI-powered tools. 
                Token system ensures sustainable operation and prevents resource abuse.
              </p>
            </div>
            
            <div className="border border-gray-300 p-6 bg-gray-50">
              <h3 className="font-bold text-black mb-3">Technical Specs</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• Platform: Grok Imagine API v2.1</div>
                <div>• Max resolution: 4K (3840x2160)</div>
                <div>• Formats: MP4, MOV, AVI</div>
                <div>• Processing: 2-15 minutes per scene</div>
                <div>• Token refresh: Daily at 00:00 UTC</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
