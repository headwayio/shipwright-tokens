import Header from "../components/header";
import Typography from "../components/typography";
import Colors from "../components/colors";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-type-white-tertiary">
      <Header />
      <Typography />
      <Colors />
    </div>
  );
}
