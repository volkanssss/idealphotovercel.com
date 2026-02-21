'use client';


import React from 'react';
import Link from 'next/link';
import { Camera, Heart, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">İdeal Photo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Create magical photo booth experiences with your favorite K-pop idols.
              Free, secure, and always improving.
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made for K-pop fans worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Photo Booths */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Photo Booths</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kpop-photobooth" className="text-gray-400 hover:text-white transition-colors">
                  K-pop Photobooth
                </Link>
              </li>
              <li>
                <Link href="/vintage-photobooth" className="text-gray-400 hover:text-white transition-colors">
                  Vintage Photobooth
                </Link>
              </li>
              <li>
                <Link href="/digibooth" className="text-gray-400 hover:text-white transition-colors">
                  Digital Booth
                </Link>
              </li>
              <li>
                <Link href="/wedding-photobooth" className="text-gray-400 hover:text-white transition-colors">
                  Wedding Photobooth
                </Link>
              </li>
              <li>
                <Link href="/pica-pica-booth" className="text-gray-400 hover:text-white transition-colors">
                  Pica Pica Booth
                </Link>
              </li>
              <li>
                <Link href="/easy4cut-photo-booth-online-free" className="text-gray-400 hover:text-white transition-colors">
                  Easy4cut Photo Booth Online Free
                </Link>
              </li>
              <li>
                <Link href="/memorify-photo-booth" className="text-gray-400 hover:text-white transition-colors">
                  Memorify Booth
                </Link>
              </li>
              <li>
                <Link href="/selfie-booth" className="text-gray-400 hover:text-white transition-colors">
                  Selfie Booth
                </Link>
              </li>
              <li>
                <Link href="/party-booth" className="text-gray-400 hover:text-white transition-colors">
                  Party Booth
                </Link>
              </li>
              <li>
                <Link href="/chinchinbooth" className="text-gray-400 hover:text-white transition-colors">
                  Chinchinbooth
                </Link>
              </li>
              <li>
                <Link href="/beautyplus-booth" className="text-gray-400 hover:text-white transition-colors">
                  BeautyPlus Booth
                </Link>
              </li>
              <li>
                <Link href="/jepreto-booth" className="text-gray-400 hover:text-white transition-colors">
                  Jepreto Booth
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:vlkneles1@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Mail className="h-4 w-4" />
                  <span>Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} İdeal Photo. All rights reserved. |
              <span className="ml-1">
                Made with <Heart className="h-4 w-4 inline text-pink-400" /> for K-pop fans
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>idealphotovercel.com</span>
              <a
                href="https://idealphotovercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit Site</span>
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            <p>
              İdeal Photo processes all images locally on your device. We respect your privacy and do not store any personal photos.
              All K-pop idol images are used for fan appreciation purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
