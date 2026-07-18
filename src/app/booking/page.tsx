import type { Metadata } from "next";
import { BookingPageContent } from "@/components/pages/booking";

export const metadata: Metadata = {
  title: "Booking & Contact",
  description: "Booking, dates live, boutique 3KIP, FAQ et contact de GEN3RVTO. Festival, concert, média ou collaboration.",
};

export default function BookingPage() {
  return <BookingPageContent />;
}
