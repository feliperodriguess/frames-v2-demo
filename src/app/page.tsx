import { Metadata } from "next";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/icon.jpg`,
  button: {
    title: "Explore Frames v2!",
    action: {
      type: "launch_frame",
      name: "Frame v2 Example",
      url: appUrl,
      splashBackgroundColor: "#000000",
      splashImageUrl: `${appUrl}/splash.png`,
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frame v2 Example",
    openGraph: {
      title: "Frame v2 Example",
      description: "Explore Frames v2!",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello Frames v2!</h1>
    </main>
  );
}
