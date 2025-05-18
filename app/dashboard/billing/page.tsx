"use client";
import { Button } from "@/components/ui/button";
import React from "react";

function Billing() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold text-3xl my-3">
          Upgrade With Monthly Plan
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center">
          <div className="rounded-2xl bg-white border border-gray-200 p-3">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-center">0</strong>
                <span className="text-sm font-medium text-gray-700">/Monthly</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">100,000 Words/Month</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">50+ Content Templates</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">Unlimited Downloads and Copy</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">1 Month of History</span>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-transparent text-indigo hover:ring-1 hover:ring-indigo-600 focus:outline-none"
            >
              Currently Active Plan
            </a>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-3">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Monthly
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-center">$29</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">100,000 Words/Month</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">50+ Template Access</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">Unlimited Downloads and Copy</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5"
                  ></path>
                </svg>
                <span className="text-gray-700">1 Year of History</span>
              </li>
            </ul>

            <button className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-transparent text-indigo hover:ring-1 hover:ring-indigo-600 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;