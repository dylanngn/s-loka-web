'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Zalo } from '@/components/icons/Zalo';

export function ChatWidget() {
  const [showDropdown, setShowDropdown] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const trackClick = (channel: string) => {
    console.log(`Chat widget clicked: ${channel}`);
    // You can add analytics tracking here
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      widgetRef.current &&
      !widgetRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-[9999] font-sans"
    >
      {/* Dropdown Menu */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="absolute bottom-[70px] right-0 w-80 origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="bg-[#f1aa04] p-4">
              <h3 className="font-semibold text-white">Contact Us</h3>
              <p className="mt-1 text-xs text-white/80">
                Choose your preferred support channel
              </p>
            </div>

            <div className="p-2">
              {/* Zalo */}
              <a
                href="https://zalo.me/0342445442"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-1 flex items-center rounded-xl p-3 text-gray-900 transition-all hover:translate-x-1 hover:bg-gray-100"
                onClick={() => trackClick('zalo')}
              >
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0068ff15] text-[#0068ff]">
                  <Zalo className="h-6 w-6" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    Zalo
                  </span>
                  <span className="mt-0.5 text-xs text-gray-500">
                    0342445442
                  </span>
                </div>
                <ChevronRightIcon className="h-4 w-4 text-gray-400" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/SLoka.LSP/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-1 flex items-center rounded-xl p-3 text-gray-900 transition-all hover:translate-x-1 hover:bg-gray-100"
                onClick={() => trackClick('facebook')}
              >
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877f215] text-[#1877f2]">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    Facebook
                  </span>
                  <span className="mt-0.5 text-xs text-gray-500">
                    S-LOKA
                  </span>
                </div>
                <ChevronRightIcon className="h-4 w-4 text-gray-400" />
              </a>

              {/* Email */}
              <a
                href="mailto:hello@s-loka.com"
                className="group flex items-center rounded-xl p-3 text-gray-900 transition-all hover:translate-x-1 hover:bg-gray-100"
                onClick={() => trackClick('email')}
              >
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ea433515] text-[#ea4335]">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    Email
                  </span>
                  <span className="mt-0.5 text-xs text-gray-500">
                    hello@s-loka.com
                  </span>
                </div>
                <ChevronRightIcon className="h-4 w-4 text-gray-400" />
              </a>
            </div>

            <div className="border-t border-gray-100 p-3 text-center">
              <p className="text-xs text-gray-500">24/7 Support</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <button
        onClick={toggleDropdown}
        className={clsx(
          'flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-[#f1aa04]/40 transition-all duration-300 hover:scale-105 hover:shadow-[#f1aa04]/50',
          showDropdown
            ? 'rotate-90 bg-gradient-to-br from-red-600 to-red-700'
            : 'bg-[#f1aa04]'
        )}
      >
        <AnimatePresence mode="wait">
          {showDropdown ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
