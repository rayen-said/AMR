"use client";

import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="pt-20 min-h-screen">
      <WaitlistForm quotePrefill={null} onPrefillConsumed={() => {}} />
    </div>
  );
}
