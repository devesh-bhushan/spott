import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Spott - Delightful Events Start Here",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-[#0F1115] via-[#111317] to-black text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <ConvexClientProvider>
              <Header />

              <main className="relative min-h-screen w-full mx-auto pt-36 md:pt-28 px-4 sm:px-6 lg:px-8">
                {/* Subtle Professional Glows */}
                <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
                  <div className="absolute top-[-15%] left-[20%] w-[32rem] h-[32rem] bg-[#2563EB20] rounded-full blur-[180px]" />
                  <div className="absolute bottom-[-15%] right-[25%] w-[32rem] h-[32rem] bg-[#4F46E520] rounded-full blur-[180px]" />
                </div>

                {/* Very soft texture */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[url('/noise.png')] mix-blend-soft-light"></div>

                {/* Content */}
                <div className="relative z-10">{children}</div>

                <Footer />
              </main>

              <Toaster position="top-center" richColors />
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
