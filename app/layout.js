import "./globals.css";
import { League_Spartan } from "next/font/google";
import { JobContextProvider } from "./context/jobsContext";

const League = League_Spartan({
  preload: false,
  weight: ["500", "700"],
});

export const metadata = {
  title: "Job listings with filtering",
  description: "Job listings with filtering , frontend mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={League.className}>
        <JobContextProvider>{children}</JobContextProvider>
      </body>
    </html>
  );
}
