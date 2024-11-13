"use client";
import Image from "next/image";
import Link from "next/link";
import DeveloperTools from "@/components/DeveloperTools";
import UserAccess from "@/components/UserAccess";
import {
  ArrowRight,
  Code,
  Globe,
  Zap,
  Menu,
  Shield,
  BarChart,
  Coins,
  Network,
  Search,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { storeWebpageOnChain } from "@/utils/db/actions";
import { createWebpage } from "@/utils/db/actions";

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Decentralize Deployment",
      description:
        "Deploy and access your website forever for free on the blockchain.",
    },
    {
      icon: Zap,
      title: "Instant Preview & CI/CD",
      description:
        "Automatic deployments from GitHub with instant preview links and version control.",
    },
    {
      icon: Cpu,
      title: "AI Website Generator",
      description:
        "Generate a website using AI and deploy it directly to the blockchain.",
    },
    {
      icon: Search,
      title: "Decentralized Search Engine",
      description:
        "Our search engine has indexed all websites on the blockchain network.",
    },
    {
      icon: BarChart,
      title: "Analytics & Monitoring",
      description:
        "Real-time analytics dashboard and uptime monitoring for your decentralized websites.",
    },
    {
      icon: Network,
      title: "Decentralized CDN",
      description:
        "Utilize our decentralized content delivery network for faster and more reliable access.",
    },
  ];

  const [domain, setDomain] = useState("");
  const [content, setContent] = useState("");
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployedUrl, setDeployedUrl] = useState("");

  const handleDeploy = async () => {
    setIsDeploying(true);
    try {
      // Call the createWebpage function
      const { txHash, cid } = await createWebpage("4ffdsfdf", domain, content); // Assuming userId 1 for now

      // Set the deployed URL
      setDeployedUrl(`https://http3.io/${domain}`);

      console.log(
        `Deployed successfully. Transaction hash: ${txHash}, CID: ${cid}`
      );
    } catch (error) {
      console.error("Deployment failed:", error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
        <header className="mb-12 text-center">
          <Image
            className="mx-auto text-white mb-4"
            src="/deploy.svg"
            alt="HTTP3 logo"
            width={70}
            height={38}
            priority
          />
          <h1 className="text-5xl max-w-3xl mx-auto font-bold mb-4">
            The Future of Web3 Hosting on{" "}
            <span className="text-primary">Smart Contracts</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Host your legacy websites like calculators and unit converters on
            the blockchain, absolutely free! No hosting fees, no expiration
            dates. Preserve your simple web projects forever with HTTP3's
            decentralized hosting.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="mr-4">
              Deploy for Free Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn How It Works
          </Button>
        </header>

        <main className="max-w-6xl mx-auto">
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Revolutionary Web3 Hosting Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] border border-1 p-6 rounded-xl transition-opacity duration-300 hover:opacity-80 hover:shadow-lg"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <DeveloperTools />
          <UserAccess />

          {/* New sections can be added here for Marketplace, Governance, etc. */}
        </main>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 HTTP3. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}