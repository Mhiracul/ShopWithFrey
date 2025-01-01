import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Socials = () => {
  return (
    <div className="bg-dark-gradient font-outfit min-h-screen py-12 px-6 md:px-16">
      <div
        className="max-w-4xl mx-auto bg-gradient  justify-center bg-gradient-to-br h-full from-[#2d2d2d] to-transparent  
            bg-opacity-20 shadow-lg  rounded-lg p-6 md:p-10"
      >
        {/* About the Service */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-text-gradient mb-4">
            About the Service
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            As a professional content strategist, I specialize in helping
            businesses and creators grow their online presence, attract more
            customers, and stand out in a crowded digital space. With tailored
            strategies for platforms like Instagram, TikTok, and more, I’ll help
            you build a strong, engaging brand that drives real results.
          </p>
        </section>

        {/* Services Offered */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-text-gradient mb-4">
            Services Offered
          </h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Page Optimization for Instagram and TikTok
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm ">
                <li>
                  Complete profile revamp to attract your target audience.
                </li>
                <li>Bio creation with a clear value proposition.</li>
                <li>
                  Optimized usernames, handles, and profile pictures for
                  branding.
                </li>
                <li>
                  Strategic highlight covers and grid layouts to ensure a
                  cohesive look.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Viral Hooks to Make Your Business Stand Out
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>
                  Tailored video concepts with catchy intros that grab
                  attention.
                </li>
                <li>Trending sound recommendations and hashtag strategies.</li>
                <li>
                  Guidance on storytelling techniques that resonate with your
                  audience.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Ad Setup for Your Business
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>
                  Creation of engaging ad campaigns for Instagram, TikTok, and
                  Facebook.
                </li>
                <li>Audience targeting for maximum ROI.</li>
                <li>
                  Performance tracking and optimization to ensure successful
                  campaigns.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Content Calendar Creation
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>Custom posting schedules to maintain consistency.</li>
                <li>
                  Pre-planned ideas for reels, stories, and TikToks based on
                  trends.
                </li>
                <li>
                  Seasonal and event-based content ideas to keep your brand
                  relevant.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Hashtag Strategy and Trend Spotting
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>
                  Research of niche-specific hashtags to boost discoverability.
                </li>
                <li>
                  Identifying and capitalizing on trends relevant to your
                  business.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Analytics and Growth Tracking
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>Monthly performance reports with actionable insights.</li>
                <li>
                  Suggestions to improve engagement, reach, and conversions.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Content Ideation and Production Assistance
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>
                  Help with brainstorming creative concepts for photos, videos,
                  and carousels.
                </li>
                <li>
                  Guidance on how to execute high-quality content (DIY or with
                  professional help).
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-[#fff]">
                Influencer Collaboration Strategy
              </h3>
              <ul className="list-disc ml-5 text-[#999] text-sm">
                <li>
                  Identifying and connecting with influencers aligned with your
                  brand.
                </li>
                <li>
                  Guidance on partnership strategies to maximize visibility.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Why Choose Me */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-text-gradient mb-4">
            Why Choose Me?
          </h2>
          <ul className="list-disc ml-5 text-[#999]">
            <li>
              Proven experience in growing audiences on TikTok and Instagram.
            </li>
            <li>Creative strategies tailored to your unique business needs.</li>
            <li>Deep understanding of platform algorithms and trends.</li>
            <li>Affordable, personalized solutions to help you stand out.</li>
          </ul>
        </section>

        {/* Payment Section */}
        <section className="text-center">
          <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-text-gradient mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-gray-600 mb-6">
            Let’s create a content strategy that works for you! Contact me today
            to get started.
          </p>
          <div className="flex justify-center mt-10">
            <a href="https://shopwithfrey.selar.co/173377">
              <button className="bg-text-gradient inline-flex gap-0.5 items-center py-2 px-4 rounded-full font-medium text-[#131313] transition-all duration-300 ease-in-out transform hover:animate-bounce">
                Make Payment <GoArrowUpRight />
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Socials;
