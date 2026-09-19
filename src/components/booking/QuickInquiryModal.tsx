"use client";

import { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Plane, Send } from "lucide-react";

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTitle?: string;
  defaultCategory?: string;
}

export function QuickInquiryModal({
  isOpen,
  onClose,
  defaultTitle = "General Travel Consultation",
  defaultCategory = "Custom Tour Package",
}: QuickInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    travelers: "2",
    travelDate: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#C5A880]/30 animate-in zoom-in-95 duration-200">
        {/* Top gold accent line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0F4C3A] via-[#C5A880] to-[#0F4C3A]" />

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-zinc-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F7F3EB] text-[#0F4C3A] border border-[#C5A880]/40">
              <Plane className="w-3 h-3 text-[#C5A880]" />
              {defaultCategory}
            </span>
            <h2 id="inquiry-title" className="mt-2 text-xl font-serif font-bold text-zinc-900">
              {defaultTitle}
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Direct consultation with our senior travel concierges
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-emerald-50 text-[#0F4C3A] flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-zinc-900">
                  Inquiry Received with Pleasure
                </h3>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.fullName || "valued traveler"}</span>. Our travel specialist will contact you at{" "}
                  <span className="font-semibold text-[#0F4C3A]">{formData.phone || "your contact number"}</span> within 30 minutes.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0F4C3A] text-white hover:bg-[#0B3B2D] transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Tanvir Ahmed"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1700-000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Travelers Count
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm outline-none transition-all bg-white"
                  >
                    <option value="1">1 Solo Traveler</option>
                    <option value="2">2 Adults (Couple)</option>
                    <option value="3-4">3-4 Persons (Small Family)</option>
                    <option value="5+">5+ Persons (Group/Corporate)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                  Specific Requests or Itinerary Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your preferred airlines, hotel star rating, or dates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm outline-none transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-[#0F4C3A]" />
                  <span>100% Privacy & No spam</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F4C3A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0B3B2D] transition-all shadow-md shadow-[#0F4C3A]/10 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Callback</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
