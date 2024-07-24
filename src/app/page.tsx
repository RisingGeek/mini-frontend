"use client"

import LoginForm from "@/modules/LoginForm";

export default function Home() {
  const closeModal = () => (false);

  return (
    <main>
      <h1 className="text-lg">hello</h1>
     <LoginForm />
    </main>
  );
}
