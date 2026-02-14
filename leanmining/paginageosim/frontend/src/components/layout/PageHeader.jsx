import Container from '../ui/Container';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-16 md:py-20">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl text-slate-600 max-w-3xl">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
};

export default PageHeader;
