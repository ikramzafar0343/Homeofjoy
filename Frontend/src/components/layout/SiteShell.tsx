import CookieConsent from "@/components/layout/CookieConsent";
import PageTransition from "@/components/motion/PageTransition";
import ScrollTriggerRefresh from "@/components/motion/ScrollTriggerRefresh";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

type SiteShellProps = {
  readonly children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SmoothScrollProvider />
      <ScrollTriggerRefresh />
      <PageTransition />
      <SiteHeader />
      <div id="siteContent">{children}</div>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
