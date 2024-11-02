type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div>
      <p className="text-4xl font-bold text-gray-800">{title}</p>
    </div>
  );
};

export default PageHeader;
