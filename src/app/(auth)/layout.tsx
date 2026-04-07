import type { Metadata } from "next";



export const metadata: Metadata = {
	title: "Games Call - Login",
	description: "Log in to Discord & Discuss with your friends .",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className="flex h-screen justify-center items-center">{children}</div>;
}
