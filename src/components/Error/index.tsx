export const Error = ({
  error,
}: {
  error: {
    message: string;
  };
}) => {
  return <div>Error to load data: {error?.message}</div>;
};
