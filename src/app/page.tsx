import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">TierPass</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/sign-in"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 10,000+ tech professionals
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Unlock Exclusive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tech Events
            </span>{' '}
            by Your Tier
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From beginner workshops to elite summits, TierPass gives you access based on your tier.
            Join the most exclusive tech community and accelerate your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/sign-in">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">TRUSTED BY</div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400 font-medium">TechCorp</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400 font-medium">InnovateLab</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400 font-medium">DevStudio</span>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              10K+
            </div>
            <div className="text-slate-600 dark:text-slate-400">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              500+
            </div>
            <div className="text-slate-600 dark:text-slate-400">Events Monthly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              98%
            </div>
            <div className="text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              50+
            </div>
            <div className="text-slate-600 dark:text-slate-400">Countries</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              level up
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Access curated events, connect with industry leaders, and advance your career with our
            comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier System */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Smart Tier System
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Automatically matched to events based on your experience level and career goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Beginner to Expert levels
                </li>
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personalized recommendations
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Exclusive Access */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Exclusive Access
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                VIP events, private networking sessions, and direct access to industry leaders.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Private summits & dinners
                </li>
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  1-on-1 mentorship opportunities
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Global Network */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Global Network
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Connect with tech professionals from around the world in virtual and in-person
                events.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  50+ countries represented
                </li>
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 virtual events
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* AI-Powered Matching */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                AI-Powered Matching
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our AI analyzes your profile to suggest the most relevant events and connections.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Smart event recommendations
                </li>
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Networking suggestions
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Career Tracking */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Career Tracking
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Track your professional growth and unlock new tiers as you advance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Progress analytics
                </li>
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Achievement badges
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Premium Support */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Premium Support
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                24/7 concierge support to help you make the most of every event.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Dedicated account manager
                </li>
                <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Priority event booking
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="container mx-auto px-4 py-20 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm"
      >
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Loved by tech professionals worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                "TierPass completely transformed my career. The exclusive events and networking
                opportunities are unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Sarah Johnson</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Senior Developer at TechCorp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                "The AI-powered matching is incredible. I've attended events that perfectly aligned
                with my career goals."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Michael Chen</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    CTO at InnovateLab
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                "From beginner workshops to elite summits, TierPass has been my gateway to the tech
                community."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  ER
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Emily Rodriguez
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Product Manager at DevStudio
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Choose your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              tier
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include access to our global community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Beginner Tier */}
          <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Beginner</h3>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Free</div>
                <p className="text-slate-600 dark:text-slate-400">Perfect for getting started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">5 events per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Basic workshops</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Community access</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Pro Tier */}
          <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pro</h3>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  $29<span className="text-lg text-slate-600 dark:text-slate-400">/mo</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">For serious professionals</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Unlimited events</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Advanced conferences</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">AI-powered matching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Start Pro Trial</Button>
            </CardContent>
          </Card>

          {/* Elite Tier */}
          <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Elite</h3>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  $99<span className="text-lg text-slate-600 dark:text-slate-400">/mo</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">For industry leaders</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">VIP summits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Private dinners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">1-on-1 mentorship</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to unlock your potential?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of tech professionals who are already advancing their careers with
            TierPass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-colors bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 border-t border-slate-200 dark:border-slate-700">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">TierPass</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
              Unlock exclusive tech events by your tier. From beginner workshops to elite summits,
              advance your career with the most exclusive tech community.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                <span className="text-sm font-semibold">tw</span>
              </div>
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                <span className="text-sm font-semibold">li</span>
              </div>
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                <span className="text-sm font-semibold">gh</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TierPass. All rights reserved.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Powered by <span className="font-semibold text-slate-900 dark:text-white">Clerk</span>
              {' + '}
              <span className="font-semibold text-slate-900 dark:text-white">Supabase</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
