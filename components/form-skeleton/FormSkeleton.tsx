export function FormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="h-4 w-16 bg-secondary rounded" />
          <div className="h-10 bg-secondary rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-16 bg-secondary rounded" />
          <div className="h-10 bg-secondary rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-16 bg-secondary rounded" />
        <div className="h-10 bg-secondary rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-16 bg-secondary rounded" />
        <div className="h-32 bg-secondary rounded" />
      </div>
      <div className="h-10 w-40 bg-primary/60 rounded" />
    </div>
  );
}
