import Footer from "~/components/footer";
import Header from "~/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-y-3 p-10 relative">
      <Header />
      <div className="py-5">{children}</div>
      <Footer />
    </main>
  );
}
