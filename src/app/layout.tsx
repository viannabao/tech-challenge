import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import AppBar from "@/components/AppBar";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "Tech Challenge",
  description: "Leonardo.AI web team tech challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <UserProvider>
            <AppBar />
          </UserProvider>
          <main id="main-content">{children}</main>
        </ChakraProvider>
      </body>
    </html>
  );
}
