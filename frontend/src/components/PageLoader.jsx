const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080b1f]">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-slate-200" aria-label="Loading" />
    </div>
  );
};

export default PageLoader;
