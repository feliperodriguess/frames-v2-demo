const appUrl = process.env.NEXT_PUBLIC_URL;

export async function GET() {
  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjI1MzQ3MCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDU4NTgxY0M5NDJjNWVDOEIzRjE5MGM0MTlmNTI1YzJjRjdCODVmMTYifQ",
      payload: "eyJkb21haW4iOiJmcmFtZXMtdjItZGVtby1uYXZ5LnZlcmNlbC5hcHAifQ",
      signature:
        "MHhkMTYzNmE1ZGI4ZDE3ZDAyZDJmZDk0ZjgxM2QzZmJmMWVmMzQyN2UzMzg1ODAwNWQ0ODAyNmUxMDU1ODk0NzQzNzZlM2JmNjJhYzczYTM4OWM0ZWJlMDEzMGQ0ZmU4YzU1YmIzZjA2Mzc1NTgzOTc5NWQzMjFmZjU3ZTU5MmY4NTFi",
    },
    frame: {
      version: "next",
      name: "Frame v2 Example",
      buttonTitle: "Explore Frames v2!",
      homeUrl: appUrl,
      iconUrl: `${appUrl}/icon.jpg`,
      imageUrl: `${appUrl}/icon.jpg`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#000000",
    },
  };

  return Response.json(config);
}
