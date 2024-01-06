const Home = () => {
  return (
    <div
      style={{
        "--m": 5,
      }}
    >
      <div
        style={{
          "--mx": 3,
        }}
      >
        <p
          style={{
            // This isn't applied correctly
            "--ml": 50,
          }}
        >
          Hello world
        </p>
      </div>
    </div>
  );
};

export default Home;
