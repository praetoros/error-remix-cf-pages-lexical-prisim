import type { MetaFunction } from "@remix-run/cloudflare";
import Lexical from "~/components/Lexical";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Lexical />
    </div>
  );
}
