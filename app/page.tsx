import { css } from "@tokenami/css";

const text = css(
  { "--padding": 2 },
  {
    variant: {
      primary: {
        "--color": "var(--color-sky-500)",
      },
      secondary: {
        "--color": "var(--color-slate-700)",
      },
    },
  }
);
const Home = () => {
  return (
    <div>
      <p
        style={text(
          { variant: "primary" },
          { "--font-size": "var(---, 2rem)" }
        )}
      >
        Hello world
      </p>
      <p
        style={text(
          { variant: "secondary" },
          { "--font-size": "var(---, 2.5rem)" },
          { "--color": "var(---, red)" }
        )}
      >
        Hello world
      </p>
    </div>
  );
};

export default Home;
