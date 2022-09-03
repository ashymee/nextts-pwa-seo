const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="bg-slate-900 text-orange-300 rounded-lg py-2 px-5 text-3xl">
      This is {title}
    </div>
  );
};

export default PageTitle;
