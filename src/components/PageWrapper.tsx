import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CallButton from "@/components/CallButton";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppWidget />
      <CallButton />
    </>
  );
}
