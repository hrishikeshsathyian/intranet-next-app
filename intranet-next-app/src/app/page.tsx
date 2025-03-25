'use client';

// import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  // const router = useRouter();
  useEffect(() => {
    console.log("Uncomment to enable intranet");

  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500">
    </div>
  );
}
