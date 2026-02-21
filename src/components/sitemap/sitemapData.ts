
interface SitemapLinkItem {
  path: string;
  label: string;
}

interface SitemapCategory {
  title: string;
  links: SitemapLinkItem[];
}

export const photoboothProducts: SitemapCategory = {
  title: "Photobooth Products",
  links: [
    { path: "/kpop-photo-booth", label: "K-pop Photo Booth" },
    { path: "/pica-pica-booth", label: "Pica Pica Booth" },
    { path: "/digibooth", label: "Digibooth" },
    { path: "/vintage-photobooth", label: "Vintage Photobooth" },
    { path: "/wedding-photobooth", label: "Wedding Photobooth" },
    { path: "/easy4cut-photo-booth-online-free", label: "Easy4cut Photo Booth Online Free" },
    { path: "/memorify-photo-booth", label: "Memorify Photo Booth" },
    { path: "/memorify", label: "Memorify" },
    { path: "/selfie-booth", label: "Selfie Booth" },
    { path: "/party-booth", label: "Party Booth" },
    { path: "/chinchinbooth", label: "Chinchinbooth" },
    { path: "/beautyplus-booth", label: "BeautyPlus Booth" },
    { path: "/jepreto-booth", label: "Jepreto Booth" }
  ]
};

export const blogPosts: SitemapCategory = {
  title: "Blog Posts",
  links: [
    { path: "/blog/top-kpop-photo-ideas", label: "Top K-pop Photo Ideas" },
    { path: "/blog/perfect-fan-photo-guide", label: "Perfect Fan Photo Guide" },
    { path: "/blog/behind-the-scenes-idol-assets", label: "Behind the Scenes: Idol Assets" },
    { path: "/blog/kpop-photo-trends-2023", label: "K-pop Photo Trends 2023" },
    { path: "/blog/fan-stories-photo-memories", label: "Fan Stories & Photo Memories" },
    { path: "/blog/new-features-backgrounds-stickers", label: "New Features & Backgrounds" },
    { path: "/blog/easy4cut-photo-booth-guide", label: "Easy4cut Photo Booth Guide" },
    { path: "/blog/memorify-photobooth-tips", label: "Memorify Photobooth Tips" },
    { path: "/blog/pica-pica-photobooth-experience", label: "Pica Pica Photobooth Experience" },
    { path: "/blog/online-photo-booth-comparison", label: "Online Photo Booth Comparison" }
  ]
};

export const legalInformation: SitemapCategory = {
  title: "Legal Information",
  links: [
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/terms-of-service", label: "Terms of Service" },
    { path: "/cookie-policy", label: "Cookie Policy" }
  ]
};

export const mainPages: SitemapCategory = {
  title: "Main Pages",
  links: [
    { path: "/", label: "Home Page" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "Frequently Asked Questions" },
    { path: "/sitemap", label: "Sitemap" }
  ]
};
