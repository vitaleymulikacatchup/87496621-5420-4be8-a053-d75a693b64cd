"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Battery, Camera, Monitor, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="wavyBackground"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Mac", id: "mac" },
            { name: "iPad", id: "ipad" },
            { name: "iPhone", id: "iphone" },
            { name: "Watch", id: "watch" },
            { name: "TV", id: "tv" }
          ]}
          brandName="Apple"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="iPhone 17 Pro"
          description="All out Pro. The most advanced iPhone ever with breakthrough technology."
          imageSrc="https://pixabay.com/get/g75b42b0886aa38ae0c4c1c35fef34b3c08e4c66d448bdc9d91a7ff01376ec28c87b2706b223de76682fe19c6bd23a7b34cad1a60dc30a83cc1261d0667844da9_1280.jpg"
          imageAlt="iPhone 17 Pro"
          frameStyle="card"
          buttons={[
            { text: "Learn more", href: "https://apple.com/iphone-17-pro" },
            { text: "Buy", href: "https://apple.com/shop" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="We build products that empower everyone to create, connect, and express themselves in ways never before possible"
          buttons={[
            { text: "Explore Our Story", href: "about" },
            { text: "Shop Products", href: "https://apple.com/shop" }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Innovation in Every Detail"
          description="Discover the breakthrough technologies that make our products extraordinary"
          features={[
            {
              title: "Ultimate Performance",
              description: "The most powerful chips deliver incredible performance for everything you love to do",
              icon: Zap,
              button: { text: "Learn more", href: "performance" }
            },
            {
              title: "Advanced Camera System",
              description: "Capture stunning photos and videos with our most advanced camera technology",
              icon: Camera,
              button: { text: "Learn more", href: "camera" }
            },
            {
              title: "All-Day Battery Life",
              description: "Power that lasts all day, so you can do more of what you love",
              icon: Battery,
              button: { text: "Learn more", href: "battery" }
            },
            {
              title: "Pro Display Technology",
              description: "Brilliant displays with incredible color accuracy and brightness",
              icon: Monitor,
              button: { text: "Learn more", href: "display" }
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Explore Our Products"
          description="Discover the complete lineup of innovative Apple products"
          products={[
            {
              id: "iphone-air",
              brand: "Apple",
              name: "iPhone Air",
              price: "From $799",
              rating: 5,
              reviewCount: "45.2k",
              imageSrc: "https://pixabay.com/get/g974720e0f9de611b8f8adb5d714d51b5c562b9b09bf4bf1af3f6d3c1aab71a48aa52d58d6bdc0c644734d9843d45d2949df8360ad30aadf195defd7cb0920347_1280.jpg",
              imageAlt: "iPhone Air",
              onProductClick: () => window.open('https://apple.com/iphone-air', '_blank')
            },
            {
              id: "apple-watch",
              brand: "Apple",
              name: "Apple Watch Series 11",
              price: "From $399",
              rating: 5,
              reviewCount: "38.7k",
              imageSrc: "https://pixabay.com/get/g6c57483c2eeaa73bbbfd83b17a777ff611c6ce95ee83555748dabc7a4a4be9f61347008e7055a667ff651718df89c6344f0030eb530c935c8b8fd9ddbcf8edec_1280.jpg",
              imageAlt: "Apple Watch Series 11",
              onProductClick: () => window.open('https://apple.com/apple-watch', '_blank')
            },
            {
              id: "ipad-pro",
              brand: "Apple",
              name: "iPad Pro",
              price: "From $1,099",
              rating: 5,
              reviewCount: "29.4k",
              imageSrc: "https://pixabay.com/get/g4c2790ad08f459f84eb56a8254f4a5abdaa7c4f02c550fafc97be295745e790e45684bdcea704e829f38cf6e9bfa04273cc55339d950b84ed1f62f81cdd88279_1280.jpg",
              imageAlt: "iPad Pro",
              onProductClick: () => window.open('https://apple.com/ipad-pro', '_blank')
            },
            {
              id: "macbook-air",
              brand: "Apple",
              name: "MacBook Air",
              price: "From $1,199",
              rating: 5,
              reviewCount: "52.1k",
              imageSrc: "https://pixabay.com/get/gefbc1269f5e89d774591c92ad3b572ad50cd501b36c12542d22b7b16febc3c2a95fcd1be79ebc1b8111eb335b3872ccee1793fc4fdcf1256d0656c2d98439c2b_1280.jpg",
              imageAlt: "MacBook Air",
              onProductClick: () => window.open('https://apple.com/macbook-air', '_blank')
            },
            {
              id: "mac-studio",
              brand: "Apple",
              name: "Mac Studio",
              price: "From $1,999",
              rating: 5,
              reviewCount: "18.3k",
              imageSrc: "https://pixabay.com/get/g151087f1c79f6326628837133bd036682739a73a74401c28486d66cf59373c5ca6b9e77f109043687e33aba318e822f8507743a1445ee86d1b53336ceef43df1_1280.jpg",
              imageAlt: "Mac Studio",
              onProductClick: () => window.open('https://apple.com/mac-studio', '_blank')
            },
            {
              id: "airpods-pro",
              brand: "Apple",
              name: "AirPods Pro",
              price: "From $249",
              rating: 5,
              reviewCount: "67.8k",
              imageSrc: "https://pixabay.com/get/ga39bb6d047f07f2430ee82f18824aaba4151a8b7713e0431c82a55d93c716e0273e8405cac4cae6ce11b59b9fec36b574fca8953db1a5f9387416a64395cf6d0_1280.jpg",
              imageAlt: "AirPods Pro",
              onProductClick: () => window.open('https://apple.com/airpods-pro', '_blank')
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Leading Technology Companies"
          description="Join the world's most innovative companies who choose our technology"
          logos={[
            "https://pixabay.com/get/g86788de324a1ffeccb4be8a61e6e0b009751de6aa362038eba14d7b455bc87047dd46da97842b5434830c4e99cff863127030e46b539be286e153b7655469e0b_1280.jpg",
            "https://pixabay.com/get/g6478d49b9a109a4b756499a8f85adf2eca8c75c41e6a5d2eefea56c2b668f2687782c3642ca507899383901605bc7f57bc4cf0701d5fbbbc89471d66579233ed_1280.jpg",
            "https://pixabay.com/get/g59d1c4c6731ec1acc32e6a04558bb0c0ac7931cb7665a510748426563d1470470ec70e9ca273838dc02edad53f995982f02605766adbb31508c10b93b2646289_1280.jpg",
            "https://pixabay.com/get/gfdcdd493fdacff7c2380d76c0b8463b987c22db446052b5428d642ec190e8c243468a63b36b2b3fdfecf679e3fd94f37729160af2696a3db063b2912673f004a_1280.jpg",
            "https://pixabay.com/get/g4e100fc428c5168ac9ec1f5191b8b20aaa994e025d233fb2970ba35979af7f145fe389ae48e20fce5d41684648734e88c299e9a1ff23441e0f0fa0b5eb6829a3_1280.jpg"
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Get the latest Apple updates"
          description="Be the first to know about new products, exclusive offers, and innovation breakthroughs delivered to your inbox"
          imageSrc="https://pixabay.com/get/ga16f64c048d083059082c3ca612e16c0922cb3101014009c07d8d5bc41f963bef45c3a572781b1336d8c5a53bf8226227938ffef5753a2d952b570e66ca6ec8e_1280.jpg"
          imageAlt="Apple technology workspace"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Sign Up"
          termsText="By signing up you agree to receive updates from Apple. You can unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Apple"
          columns={[
            {
              title: "Shop and Learn",
              items: [
                { label: "Mac", href: "mac" },
                { label: "iPad", href: "ipad" },
                { label: "iPhone", href: "iphone" },
                { label: "Watch", href: "watch" },
                { label: "Apple TV", href: "tv" },
                { label: "AirPods", href: "airpods" }
              ]
            },
            {
              title: "Apple Store",
              items: [
                { label: "Find a Store", href: "https://apple.com/retail" },
                { label: "Shop Online", href: "https://apple.com/shop" },
                { label: "Genius Bar", href: "https://apple.com/retail/geniusbar" },
                { label: "Today at Apple", href: "https://apple.com/today" }
              ]
            },
            {
              title: "For Business",
              items: [
                { label: "Apple and Business", href: "https://apple.com/business" },
                { label: "Shop for Business", href: "https://apple.com/retail/business" },
                { label: "Education", href: "https://apple.com/education" }
              ]
            },
            {
              title: "Account",
              items: [
                { label: "Manage Your Apple ID", href: "https://appleid.apple.com" },
                { label: "Apple Store Account", href: "https://apple.com/shop/account" },
                { label: "iCloud.com", href: "https://icloud.com" }
              ]
            },
            {
              title: "Apple Values",
              items: [
                { label: "Accessibility", href: "https://apple.com/accessibility" },
                { label: "Environment", href: "https://apple.com/environment" },
                { label: "Privacy", href: "https://apple.com/privacy" },
                { label: "Supplier Responsibility", href: "https://apple.com/supplier-responsibility" }
              ]
            },
            {
              title: "About Apple",
              items: [
                { label: "Newsroom", href: "https://apple.com/newsroom" },
                { label: "Apple Leadership", href: "https://apple.com/leadership" },
                { label: "Career Opportunities", href: "https://apple.com/careers" },
                { label: "Investors", href: "https://investor.apple.com" },
                { label: "Ethics & Compliance", href: "https://apple.com/compliance" },
                { label: "Events", href: "https://apple.com/apple-events" },
                { label: "Contact Apple", href: "https://apple.com/contact" }
              ]
            }
          ]}
          copyrightText="Copyright © 2025 Apple Inc. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}