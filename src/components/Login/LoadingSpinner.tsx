
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const LoadingSpinner = ({ size = 'md', color = 'border-button' }: LoadingSpinnerProps) => {

  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4'
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]}
          border-t-transparent
          ${color}
          rounded-full
          animate-[spin_0.8s_linear_infinite]
          motion-reduce:animate-[spin_1.5s_linear_infinite]
        `}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}