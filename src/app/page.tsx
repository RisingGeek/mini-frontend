"use client"

import SignupForm from "@/modules/SignupForm";

export default function Home() {
  const closeModal = () => (false);

  return (
    <main>
      <h1 className="text-lg">hello</h1>
     <SignupForm />
    </main>
  );
}
