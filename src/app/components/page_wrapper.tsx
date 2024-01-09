import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

export function PageWrapper(props: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
