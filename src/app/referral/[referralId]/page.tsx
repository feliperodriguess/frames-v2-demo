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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ referralId: string }>;
}): Promise<Metadata> {
  const { referralId } = await params;
  return {
    title: `Referral ID: ${referralId}`,
    openGraph: {
      title: `Referral ID: ${referralId}`,
      description: "Explore Frames v2!",
    },
    other: {
      "fc:frame": JSON.stringify({
        ...frame,
        button: {
          title: `Referral ID: ${referralId}`,
          action: {
            ...frame.button.action,
            url: `${appUrl}/referral/${referralId}`,
          },
        },
      }),
    },
  };
}

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ referralId: string }>;
}) {
  const { referralId } = await params;
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {referralId && <p className="mt-2 text-2xl">Referral ID: {referralId}</p>}
    </main>
  );
}
