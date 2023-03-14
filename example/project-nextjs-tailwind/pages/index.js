import Header from "../components/tokens/header";
import Typography from "../components/tokens/typography";
import Colors from "../components/tokens/colors";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-type-white-tertiary">
      <Header />
      <Typography />
      <Colors />
    </div>
  );
}
