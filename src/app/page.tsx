"use client";

import { useState } from "react";
import {
  Search,
  Home,
  Box,
  ChevronDown,
  Plus,
  MoreHorizontal,
  GitBranch,
  FileText,
  GitPullRequest,
  CircleDot,
  Paperclip,
  Hash,
} from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export default function CopilotPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen bg-[#f6f8fa]">
      {/* Sidebar */}
      <div className="flex w-[240px] flex-col border-r border-[#d0d7de] bg-white">
        {/* Logo Header */}
        <div className="border-b border-[#d0d7de] px-4 py-3">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#24292f" />
              <circle
                cx="16"
                cy="16"
                r="10"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="16" cy="16" r="5" fill="white" />
            </svg>
            <span className="text-[14px] font-semibold">Copilot</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-2">
          <button className="mb-[2px] flex w-full items-center gap-3 rounded-md px-3 py-[6px] text-left hover:bg-[#f6f8fa]">
            <Home className="h-4 w-4 text-[#57606a]" />
            <span className="text-[14px] font-normal text-[#24292f]">Home</span>
          </button>
          <button className="flex w-full items-center gap-3 rounded-md bg-[#f6f8fa] px-3 py-[6px] text-left">
            <Box className="h-4 w-4 text-[#57606a]" />
            <span className="text-[14px] font-normal text-[#24292f]">
              Spaces
            </span>
            <span className="ml-auto rounded-xl bg-[#dafbe1] px-2 py-0.5 text-[12px] font-medium text-[#1a7f37]">
              Preview
            </span>
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#d0d7de] bg-white px-4 py-2">
          <div className="flex items-center gap-3">
            <button className="rounded p-1.5 hover:bg-[#f6f8fa]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="#57606a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5h14M3 10h14M3 15h14"
                />
              </svg>
            </button>
            <button className="rounded p-1.5 hover:bg-[#f6f8fa]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20">
                <rect
                  x="3"
                  y="3"
                  width="6"
                  height="6"
                  stroke="#57606a"
                  strokeWidth="1.5"
                  rx="1"
                />
                <rect
                  x="11"
                  y="3"
                  width="6"
                  height="6"
                  stroke="#57606a"
                  strokeWidth="1.5"
                  rx="1"
                />
                <rect
                  x="3"
                  y="11"
                  width="6"
                  height="6"
                  stroke="#57606a"
                  strokeWidth="1.5"
                  rx="1"
                />
                <rect
                  x="11"
                  y="11"
                  width="6"
                  height="6"
                  stroke="#57606a"
                  strokeWidth="1.5"
                  rx="1"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <MoreHorizontal className="h-5 w-5 text-[#57606a]" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col bg-[#f6f8fa]">
          {/* Empty State */}
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaeef2]">
                <Box className="h-8 w-8 text-[#57606a]" strokeWidth={1.5} />
              </div>
              <h2 className="mb-1 text-[18px] font-normal text-[#24292f]">
                No conversations yet
              </h2>
              <p className="text-[14px] leading-normal text-[#57606a]">
                Ask Copilot anything on the right to start
                <br />
                your first conversation.
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-[#d0d7de] bg-white p-4">
            <div className="mx-auto max-w-[720px]">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you?"
                  className="w-full rounded-lg border border-[#d0d7de] bg-[#f6f8fa] px-4 py-3 pr-44 text-[14px] placeholder-[#57606a] focus:border-transparent focus:ring-2 focus:ring-[#0969da] focus:outline-none"
                />
                <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center">
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="rounded p-2 text-[#57606a] hover:bg-[#eaeef2]">
                          <Paperclip className="h-4 w-4" />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="rounded bg-[#24292f] px-2 py-1 text-xs text-white">
                          Attach
                          <Tooltip.Arrow className="fill-[#24292f]" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>

                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="rounded p-2 text-[#57606a] hover:bg-[#eaeef2]">
                          <Hash className="h-4 w-4" />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="rounded bg-[#24292f] px-2 py-1 text-xs text-white">
                          Space
                          <Tooltip.Arrow className="fill-[#24292f]" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>

                  <button className="flex items-center gap-1 rounded px-2 py-1 text-[14px] text-[#57606a] hover:bg-[#eaeef2]">
                    GPT-4.1
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  <button className="p-2 text-[#57606a]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20">
                      <path d="M10 18l8-8-8-8v6H2v4h8v6z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <button className="flex items-center gap-2 text-[14px] text-[#0969da] hover:underline">
                  <CircleDot className="h-4 w-4" />
                  Create issue
                </button>
                <button className="flex items-center gap-2 text-[14px] text-[#0969da] hover:underline">
                  <FileText className="h-4 w-4" />
                  Files
                </button>
                <button className="flex items-center gap-2 text-[14px] text-[#0969da] hover:underline">
                  <GitPullRequest className="h-4 w-4" />
                  Pull requests
                </button>
                <button className="flex items-center gap-2 text-[14px] text-[#0969da] hover:underline">
                  <CircleDot className="h-4 w-4" />
                  Issues
                </button>
                <button className="flex items-center gap-2 text-[14px] text-[#0969da] hover:underline">
                  <GitBranch className="h-4 w-4" />
                  Git
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#d0d7de] bg-white px-4 py-3 text-center">
            <p className="text-[12px] text-[#57606a]">
              <a href="#" className="text-[#0969da] hover:underline">
                Upgrade to Pro
              </a>{" "}
              to access higher limits and premium models.
            </p>
            <p className="mt-1 text-[12px] text-[#57606a]">
              <a href="#" className="text-[#0969da] hover:underline">
                Copilot
              </a>{" "}
              uses AI. Check for mistakes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
