export default function SkeletonBlog() {
  return (
    <div className="animate-pulse space-y-4 p-4 max-w-3xl mx-auto">
      <div className="h-52 md:h-96 bg-gray-700 rounded-lg" />
      <div className="h-6 bg-gray-600 rounded w-3/4" />
      <div className="h-4 bg-gray-600 rounded w-1/2" />
      <div className="flex items-center gap-2 mt-4">
        <div className="h-10 w-10 rounded-full bg-gray-600" />
        <div className="space-y-1">
          <div className="h-3 bg-gray-600 rounded w-24" />
          <div className="h-2 bg-gray-500 rounded w-16" />
        </div>
      </div>
      <div className="h-4 bg-gray-600 rounded w-full mt-4" />
      <div className="h-4 bg-gray-600 rounded w-full" />
      <div className="h-4 bg-gray-600 rounded w-5/6" />
    </div>
  );
}
