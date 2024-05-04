"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const getAccessToken = async (event) => {
    event.preventDefault();
    const data = `grant_type=password&username=${process.env.NEXT_PUBLIC_USERNAME}&password=${process.env.NEXT_PUBLIC_PASSWORD}&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`;

    try {
      setIsLoading(true);
      const result = await fetch(process.env.NEXT_PUBLIC_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });
      const responseBody = await result.json();
      console.log("access token::: ", responseBody.access_token);
      console.log("token type::: ", responseBody.token_type);
      setIsLoading(false);
    } catch (error) {
      console.log("There is an error::: ", error);
      setIsLoading(false);
    }
  };

  return (
    <main>
      <form>
        <Input type="text" placeholder="Email" />
        <Button type="submit" onClick={getAccessToken} disabled={isLoading}>
          {isLoading ? "Submitting" : "Submit"}
        </Button>
      </form>
    </main>
  );
}
