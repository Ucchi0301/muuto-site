import EventCarousel from "@/components/EventCarousel";
import EdgeToEdge from "@/components/EdgeToEdge";
import AboutMuuto from "@/features/aboutMuuto/components/AboutMuuto";
import Footer from "@/features/footer/components/Footer";
import Header from "@/features/header/components/Header";
import Hero from "@/features/hero/components/Hero";
import SafetySection from "@/features/safetySection/components/SafetySection";
import { partitionByStatus, sortUpcomingAsc, sortPastDesc } from "@/lib/events";
import { events } from "@/data/events";
import GallerySection from "@/components/GallerySection";
import JoinSection from "@/features/howToJoin/components/JoinSection";
import { listPublicImages } from "@/lib/listPublicImages";
export const revalidate = 60;
export default function Home() {
  const { upcoming, past } = partitionByStatus(events);
  const upcomingSorted = sortUpcomingAsc(upcoming);
  const pastSorted = sortPastDesc(past);

  // public/images/gallery 以下を自動収集（再帰なし/ありはお好みで）
  const imgs = listPublicImages("images/gallery", {
    recursive: false,
    sort: "asc",
  });

  return (
    <div>
      <Header />
      <Hero />
      <AboutMuuto />
      <SafetySection />
      <JoinSection />

      {/* 開催予定イベント */}
      <section id="events" className="mx-auto max-w-6xl pl-4 pr-4 py-4">
        <EdgeToEdge>
          <EventCarousel title="開催予定のイベント" events={upcomingSorted} />
        </EdgeToEdge>
      </section>

      {/* 過去イベント */}
      <section className="mx-auto max-w-6xl pl-4 pr-4 py-4">
        <EdgeToEdge>
          <EventCarousel title="過去イベント" events={pastSorted} />
        </EdgeToEdge>
      </section>

      {/* ギャラリー */}
      <section className="mx-auto max-w-6xl pl-4 pr-4 py-4">
        <EdgeToEdge>
          <GallerySection title="サークルの様子" images={imgs} />
        </EdgeToEdge>
      </section>

      {/* フッター */}
      <Footer />
    </div>
  );
}
