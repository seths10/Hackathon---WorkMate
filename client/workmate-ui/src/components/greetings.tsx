export const Greetings = () => {
  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="flex items-center gap-1 text-gray-500 text-lg font-normal">
      {hour >= 12 ? (
        hour >= 16 ? (
          <h1>Good Evening,</h1>
        ) : (
          <h1>Good Afternoon,</h1>
        )
      ) : (
        <h1>Good Morning,</h1>
      )}
    </div>
  );
};
