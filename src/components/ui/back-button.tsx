import { type FC } from "react";

const BackButton: FC = () => {
  return (
    <button
      onClick={() => window.history.back()}
      aria-label="Go back"
      className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent"
    >
      ← Back
    </button>
  );
};

export default BackButton;
