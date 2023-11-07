interface IEmptyStateProps {
  title: string;
  content: string;
}

const EmptyState = ({ title, content }: IEmptyStateProps) => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col border border-gray-100 rounded-lg justify-center items-center h-[30vh]">
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-base font-medium font-lato text-gray-700">
            {title}
          </h3>
          <p className="mt-1 text-sm font-lato text-gray-700">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
