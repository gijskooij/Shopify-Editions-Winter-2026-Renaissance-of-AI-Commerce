import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif leading-relaxed selection:bg-gray-200">
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-24">

        {/* Header */}
        <header className="mb-20 border-b border-gray-200 pb-12">
          <div className="flex justify-between items-baseline mb-6">
            <p className="font-sans text-xs font-bold tracking-widest uppercase text-subtle">
              Shopify Editions
            </p>
            <p className="font-sans text-xs font-bold tracking-widest uppercase text-subtle">
              Winter '26
            </p>
          </div>
          <h1 className="font-sans text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black leading-none">
            The Renaissance Edition
          </h1>
          <p className="text-2xl md:text-3xl text-subtle italic font-light leading-relaxed">
            A new world of commerce. 150+ product updates.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-24 bg-white p-8 border border-gray-200 rounded-sm shadow-sm font-sans">
          <h2 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-6">Table of Contents</h2>
          <ul className="grid md:grid-cols-2 gap-y-2 gap-x-8 text-sm font-medium text-blue-800">
            <li><a href="#sidekick" className="hover:underline block py-1">01. Sidekick</a></li>
            <li><a href="#agentic" className="hover:underline block py-1">02. Agentic</a></li>
            <li><a href="#online" className="hover:underline block py-1">03. Online</a></li>
            <li><a href="#retail" className="hover:underline block py-1">04. Retail</a></li>
            <li><a href="#marketing" className="hover:underline block py-1">05. Marketing</a></li>
            <li><a href="#checkout" className="hover:underline block py-1">06. Checkout</a></li>
            <li><a href="#operations" className="hover:underline block py-1">07. Operations</a></li>
            <li><a href="#shop-app" className="hover:underline block py-1">08. Shop app</a></li>
            <li><a href="#b2b" className="hover:underline block py-1">09. B2B</a></li>
            <li><a href="#finance" className="hover:underline block py-1">10. Finance</a></li>
            <li><a href="#shipping" className="hover:underline block py-1">11. Shipping</a></li>
            <li><a href="#developer" className="hover:underline block py-1">12. Developer</a></li>
          </ul>
        </nav>

        {/* Content Sections */}
        <article className="space-y-32">

          {/* 01 SIDEKICK */}
          <section id="sidekick">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">01</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Sidekick</h2>
            <p className="text-2xl mb-12 font-light text-gray-600">
              The AI-powered Shopify expert who's just as obsessed with your business as you are.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Insights, proactively delivered</h3>
                <p className="text-lg leading-relaxed text-gray-800">
                  <strong>Smart suggestions:</strong> Sidekick Pulse delivers personalized recommendations and next steps for your business using market trends and data from your store.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Complexity, delegated</h3>
                <div className="space-y-4 text-lg leading-relaxed text-gray-800">
                  <p><strong>Custom app generation:</strong> Get Sidekick to build custom apps designed specifically for your business needs. E.g., "Create an app that recommends which products I need to reorder" or "Create a task tracker for my whole team."</p>
                  <p><strong>Workflow automations:</strong> Describe the workflow you want to automate, and Sidekick will build it in the Shopify Flow app.</p>
                  <p><strong>Custom analytics reports:</strong> Sidekick can generate custom reports and data visualizations directly in the ShopifyQL query editor.</p>
                  <p><strong>Segmentation support:</strong> Sidekick can help you build segments or generate them from scratch.</p>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Designs, refined</h3>
                <div className="space-y-4 text-lg leading-relaxed text-gray-800">
                  <p><strong>Generate theme edits:</strong> Tell Sidekick the specific design updates you want and watch it adjust your theme instantly.</p>
                  <p><strong>Studio-quality photos:</strong> Prompt Sidekick to change image backgrounds, add or remove elements, and expand canvas size.</p>
                  <p><strong>Mobile image editor:</strong> Turn any image into a highly polished product shot with Sidekick using the Shopify mobile app file editor.</p>
                  <p><strong>Email editing:</strong> Sidekick can help you edit emails in the Shopify Messaging app email editor.</p>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Tedious tasks, simplified</h3>
                <ul className="list-disc pl-5 space-y-3 text-lg text-gray-800">
                  <li><strong>Shortcuts for prompts:</strong> Turn your Sidekick prompts into reusable Skills, then share your favorites with the community.</li>
                  <li><strong>Multi-step task completion:</strong> Partner with Sidekick on more complex tasks now that it can plan, write to-do lists, and take on multiple actions.</li>
                  <li><strong>Voice-powered mobile chat:</strong> Speak with Sidekick on the go, right in the Shopify mobile app.</li>
                  <li><strong>Wide-mode:</strong> Sidekick goes full screen so you can tackle complex tasks with more room to work.</li>
                  <li><strong>App discovery:</strong> Sidekick can help you find, compare, and install apps.</li>
                  <li><strong>Target selection:</strong> Sidekick gives contextual answers when clicking on specific areas of the admin.</li>
                  <li><strong>Quick company creation:</strong> Sidekick can easily create B2B companies.</li>
                  <li><strong>Money management:</strong> Sidekick checks your Shopify Balance and can make transfers with your approval.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 02 AGENTIC */}
          <section id="agentic">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">02</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Agentic</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Sell directly in AI chats with built-in tools that syndicate your products to every AI platform.
            </p>
            <div>
               <h3 className="font-sans text-2xl font-bold mb-3">Shopify Agentic Storefronts</h3>
               <p className="text-lg text-gray-800">
                 Manage how your brand appears to the millions of users shopping in AI chats. Your products are discoverable right in ChatGPT, Copilot, and Perplexity, with other channels coming soon. Set up your data once and Shopify Agentic Storefronts will surface your products to AI chats everywhere.
               </p>
            </div>
          </section>

          {/* 03 ONLINE */}
          <section id="online">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">03</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Online</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Validate store changes with A/B testing and an AI tool that simulates shopping behavior.
            </p>
            <div className="grid gap-8">
              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Key Updates</h3>
                <ul className="space-y-4 text-lg text-gray-800">
                  <li><strong>Test and time your launches with Rollouts:</strong> Schedule theme changes and A/B test with Rollouts, built directly into the admin.</li>
                  <li><strong>Shopify SimGym app:</strong> Simulate shopper behavior with AI agents that use data from billions of purchases, and get actionable recommendations before going live.</li>
                  <li><strong>Manage store details in the theme editor:</strong> Make changes to products, collections, markets, metafields, and more, all without leaving your workflow in the theme editor.</li>
                  <li><strong>Theme generation on mobile:</strong> Design your store right from the Shopify mobile app by generating a theme, previewing it, and publishing on the go.</li>
                  <li><strong>Sell on WordPress:</strong> Turn your WordPress site into an online store by adding products, collections, a cart, and checkout with the Shopify plugin.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 border border-gray-200">
                <h4 className="font-sans text-sm font-bold uppercase mb-4 text-gray-500">Core Enhancements</h4>
                <ul className="space-y-3 text-sm text-gray-700 font-sans">
                  <li>Over 250 Horizon theme improvements (animations, performance).</li>
                  <li>2048 variants per product.</li>
                  <li>Unlisted product status (accessible only via URL).</li>
                  <li>Collections improvements (conditional logic exclusions).</li>
                  <li>Automatic discounts for eligible customers (e.g. VIPs).</li>
                  <li>Compare-at prices in catalogs (no CSV needed).</li>
                  <li>Unit pricing for all (metric/imperial/counts globally).</li>
                  <li>Vibe code with Lovable (Spin up a store using Lovable).</li>
                  <li>AI-powered domain discovery.</li>
                  <li>Autofill passcode on iOS 26.</li>
                  <li>Faster customer login with Shop (one tap).</li>
                  <li>Customer sign-in with social accounts (Google/Facebook).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Introducing Tinker</h3>
                <p className="text-lg text-gray-800">An app where entrepreneurs can play with the latest AI tools in a single place.</p>
              </div>
            </div>
          </section>

          {/* 04 RETAIL */}
          <section id="retail">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">04</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Retail</h2>
            <p className="text-xl mb-8 leading-relaxed">New in-store hardware that provides unwavering reliability.</p>

            <div className="mb-10">
              <h3 className="font-sans text-2xl font-bold mb-4">Not your standard hub</h3>
              <p className="text-lg text-gray-800 mb-4">The POS Hub gives you the reliability of wired connections with the processing power of a computer. It features built-in health monitoring, automatic firmware updates, and rock-solid connectivity with 3 USB-A ports and 1 USB-C port.</p>
              <ul className="list-disc pl-5 text-gray-700">
                 <li>Connections that never drop.</li>
                 <li>The only hub with processing power (ARM Cortex-A7).</li>
                 <li>POS Hub-compatible scanners (HP barcode scanner integration).</li>
              </ul>
            </div>

            <div className="space-y-6 text-lg text-gray-800">
              <p><strong>Subscriptions on POS:</strong> Allow customers to sign up for subscriptions in store on your POS.</p>
              <p><strong>Quick count with POS:</strong> Scan and update inventory directly from your POS to keep stock accurate across channels.</p>
              <p><strong>POS customization in one editor:</strong> Customize the customer display, smart grid, receipts, and lock screen in a single editor.</p>
              <p><strong>Same-day delivery with Uber Direct:</strong> Offer fast local delivery for online orders with live tracking using Uber Direct on POS.</p>
              <p><strong>Retail payments expansion:</strong> Tap to Pay now in Germany, Ireland, Spain, NZ. Cartes Bancaires accepted in France.</p>
              <p><strong>Markets for retail:</strong> Set unique prices and publish products per retail location and online.</p>
            </div>
          </section>

          {/* 05 MARKETING */}
          <section id="marketing">
             <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">05</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Marketing</h2>
            <p className="text-xl mb-8 leading-relaxed">Grow your sales with a first-of-its-kind product network.</p>

            <div className="space-y-8 text-lg text-gray-800">
              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Shopify Product Network</h3>
                <p>Fill merchandise gaps by choosing to instantly surface products from other Shopify brands in your search, collections, emails, and post-purchase pages, and earn a commission on every sale.</p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold mb-2">Shop Campaigns</h3>
                <p>Now expands to the online store. Automatically get promoted on collections, search, and post-purchase pages on other relevant Shopify stores.</p>
                <p className="mt-2 text-sm text-gray-600">Also now on X, Snapchat, and Bing.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="bg-white p-4 border border-gray-200">
                    <strong className="block mb-2 font-sans">Messaging & Forms</strong>
                    <ul className="text-sm space-y-2">
                       <li>Shopify Messaging supports SMS marketing.</li>
                       <li>Auto-translation for Shopify Forms (19 languages).</li>
                       <li>Calendar view for messaging scheduling.</li>
                       <li>Dynamic product sections in emails.</li>
                    </ul>
                 </div>
                 <div className="bg-white p-4 border border-gray-200">
                    <strong className="block mb-2 font-sans">Segmentation & Targeting</strong>
                    <ul className="text-sm space-y-2">
                       <li>Improved segmentation template search.</li>
                       <li>Target all audiences in one Shop Campaign.</li>
                       <li>Segment customers by product categories.</li>
                       <li>Web pixels on customer accounts.</li>
                    </ul>
                 </div>
              </div>
            </div>
          </section>

          {/* 06 CHECKOUT */}
          <section id="checkout">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">06</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Checkout</h2>
            <p className="text-xl mb-8 leading-relaxed">Convert customers with personalized checkout experiences and more payment options.</p>

            <ul className="space-y-6 text-lg text-gray-800">
              <li className="border-l-2 border-blue-200 pl-4">
                <strong>Personalized Shop button:</strong> The last four digits of a customer’s saved card will appear on their Shop Pay button.
              </li>
              <li className="border-l-2 border-blue-200 pl-4">
                <strong>Checkout and accounts customization per market:</strong> Customize your checkout and customer account pages for different countries and B2B buyers directly in the editor.
              </li>
              <li className="border-l-2 border-blue-200 pl-4">
                <strong>Switch to Shopify Payments with zero downtime:</strong> Move from third-party payment processors to Shopify Payments without interrupting checkout.
              </li>
            </ul>

            <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <p><strong>Shop Pay Installments in the UK:</strong> Terms up to 24 months.</p>
              <p><strong>Shop Pay works with Global-e:</strong> In every market.</p>
              <p><strong>Apple Pay in Shop Pay:</strong> Now available.</p>
              <p><strong>Klarna expansion:</strong> Belgium, Denmark, Finland, France, Switzerland, Czechia, Ireland, Portugal.</p>
              <p><strong>More payment methods in France:</strong> Bancontact, iDEAL, Twint, Blik, Przelewy24, MobilePay, EPS.</p>
            </div>
          </section>

          {/* 07 OPERATIONS */}
          <section id="operations">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">07</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Operations</h2>
            <p className="text-xl mb-8 leading-relaxed">Improve everyday workflows with flexible inventory modeling and trend-spotting analytics.</p>

            <div className="space-y-6 text-lg text-gray-800">
               <p><strong>Flexible inventory transfers:</strong> Receive items from unspecified locations, edit shipments in transit.</p>
               <p><strong>Quick sale in the Shopify mobile app:</strong> Sell in person instantly with Tap to Pay.</p>
               <p><strong>Updated metrics for Apple Watch:</strong> Monitor store from your wrist.</p>
               <p><strong>AI-enhanced chargeback management:</strong> Auto-generate dispute summaries.</p>
               <p><strong>Password-free login:</strong> Passkeys with fingerprint or face ID.</p>
               <p><strong>Heatmaps in analytics:</strong> View data as heatmap (e.g., sales by hour).</p>
               <p><strong>Bot filtering in analytics:</strong> Exclude bot traffic for cleaner data.</p>
               <p><strong>Comprehensive inventory history:</strong> Removal of the 180-day cap.</p>
               <p><strong>Flash sales with multi-location inventory:</strong> Run flash sales without overselling.</p>
               <p><strong>Redesigned Flow editor:</strong> Build large automations with vertical layout.</p>
               <p><strong>Enhanced Managed Markets:</strong> Sell internationally with instant compliance checks.</p>
            </div>
          </section>

          {/* 08 SHOP APP */}
          <section id="shop-app">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">08</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Shop app</h2>
            <p className="text-xl mb-8 leading-relaxed">Reach millions of high-intent shoppers with personalized buying experiences.</p>

            <ul className="space-y-4 text-lg text-gray-800 list-disc pl-5">
              <li><strong>Dynamic storefronts:</strong> Automatically personalize your Shop storefront with relevant products for each shopper.</li>
              <li><strong>Deals feed:</strong> Highlight discounts, price drops, and Shop Campaigns.</li>
              <li><strong>Shoppable videos:</strong> AI-optimized distribution with built-in ranking.</li>
              <li><strong>Customizable product pages:</strong> Design with custom sections and videos.</li>
              <li><strong>Order tracking in 21 more countries:</strong> Europe, NZ, Mexico expansion.</li>
            </ul>
          </section>

          {/* 09 B2B */}
          <section id="b2b">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">09</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">B2B</h2>
            <p className="text-xl mb-8 leading-relaxed">Take your wholesale business global, discover new retailers, and get paid in more ways.</p>

            <div className="space-y-8">
               <div>
                  <h3 className="font-sans text-xl font-bold mb-2">Global & Discovery</h3>
                  <p className="text-gray-800"><strong>Shopify Collective available globally:</strong> Source and sell in 35 additional countries. Suppliers can now discover retailers using the directory.</p>
               </div>
               <div>
                  <h3 className="font-sans text-xl font-bold mb-2">Payments & Terms</h3>
                  <p className="text-gray-800"><strong>ACH payments for B2B:</strong> Accept bank payments at checkout. <strong>Dynamic payment terms:</strong> Use apps powered by Functions to set deposit requirements.</p>
               </div>
               <div>
                  <h3 className="font-sans text-xl font-bold mb-2">Integrations</h3>
                  <p className="text-gray-800"><strong>ERP systems integration:</strong> Sync to NetSuite, BrightPearl, Sage, Acumatica. <strong>EDI workflows:</strong> Connect with Crstl and SPS Commerce.</p>
               </div>
            </div>
          </section>

          {/* 10 FINANCE */}
          <section id="finance">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">10</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Finance</h2>
            <p className="text-xl mb-8 leading-relaxed">Modern financial tools designed for growing your business.</p>

            <div className="bg-white p-8 border border-gray-200 rounded-sm">
               <ul className="space-y-4 text-gray-800">
                  <li><strong>Continuous funding with Shopify Capital flex account:</strong> Apply once, get replenished funds.</li>
                  <li><strong>Automatic transfers in Shopify Balance:</strong> Split payouts automatically (tax, savings, etc).</li>
                  <li><strong>Staff cards with spend controls:</strong> Issue Balance cards to staff.</li>
                  <li><strong>Shopify Capital expansion:</strong> Netherlands, Spain, Ireland.</li>
                  <li><strong>Credits on USDC transactions:</strong> Earn automatic credits.</li>
                  <li><strong>Unified card dispute:</strong> File disputes directly from Balance.</li>
                  <li><strong>Dynamic credit limits:</strong> Adjusts based on sales.</li>
                  <li><strong>Real-time fraud alerts:</strong> SMS alerts for suspicious activity.</li>
               </ul>
            </div>
          </section>

          {/* 11 SHIPPING */}
          <section id="shipping">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">11</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Shipping</h2>
            <p className="text-xl mb-8 leading-relaxed">Ship confidently and cheetah-fast.</p>

            <ul className="space-y-4 text-lg text-gray-800">
               <li><strong>FedEx return labels:</strong> Create and track in admin with discounted rates.</li>
               <li><strong>Default package per variant:</strong> Get more accurate rates at checkout.</li>
               <li><strong>Custom sender name:</strong> Protect privacy or keep gifts discreet.</li>
               <li><strong>More logistics partners:</strong> Amazon, Bigblue, DHL, GoBolt, Mayple.</li>
               <li><strong>Global shipping carriers:</strong> Royal Mail (UK), Australia Post (AU), DHL Express (CA).</li>
            </ul>
          </section>

          {/* 12 DEVELOPER */}
          <section id="developer">
            <div className="border-t-4 border-black pt-4 mb-8">
              <span className="font-sans font-bold text-sm tracking-widest uppercase">12</span>
            </div>
            <h2 className="font-sans text-5xl font-black mb-8 text-black tracking-tight">Developer</h2>
            <p className="text-xl mb-8 leading-relaxed">A completely new way to build for commerce with the power of AI.</p>

            <div className="space-y-12">

               <div>
                  <h3 className="font-sans text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Agentic Commerce</h3>
                  <p className="mb-4 text-lg">Bring native shopping into AI conversations.</p>
                  <ul className="space-y-2 text-gray-700">
                     <li><strong>Shopify Catalog for all:</strong> Search billions of products using MCP tools or REST.</li>
                     <li><strong>Checkout Kit for web:</strong> Bring checkout to any agentic flow in a browser.</li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-sans text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Sidekick Extensions</h3>
                  <p className="text-lg">Build Sidekick app extensions that let merchants access your app's data and invoke app actions from Sidekick.</p>
               </div>

               <div>
                  <h3 className="font-sans text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Platform + Tools</h3>
                  <ul className="space-y-3 text-gray-700">
                     <li><strong>Build with full MCP support:</strong> Code faster with Shopify Dev MCP that validates API calls.</li>
                     <li><strong>Admin Intents API:</strong> Launch admin workflows with a single line of code.</li>
                     <li><strong>Faster bulk operations:</strong> Accepts 100MB files, 5 concurrent operations.</li>
                     <li><strong>Introducing Tangle:</strong> Build ML and data pipelines collaboratively.</li>
                     <li><strong>Shopify Functions replace Scripts in 2026:</strong> Scripts will be replaced in June 2026.</li>
                     <li><strong>Enhanced security with token expiry:</strong> OAuth 2.0-compliant token refresh.</li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-sans text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Storefronts + Extensions</h3>
                  <ul className="space-y-3 text-gray-700">
                     <li><strong>Shop Minis SDK:</strong> Create immersive shopping experiences.</li>
                     <li><strong>POS Extensions Storage API:</strong> Persistent namespaced storage inside POS.</li>
                     <li><strong>New code editor for themes:</strong> Multi-file search, syntax highlighting, intelligent autocomplete.</li>
                     <li><strong>Storefront MCP works with Hydrogen:</strong> Build agents that tailor recommendations.</li>
                     <li><strong>Nested cart lines:</strong> Nest items in cart for add-ons like warranties.</li>
                     <li><strong>Cart Transform Function API on POS:</strong> Dynamically expand, merge, or update cart lines.</li>
                     <li><strong>ShopifyQL API for Shopify Analytics:</strong> Query thousands of metric combinations.</li>
                  </ul>
               </div>

            </div>
          </section>

        </article>

        {/* Footer */}
        <footer className="mt-40 pt-12 border-t border-gray-200 font-sans text-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm">
              <span className="font-bold text-black mr-4">Shopify</span>
              © 2026 Shopify Inc.
            </div>
            <div className="flex gap-6 text-sm underline decoration-gray-300 underline-offset-4">
              <a href="#" className="hover:text-black">Terms of Service</a>
              <a href="#" className="hover:text-black">Privacy Policy</a>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-400 text-center md:text-left max-w-md">
            All rights reserved. The "Winter Editions" trademark is property of Shopify. This page is a text-focused representation of the release notes.
          </p>
        </footer>

      </main>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
