export const Greetings = () => {
  const date = new Date();
  const hour = date.getHours();
  // const username = prop?.userToken?.displayName;
  // const capitalizedDisplayName =
  //   username.charAt(0).toUpperCase() + username.slice(1);
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
      {/* <h1 className="text-[#d65627]">{capitalizedDisplayName}</h1> */}
    </div>
  );
};
